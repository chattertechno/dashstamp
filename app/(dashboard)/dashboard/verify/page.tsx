"use client";
import { Button } from "@/components/shared";
import { H2, P2, SubH1 } from "@/components/typography";
import { useForm } from "react-hook-form";
import { FaCircle } from "react-icons/fa";
import {
  HiCheckCircle,
  HiMiniArrowDownTray,
  HiOutlineClipboardDocument,
  HiOutlineDocumentPlus,
} from "react-icons/hi2";
import { CreateTimestamp, Drawer } from "../../components/shared";

const VerifyPage = () => {
  const data = [
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
  ];

  const error = true;
  const loading = false;

  return (
    <>
      <main className="flex md:flex-1 h-full">
        <div className="w-full p-6 md:px-16 py-8 overflow-y-auto">
          {/* content  */}
          <div className="border-b border-gray-200 pb-8 md:pb-14">
            {/* top bar - buttons  */}
            <div className="flex md:justify-end">
              <Drawer
                button={
                  <Button variant="secondary">
                    <HiOutlineDocumentPlus className="h-6 w-6" />
                    Create timestamp
                  </Button>
                }
              >
                <CreateTimestamp />
              </Drawer>
            </div>
            {/* bottom */}
            <div className="mt-8 gap-8 flex flex-col md:flex-row justify-between">
              {/* left - content */}
              <div className="md:w-[50%] space-y-4">
                <H2>Verify Authenticity</H2>
                <P2>
                  Verify the details and authenticity of a timestamped document
                  effortlessly.{" "}
                </P2>
                <P2>
                  Just enter the document&rsquo;s hash or signature in the field
                  below, and instantly retrieve its accurate timestamp and
                  ensure its integrity.
                </P2>
              </div>
              {/* right - form */}
              <div className="md:w-[40%]">
                <VerifyForm />
              </div>
            </div>
          </div>
          {/* result */}
          <div className="mt-10">
            {loading ? (
              <>loading...</>
            ) : error ? (
              <>
                <H2>Couldn&rsquo;t locate any data :(</H2>
                <Error />
              </>
            ) : data ? (
              <>
                <H2>Timestamp Found!</H2>
                <Timestamp item={data[0]} />
              </>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
};

export default VerifyPage;

const VerifyForm = () => {
  const { register, handleSubmit } = useForm<any>();

  const onSubmit = (values: any) => {
    console.log("🚀 ~ file: page.tsx:58 ~ onSubmit ~ values:", values);
    alert("Submitted");
  };

  return (
    <form>
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="hash" className="text-lg">
            Signature/Hash
          </label>
          <input
            type="text"
            id="hash"
            className="w-full border border-[#CCE2FF] focus:outline-blue-400 rounded-md p-2.5 text-lg"
            {...register("hash")}
            placeholder="Enter the 32 Character Code"
          />
          <p className="text-gray-400">
            Example: 9663781eb584d2f4d19ab14dbf3314f7
          </p>
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          className="w-full !p-3 justify-center gap-4 text-md"
        >
          <HiCheckCircle className="h-6 w-6" />
          <span>Check and Verify</span>
        </Button>
      </div>
    </form>
  );
};

const Timestamp = ({ item }: { item: any }) => {
  return (
    <div className="py-6 flex flex-col md:flex-row gap-8">
      {/* left  */}
      <div className="flex-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.img} alt={item.title} className="rounded-lg" />
      </div>
      {/* right  */}
      <div className="space-y-7 flex-1">
        {/* top */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* time */}
          <div className="space-y-1">
            <SubH1>Timestamp Date</SubH1>
            <div className="flex gap-2 items-center ">
              <P2>{item.date}</P2>
              <FaCircle className="h-1 w-1" />
              <P2>{item.time}</P2>
            </div>
          </div>
          {/* name  */}
          <div className="space-y-1">
            <SubH1>Name</SubH1>
            <P2>{item.title}</P2>
          </div>
        </div>
        {/* hash */}
        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-14 pb-5 border-b border-b-gray-200">
          <div className="space-y-1">
            <SubH1>Hash / Signature</SubH1>
            <P2>{item.hash}</P2>
          </div>
          <div className="">
            <Button className="text-sm w-fit" onClick={() => {}} variant="icon">
              <HiOutlineClipboardDocument />
              <span>copy</span>
            </Button>
          </div>
        </div>
        {/* type */}
        <div className="">
          <div className="space-y-1">
            <SubH1>Type </SubH1>
            <P2>{item.type}</P2>
          </div>
        </div>
        {/* description */}
        <div className="">
          <div className="space-y-1">
            <SubH1>Description </SubH1>
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
  );
};

const Error = () => {
  return (
    <div className="mt-4">
      <P2>If the issue persists, try the following:</P2>
      <ul className="list-disc pl-6 space-y-1 p-1">
        <li>Check Hash Length: Ensure the hash is 32 characters long.</li>
        <li>
          Refresh the Page: Reload the page to resolve any connectivity issues.
        </li>
        <li>Verify Code Accuracy: Double-check the code for accuracy.</li>
      </ul>
    </div>
  );
};
