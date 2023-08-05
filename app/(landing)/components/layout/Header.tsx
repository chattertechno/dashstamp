"use client";

import Image from "next/image";

// ASSETS ==========================================
import Link from "next/link";

// COMPONENTS ======================================
import { P2 } from "@/components/typography";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Button } from "../../../../components/shared";

// =================================================
// HEADER LAYOUT COMPONENT =========================
// =================================================
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigation = [
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Why Us?",
      href: "#why-us",
    },
    {
      label: "Security",
      href: "#security",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "FAQs",
      href: "#faq",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const connectWallet = () => {};
  // RETURN =========================================
  return (
    <header className="py-6 ">
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex items-center gap-14">
          {/* logo box */}
          <div>
            <Image
              src="logo-full.svg"
              alt="DashStamp logo"
              width={190}
              height={150}
            />
          </div>
          {/* navigation */}

          <nav className="flex gap-4 xl:gap-8 items-center">
            {navigation.map(item => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* button  */}
        <div className="pr-4">
          <Button onClick={connectWallet}>Connect Wallet</Button>
        </div>
      </div>
      {/* mobile nav */}
      <div className="lg:hidden flex items-center justify-between">
        <Image
          src="logo-full.svg"
          alt="DashStamp logo"
          width={190}
          height={150}
        />
        <button onClick={() => setShowMobileMenu(true)}>
          <HiBars3 className="h-8 w-8 text-gray-500 font-semibold" />
        </button>
        {showMobileMenu && (
          <MobileNav setShowMobileMenu={setShowMobileMenu} nav={navigation} />
        )}
      </div>
    </header>
  );
};

export default Header;

const MobileNav = ({
  setShowMobileMenu,
  nav,
}: {
  setShowMobileMenu: (arg: boolean) => void;
  nav: any[];
}) => {
  return (
    <div className="absolute top-0 left-0 z-20 bg-[#0006A2] w-full text-white py-6 px-4 ">
      <div className="flex items-center justify-between border-b border-b-white pb-4">
        {/* logo */}
        <div>
          <Image
            src="logo-full-white.svg"
            alt="logo"
            width={190}
            height={150}
          />
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
        <Button
          className="bg-white mt-4 !text-[#0006A2] w-fit"
          onClick={() => {}}
        >
          Connect Wallet
        </Button>
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
      <P2>{item.label}</P2>
    </Link>
  );
};
