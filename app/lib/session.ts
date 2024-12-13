import { redirect } from "@remix-run/node";
import { createServerClient } from "./supabase";

export const isUserAuthorized = async (request: Request) => {
  const { supabase, headers } = createServerClient(request, request.headers);

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    throw redirect("/auth/login");
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    // JWT validation has failed
    throw redirect("/auth/login");
  }

  return { session, user, headers };
};
