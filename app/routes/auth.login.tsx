import { json, LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";
import LoginForm from "~/components/ui/login-form";
import { createServerClient } from "~/lib/supabase";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase, headers } = createServerClient(request, request.headers);

  const { data } = await supabase.auth.getUser();

  if (data) {
    return redirect("/profile");
  }

  return Response.json({}, { headers });
};

export default function Login() {
  return <LoginForm />;
}
