import getCategories from "@/actions/get-categories";
import Link from "next/link";

import Container from "@/components/layouts/container";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";
import MobileNav from "./mobile-nav";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b border-gray-200">
      <Container>
        <div className="relative px-0 sm:px-2 lg:px-4 flex h-16 items-center">
          <Link href={"/"} className="gap-x-2 mr-6">
            <p className="font-bold text-xl">Digitalin</p>
          </Link>

          <MainNav data={categories} />

          <div className="ml-auto flex">
            <NavbarActions />
            <MobileNav data={categories} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
