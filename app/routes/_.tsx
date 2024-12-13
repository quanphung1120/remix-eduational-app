import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Navbar } from "~/components/ui/navbar";
import { createServerClient } from "~/lib/supabase";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase, headers } = createServerClient(request, request.headers);

  const { data } = await supabase.auth.getUser();

  return json({ data }, { headers });
};

export default function IndexLayout() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <div>
      <Navbar isLogged={data.user != null} />
      <Outlet />
    </div>
  );
}
