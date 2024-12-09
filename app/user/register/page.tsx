import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 bg-neutral-800">
      <form className="flex gap-5 flex-col">
        <Input placeholder="digit your email" />
        <Input placeholder="digit your password" />
        <Input placeholder="digit your repeat your password" />
        <Link className="text-slate-50" href="/user/login">
          Already have account
        </Link>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
