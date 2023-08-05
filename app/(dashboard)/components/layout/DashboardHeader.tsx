import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { H2, P2 } from "../../../../components/typography";

const DashboardHeader = ({ nav }: { nav: any[] }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="border-b border-b-gray-300 shadow-sm bg-white p-4 md:py-5 md:px-8 flex items-center justify-between relative">
      {/* logo */}
      <Link href="/" className="flex gap-2 md:gap-3 items-center">
        <Image src="assets/logo.svg" alt="logo" width={30} height={30} />
        <H2>Timestamps</H2>
      </Link>
      {/* address   */}
      <div className="hidden md:block">
        <P2 className="text-gray-500">
          0x1234567890123456789012345678901234567890
        </P2>
      </div>
      {/* mobile nav */}
      <>
        <button className="md:hidden" onClick={() => setShowMobileMenu(true)}>
          <HiBars3 className="h-8 w-8 text-gray-500 font-semibold" />
        </button>
        {showMobileMenu && (
          <MobileNav setShowMobileMenu={setShowMobileMenu} nav={nav} />
        )}
      </>
    </header>
  );
};

export default DashboardHeader;

const MobileNav = ({
  setShowMobileMenu,
  nav,
}: {
  setShowMobileMenu: (arg: boolean) => void;
  nav: any[];
}) => {
  return (
    <div className="absolute top-0 left-0 bg-[#0006A2] w-full text-white py-4 px-4 ">
      <div className="flex items-center justify-between border-b border-b-white pb-4">
        {/* logo */}
        <div className="flex gap-2 md:gap-3 items-center">
          <Image
            src="assets/logo-white.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <H2>Timestamps</H2>
        </div>
        {/* close btn  */}
        <button onClick={() => setShowMobileMenu(false)}>
          <HiXMark className="h-8 w-8 text-white font-semibold" />
        </button>
      </div>
      <div className="py-3">
        {/* navigation */}
        <nav className="flex flex-col gap-2 mt-4 border-b border-b-white pb-4">
          {nav.map(item => (
            <div key={item.href} onClick={() => setShowMobileMenu(false)}>
              <NavItem item={item} />
            </div>
          ))}
        </nav>

        {/* address  */}
        <P2 className="mt-4">0x123456...567890</P2>
      </div>
    </div>
  );
};

const NavItem = ({ item }: { item: any }) => {
  return (
    <Link
      href={item.href}
      className={`flex items-center gap-2 p-2.5 ${
        item.active && "bg-white rounded text-[#0006A2]"
      }`}
    >
      <div className={``}>{item.icon}</div>
      <P2>{item.label}</P2>
    </Link>
  );
};
