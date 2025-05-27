import { stackServerApp } from "@/stack";

export default async function Settings() {
  await stackServerApp.getUser({ or: "redirect" });

  return <div>Configure Settings</div>;
}
