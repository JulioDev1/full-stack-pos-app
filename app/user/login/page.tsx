import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 bg-neutral-800">
      <form className="flex flex-col gap-5">
        <Input placeholder="digit your email" />

        <Input placeholder="digit your password" />
        <Button>Submit</Button>
        <Link className="text-slate-50 w-full" href="/user/register">
          Not have account ?
        </Link>
      </form>
    </div>
  );
}
