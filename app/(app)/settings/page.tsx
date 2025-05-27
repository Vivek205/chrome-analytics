"use client";
import { useUser } from "@stackframe/stack";

export default function Settings() {
  useUser({ or: "redirect" });
  return <div>Configure Settings</div>;
}
