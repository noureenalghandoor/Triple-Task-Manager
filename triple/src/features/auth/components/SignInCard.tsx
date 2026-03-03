import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/OR";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import { loginSchema } from "@/features/auth/schemas";
import { useLogin } from "@/features/auth/api/use-login";

const SignInCard = () => {
  const { mutate } = useLogin();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate({ json: values });
  };

  const pathname = usePathname();

  return (
    <Card className="w-full h-full md:w-121.75 border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
      </CardHeader>

      <Separator label={""} />

      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"password"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={false}
              size={"lg"}
              className={"w-full"}
            >
              Login
            </Button>
            <Separator />

            <div className="space-y-2">
              <Button
                variant={"secondary"}
                className="w-full flex items-center justify-center gap-2"
                size="lg"
                disabled={false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.32 1.53 7.77 2.82l5.7-5.7C33.89 3.22 29.34 1 24 1 14.62 1 6.73 6.8 3.69 14.99l6.96 5.41C12.23 14.01 17.63 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.5 24.5c0-1.63-.15-2.86-.47-4.14H24v7.84h12.66c-.26 2.1-1.68 5.25-4.82 7.38l7.39 5.74C43.94 37.18 46.5 31.5 46.5 24.5z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.65 28.4a14.47 14.47 0 010-8.8l-6.96-5.41A23.98 23.98 0 001 24c0 3.86.92 7.52 2.69 10.81l6.96-5.41z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 47c6.48 0 11.92-2.14 15.89-5.83l-7.39-5.74c-2.06 1.43-4.83 2.42-8.5 2.42-6.37 0-11.77-4.51-13.35-10.9l-6.96 5.41C6.73 41.2 14.62 47 24 47z"
                  />
                </svg>
                Login With Google
              </Button>

              <Button
                variant={"secondary"}
                className="w-full flex items-center justify-center gap-2"
                size="lg"
                disabled={false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.39-3.88-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.39.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.17a11.2 11.2 0 015.82 0c2.22-1.48 3.2-1.17 3.2-1.17.63 1.59.23 2.76.11 3.05.75.8 1.2 1.82 1.2 3.07 0 4.4-2.69 5.36-5.25 5.65.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
                Login With GitHub
              </Button>

              <div className="flex flex-col text-center justify-between mt-5">
                {pathname === "/sign-in"
                  ? "Don't have an account yet?"
                  : "Have an account already?"}
                <Button
                  asChild
                  type="button"
                  variant="outline"
                  className="mt-5"
                >
                  <Link
                    href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}
                  >
                    {pathname === "/sign-in" ? "Sign Up" : "Login"}
                  </Link>
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
export default SignInCard;
