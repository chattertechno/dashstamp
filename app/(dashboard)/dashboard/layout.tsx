"use client";

import Link from "next/link";
import { ReactNode } from "react";

import { HiMiniCheckCircle, HiSquares2X2, HiWallet } from "react-icons/hi2";

// COMPONENTS
// ASSETS
import { usePathname } from "next/navigation";
import DashboardHeader from "../components/layout/DashboardHeader";

type LayoutProps = {
  children: ReactNode;
};

// ========================================
// LAYOUT COMPONENT ///////////////////////
// ========================================
export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const nav = [
    {
      id: 0,
      href: "/dashboard",
      label: "Dashboard",
      icon: <HiSquares2X2 className="h-6 w-6" />,
      active:
        pathname === "/dashboard" ||
        pathname === "/dashboard/view-job" ||
        pathname === "/dashboard/view-job/mobile",
    },
    {
      id: 0,
      href: "/dashboard/verify",
      label: "Verify",
      icon: <HiMiniCheckCircle className="h-6 w-6" />,
      active:
        pathname === "/dashboard/verify" ||
        pathname === "/dashboard/view-job" ||
        pathname === "/dashboard/view-job/mobile",
    },
    {
      id: 0,
      href: "/dashboard/wallet",
      label: "Your Wallet",
      icon: <HiWallet className="h-6 w-6" />,
      active:
        pathname === "/dashboard/wallet" ||
        pathname === "/dashboard/view-job" ||
        pathname === "/dashboard/view-job/mobile",
    },
  ];

  // RETURN ///////////////////////////
  return (
    <div className="h-screen">
      <DashboardHeader nav={nav} />
      <div className="flex h-[91.2vh]">
        <aside className="hidden md:flex w-[23%] bg-[#F1F5F9] border-r border-gray-300 p-6 flex-col justify-between h-full">
          <nav className="flex flex-col gap-3">
            {nav.map(item => (
              <Link
                href={item.href}
                key={item.href}
                className={` rounded flex items-center p-4 gap-3 hover:bg-gray-200 ${
                  item.active ? "bg-white text-[#0006A2] shadow" : "text-gray-500"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>
        <main className="w-full md:w-[80%] h-full">{children}</main>
      </div>
    </div>
  );
}

////////////////////////////////////////
// EXTENDED COMPONENTS /////////////////
// const LinkItem = ({ item }: {item: { href: string; active: boolean}}) => (<Link
//   href={item.href}
//   key={item.href}
//   className={` rounded flex items-center p-3 gap-3 ${
//     item.active && "bg-gray-200 "
//   }`}
// >
//   {item.icon}
//   <span>{item.label}</span>
// </Link>)
