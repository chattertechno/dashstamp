"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { H1, H2, P2 } from "@/components/typography";
import "swiper/css";

import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

import { Button } from "@/components/shared";
import { useRef } from "react";
import card1 from "./whySVGs/card1.svg";
import card2 from "./whySVGs/card2.svg";
import card3 from "./whySVGs/card3.svg";

const WhyDashStampSection = () => {
  const reasons = [
    {
      img: card1,
      title: "Powered by Dash",
      description:
        "Dash offers a secure and fast decentralized digital currency. With its innovative features and privacy focus, enabling seamless and secure media time stamping while providing efficient global transactions. Learn More",
    },
    {
      img: card2,
      title: "A Good Header Goes Here",
      description:
        "Dash offers a secure and fast decentralized digital currency. With its innovative features and privacy focus, enabling seamless and secure media time stamping while providing.",
    },
    {
      img: card3,
      title: "A Good Header Goes Here",
      description:
        "Dash offers a secure and fast decentralized digital currency. With its innovative features and privacy focus, enabling seamless and secure media time stamping",
    },
  ];

  const swiperTabletRef = useRef<any>(null);
  const swiperRef = useRef<any>(null);

  return (
    <section id="why-us" className="app-container space-y-10">
      {/* top  */}
      <div className="flex justify-between items-baseline">
        <H1>
          <span className="text-[#2B31D6]">Why</span> Dashstamp?
        </H1>
        {/* buttons - desktop  */}
        <div className="hidden md:flex gap-3 items-center">
          <Button
            className="text-lg border-2 border-gray-900 hover:border-blue-500 rounded-full p-1 md:p-2"
            variant="text"
            onClick={() => swiperTabletRef.current.slidePrev()}
          >
            <HiArrowSmallLeft />
          </Button>
          <Button
            className="text-lg border-2 border-gray-900 hover:border-blue-500 rounded-full p-1 md:p-2"
            variant="text"
            onClick={() => swiperTabletRef.current.slideNext()}
          >
            <HiArrowSmallRight />
          </Button>
        </div>
        {/* buttons - mobile  */}
        <div className="flex md:hidden gap-3 items-center">
          <Button
            className="text-lg border-2 border-gray-900 hover:border-blue-500 rounded-full p-1 md:p-2"
            variant="text"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <HiArrowSmallLeft />
          </Button>
          <Button
            className="text-lg border-2 border-gray-900 hover:border-blue-500 rounded-full p-1 md:p-2"
            variant="text"
            onClick={() => swiperRef.current.slideNext()}
          >
            <HiArrowSmallRight />
          </Button>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden xl:block">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={swiper => {
            // swiperRef.current = swiper;
          }}
        >
          {reasons.map(reason => (
            <SwiperSlide key={reason.title}>
              <Card item={reason} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>{" "}
      {/* tablet */}
      <div className="hidden md:block xl:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          onSwiper={swiper => {
            swiperTabletRef.current = swiper;
          }}
        >
          {reasons.map(reason => (
            <SwiperSlide key={reason.title}>
              <Card item={reason} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>{" "}
      {/* mobile */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
        >
          {reasons.map(reason => (
            <SwiperSlide key={reason.title}>
              {({ isActive }) => <Card item={reason} active={isActive} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyDashStampSection;

const Card = ({
  item,
  active,
}: {
  item: { img: string; title: string; description: string };
  active?: boolean;
}) => {
  return (
    <div
      className={`p-10 rounded-xl h-[65vh] md:h-[60vh] flex flex-col ${
        active ? "bg-[#111921]" : "bg-[#BDB84A]"
      } space-y-3 hover:bg-[#111921] transition`}
    >
      <div className="flex-1 flex items-center justify-center">
        <Image src={item.img} alt={item.title} />
      </div>
      <div className="h-fit mt-auto space-y-3 text-white">
        <H2>{item.title}</H2>
        <P2>{item.description}</P2>
      </div>
    </div>
  );
};
