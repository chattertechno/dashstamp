import { H2 } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    { label: "About Us", href: "#" },
    { label: "The Team", href: "#" },
    { label: "Dashstamp Blog", href: "#" },
    { label: "Documentation", href: "#" },
  ];
  const socials = [
    { label: "Facebook", href: "#", icon: <FaFacebookF /> },
    { label: "Instagram", href: "#", icon: <FaInstagram /> },
    { label: "Twitter", href: "#", icon: <FaTwitter /> },
    { label: "LinkedIn", href: "#", icon: <FaLinkedin /> },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="py-16 bg-[#2125A3] text-white ">
      <div className="app-container space-y-10 md:space-y-28">
        {/* top */}
        <div className="flex flex-col gap-6 md:flex-row">
          {/* left - logo */}
          <div className="flex-1">
            <Image
              src="logo-full-white.svg"
              alt="logo"
              width={190}
              height={150}
            />
          </div>
          {/* right - links */}
          <div className="flex-1 flex flex-col gap-6 md:flex-row">
            {/* links */}
            <div className="flex-1 space-y-6">
              <H2 className="!text-2xl">Explore</H2>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* socials */}
            <div className="flex-1 space-y-6">
              <H2 className="!text-2xl">Follow Us</H2>
              <ul className="space-y-4">
                {socials.map(social => (
                  <li key={social.label} className="flex gap-3 items-center">
                    <span>{social.icon}</span>
                    <Link href={social.href}>{social.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* bottom  */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
          <p>{year} Dashstamp. All right reserved.</p>
          <div className="flex gap-4 md:gap-10">
            <p className="underline">Policy</p>
            <p className="underline">Terms of service</p>
            <p className="underline">Cookies Settings</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
