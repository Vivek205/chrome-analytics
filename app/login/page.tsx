import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function LoginPage() {
  const signinWithGoogleAction = async () => {
    "use server";
    await signIn("google", { redirectTo: "/extensions" });
  };
  return (
    <div className="flex h-screen items-center justify-center ">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        <CardFooter>
          <form action={signinWithGoogleAction} className="w-full">
            <Button type="submit" variant="outline" className="w-full cursor-pointer">
              Signin With Google
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
