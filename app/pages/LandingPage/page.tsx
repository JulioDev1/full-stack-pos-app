import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <Button>
      <Link href="/user/login">User register routes</Link>
    </Button>
  );
}
