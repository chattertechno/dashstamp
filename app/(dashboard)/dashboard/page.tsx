"use client";
import { P2, SubH2 } from "@/components/typography";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import {
  HiMiniArrowDownTray,
  HiOutlineChevronDown,
  HiOutlineClipboardDocument,
  HiOutlineDocumentPlus,
} from "react-icons/hi2";
import { Button } from "../../../components/shared";
import { CreateTimestamp, Drawer } from "../components/shared";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// ====================================
// Dashboard PAGE COMPONENTS ////////
// ====================================
export default function Dashboard() {
  const timestamps = [
    {
      title: "ifa_flyer_0125.jpg",
      img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/43707f90e0b3bb5d1ac3c0f14cc3c05a?_a=AQADKdt",
      type: "image",
      date: "2021-09-01",
      time: "12:00 PM",
      hash: "9663781eb584d2f4d19ab14dbf3314f7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . Id volutpat lacusLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . Id volutpat lacusLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . Id volutpat lacusLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . Id volutpat lacusLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . Id volutpat lacusLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . Id volutpat lacus",
    },
    {
      title: "ifa_flyer_0225.jpg",
      img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/43707f90e0b3bb5d1ac3c0f14cc3c05a?_a=AQADKdt",
      type: "image",
      date: "2021-09-01",
      time: "12:00 PM",
      hash: "9663781eb584d2f4d19ab14dbf3314f7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . Id volutpat lacus",
    },
    {
      title: "ifa_flyer_3125.jpg",
      img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/43707f90e0b3bb5d1ac3c0f14cc3c05a?_a=AQADKdt",
      type: "image",
      date: "2021-09-01",
      time: "12:00 PM",
      hash: "9663781eb584d2f4d19ab14dbf3314f7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . Id volutpat lacus",
    },
    {
      title: "ifa_flyer_4125.jpg",
      img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/43707f90e0b3bb5d1ac3c0f14cc3c05a?_a=AQADKdt",
      type: "image",
      date: "2021-09-01",
      time: "12:00 PM",
      hash: "9663781eb584d2f4d19ab14dbf3314f7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . Id volutpat lacus",
    },
    {
      title: "ifa_flyer_03225.jpg",
      img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/43707f90e0b3bb5d1ac3c0f14cc3c05a?_a=AQADKdt",
      type: "image",
      date: "2021-09-01",
      time: "12:00 PM",
    },
    {
      title: "ifa_flyer_0625.jpg",
      img: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/43707f90e0b3bb5d1ac3c0f14cc3c05a?_a=AQADKdt",
      type: "image",
      date: "2021-09-01",
      time: "12:00 PM",
      hash: "9663781eb584d2f4d19ab14dbf3314f7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod . Id volutpat lacus",
    },
  ];

  // RETURN ///////////////////////////
  return (
    <>
      <main className="flex md:flex-1 h-full">
        <div className="w-full p-6 md:px-16 py-8 overflow-y-auto">
          {/* top bar - buttons  */}
          <div className="flex justify-between items-center">
            <Sort />

            <Drawer
              button={
                <Button>
                  <HiOutlineDocumentPlus className="h-6 w-6" />
                  Create timestamp
                </Button>
              }
            >
              <CreateTimestamp />
            </Drawer>
          </div>
          {/* bottom - timestamps */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {timestamps.map(item => (
              <Drawer key={item.title} button={<TimestampItem item={item} />}>
                <Preview item={item} />
              </Drawer>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

////////////////////////////////////////
// EXTENDED COMPONENTS /////////////////
const Preview = ({ item }: { item: any }) => {
  return (
    <div className="text-start">
      {/* content  */}
      <div className="px-8 py-6">
        <div className="space-y-7">
          <div className="">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.img} alt={item.title} className="rounded-lg" />
          </div>
          {/* top */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* time */}
            <div className="space-y-1">
              <SubH2>Timestamp Date</SubH2>
              <div className="flex gap-2 items-center ">
                <P2>{item.date}</P2>
                <FaCircle className="h-1 w-1" />
                <P2>{item.time}</P2>
              </div>
            </div>
            {/* name  */}
            <div className="space-y-1">
              <SubH2>Name</SubH2>
              <P2>{item.title}</P2>
            </div>
          </div>
          {/* hash */}
          <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-14 pb-5 border-b border-b-gray-200">
            <div className="space-y-1">
              <SubH2>Hash / Signature</SubH2>
              <P2>{item.hash}</P2>
            </div>
            <div className="">
              <Button
                className="text-sm w-fit"
                onClick={() => {}}
                variant="icon"
              >
                <HiOutlineClipboardDocument />
                <span>copy</span>
              </Button>
            </div>
          </div>
          {/* type */}
          <div className="">
            <div className="space-y-1">
              <SubH2>Type </SubH2>
              <P2>{item.type}</P2>
            </div>
          </div>
          {/* description */}
          <div className="">
            <div className="space-y-1">
              <SubH2>Description </SubH2>
              <P2>{item.description}</P2>
            </div>
          </div>
          {/* button */}
          <div className="">
            <Button
              className="w-full flex justify-center py-3 text-lg"
              onClick={() => {}}
              variant="primary"
            >
              <HiMiniArrowDownTray />
              <span>Download certificate</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimestampItem = ({ item }: { item: any }) => {
  return (
    <div className="text-start rounded-md overflow-hidden border border-gray-200 shadow-sm cursor-pointer">
      {/* img */}
      <div className="">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.img} alt={item.title} />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <div className="flex gap-2 items-center text-gray-500">
          <p className="text-sm ">{item.date}</p>
          <FaCircle className="h-1 w-1" />
          <p className="text-sm">{item.time}</p>
        </div>
        <Button onClick={() => {}} variant="text">
          View
        </Button>
      </div>
    </div>
  );
};

const Sort = () => {
  const sortBy = ["name", "type", "date modified"];
  const [selectedSort, setSelectedSort] = useState("");

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="icon">
          Sort view
          <HiOutlineChevronDown className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-1" align="start">
        {sortBy.map(item => (
          <div
            className={`capitalize p-3 hover:bg-gray-100 rounded-md ${
              selectedSort === item && "bg-gray-100"
            }`}
            key={item}
            onClick={() => setSelectedSort(item)}
          >
            {item}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
