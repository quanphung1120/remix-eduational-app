import { Outlet } from "@remix-run/react";

export default function Dashboard() {
  return (
    <div>
      This is dashboard layout
      <Outlet />
    </div>
  );
}
