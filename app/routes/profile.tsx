import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { isUserAuthorized } from "~/lib/session";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { user, headers } = await isUserAuthorized(request);

  return json({ user }, { headers });
};

export default function Login() {
  const { user } = useLoaderData<typeof loader>();

  return <div>Welcome back {user?.email}</div>;
}
