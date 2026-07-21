import Link from "next/link";
import { Button } from "../ui/button";
import { LuTent } from "react-icons/lu";
import { FaHotel } from "react-icons/fa";

const Logo = () => {
  return (
    <Button
      size="icon"
      asChild
      className="h-10 w-10"
    >
      <Link href="/">
        <FaHotel />
      </Link>
    </Button>
  );
};

export default Logo;
