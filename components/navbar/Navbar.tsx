import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import { DarkMode } from "./DarkMode";
import Logo from "./Logo";
import { fetchProfileImage } from "@/utils/profile";
import { auth } from "@clerk/nextjs/server";

async function Navbar() {
  const profileImage = await fetchProfileImage();
  const { userId } = await auth();

  const isAdminUser = userId === process.env.ADMIN_USER_ID;
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center ">
          <DarkMode />
          <LinksDropdown
            profileImage={profileImage}
            isAdminUser={isAdminUser}
          />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
