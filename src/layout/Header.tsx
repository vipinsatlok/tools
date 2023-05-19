import Nav from "@/ui/Nav";
import NavRight from "@/ui/NavRight";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex h-full items-center w-full justify-between">
      <div className="flex items-center">
        <Image src="/favicon.ico" alt="logo" width={30} height={30} />
        <span className="hidden text-xl font-semibold md:flex pl-3">
          Tech Fans
        </span>
      </div>
      <div>
        <Nav />
      </div>
      <NavRight />
    </div>
  );
}
