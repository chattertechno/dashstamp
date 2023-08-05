import { P1 } from "@/components/typography";
import Image from "next/image";

import { Button } from "@/components/shared";
import { HiCube } from "react-icons/hi2";
import heroImg from "./hero-img.svg";
import mobileHeroImg from "./mobile-hero-img.svg";

const HeroSection = () => {
  return (
    <section className="py-6 md:py-24 md:h-[90vh]">
      <div className="relative flex items-center h-full">
        <div className="flex flex-col md:flex-row app-container">
          {/* left  */}
          <div className="md:w-[56%] space-y-4 md:space-y-8">
            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-[5rem] xl:leading-[5.5rem]  font-bold">
              Proof of Ownership and Existence:{" "}
              <br className="hidden md:block" /> Your Media&rsquo;s
              <br className="hidden md:block" /> Trustworthy{" "}
              <br className="hidden md:block" />
              Companion
            </h1>
            <P1 className="lg:w-[80%]">
              Blockchain-Enabled Trust: Protecting Your Media Files, Every
              Second Matters, Seal it, Prove it, Own it: The Future of Media
              Verification is Here
            </P1>
            <Button className="w-fit md:text-xl">
              <HiCube />
              <span>Get started</span>
            </Button>
          </div>
          {/* right  */}
          <div className="flex-1 ">
            <Image
              className="hidden md:block absolute top-0 right-0 md:w-[40%]"
              src={heroImg}
              alt=""
            />
            <Image
              className="block md:hidden mt-10"
              src={mobileHeroImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
