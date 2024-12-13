import { cn } from "~/lib/utils";
import GitHubIcon from "../icon/github-icon";
import { buttonVariants } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import GoogleIcon from "../icon/google-icon";

export default function LoginForm() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center align-middle gap-5">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Your data is protected</CardDescription>
        </CardHeader>
        <CardContent>
          <a
            className={cn(buttonVariants({ variant: "default" }), "w-full")}
            href="/auth/github"
          >
            <GitHubIcon />
            Sign in with GitHub
          </a>

          <a
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full mt-3"
            )}
            href="/auth/google"
          >
            <GoogleIcon />
            Sign in with Google
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
