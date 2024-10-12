import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export const Navbar = () => {
   return (
      <nav className="max-w-xl mx-auto flex items-center justify-between px-2.5 py-2">
         <h2 className="text-neutral-700 text-lg font-medium">bored?</h2>
         <Link
            href={"https://x.com/swerafay"}
            target="_blank"
            className={buttonVariants({
               variant: "link"
            })}
         >
            Made by Abdul Rafay
         </Link>
      </nav>
   )
};