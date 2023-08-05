"use client";
import { Button } from "@/components/shared";
import { H1, P1 } from "@/components/typography";
import { useRef } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight, HiStar } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

const TestimonialsSection = () => {
  const testimonials = [
    {
      rate: 5,
      company: "Company",
      position: "Position",
      name: "Name Surname",
      description:
        "Dash offers a secure and fast decentralized digital currency. With its innovative features and privacy focus, enabling seamless and secure media time stamping",
    },
    {
      rate: 5,
      company: "Company",
      position: "Position",
      name: "Name Surname",
      description:
        "Dash offers a secure and fast decentralized digital currency. With its innovative features and privacy focus, enabling seamless and secure media time stamping",
    },
    {
      rate: 5,
      company: "Company",
      position: "Position",
      name: "Name Surname",
      description:
        "Dash offers a secure and fast decentralized digital currency. With its innovative features and privacy focus, enabling seamless and secure media time stamping",
    },
    {
      rate: 5,
      company: "Company",
      position: "Position",
      name: "Name Surname",
      description:
        "Dash offers a secure and fast decentralized digital currency. With its innovative features and privacy focus, enabling seamless and secure media time stamping",
    },
    {
      rate: 5,
      company: "Company",
      position: "Position",
      name: "Name Surname",
      description:
        "Dash offers a secure and fast decentralized digital currency. With its innovative features and privacy focus, enabling seamless and secure media time stamping",
    },
  ];

  const swiperDesktopRef = useRef<any>(null);
  const swiperTabletRef = useRef<any>(null);
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="testimonials"
      className="py-14 pb-6 md:py-20 space-y-6 md:space-y-16 app-container"
    >
      {/* top  */}
      <div className="flex justify-between items-baseline gap-4">
        <H1>
          Hear <span className="text-[#2B31D6]">What Our Users</span> Are Saying
        </H1>
        {/* buttons - desktop  */}
        <div className="hidden lg:flex gap-3 items-center">
          <Button
            className="text-lg border-2 border-gray-900 hover:border-blue-500 rounded-full p-1 md:p-2"
            variant="text"
            onClick={() => swiperDesktopRef.current.slidePrev()}
          >
            <HiArrowSmallLeft />
          </Button>
          <Button
            className="text-lg border-2 border-gray-900 hover:border-blue-500 rounded-full p-1 md:p-2"
            variant="text"
            onClick={() => swiperDesktopRef.current.slideNext()}
          >
            <HiArrowSmallRight />
          </Button>
        </div>
        {/* buttons - tablet  */}
        <div className="hidden md:flex lg:hidden gap-3 items-center">
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
      {/* testimonials  */}
      {/* desktop */}
      <div className="hidden lg:block">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          modules={[Autoplay]}
          slidesPerView={3}
          onSwiper={swiper => {
            swiperDesktopRef.current = swiper;
          }}
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.description}>
              <Testimonial
                key={testimonial.description}
                testimonial={testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>{" "}
      {/* tablet */}
      <div className="hidden md:block lg:hidden">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          modules={[Autoplay]}
          slidesPerView={2}
          onSwiper={swiper => {
            swiperTabletRef.current = swiper;
          }}
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.description}>
              <Testimonial
                key={testimonial.description}
                testimonial={testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>{" "}
      {/* mobile */}
      <div className="md:hidden">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          modules={[Autoplay]}
          slidesPerView={1}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.description}>
              {
                <Testimonial
                  key={testimonial.description}
                  testimonial={testimonial}
                />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;

//  Define the type for the testimonial object
interface TestimonialData {
  rate: number;
  company: string;
  position: string;
  name: string;
  description: string;
}

// Define the prop type for the Testimonial component
interface TestimonialProps {
  testimonial: TestimonialData;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  const renderStars = (rate: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<HiStar key={i} className="text-[#2B31D6]" />);
    }
    return stars;
  };

  return (
    <div className="space-y-6 h-[35vh]">
      <div className="flex gap-0">{renderStars(testimonial.rate)}</div>
      <P1 className="font-semibold">{testimonial.description}</P1>
      <div>
        <p>{testimonial.name}</p>
        <p>
          {testimonial.company} - {testimonial.position}{" "}
        </p>
      </div>
    </div>
  );
};
