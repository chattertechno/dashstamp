"use client";

import { Button } from "@/components/shared";
import { SheetClose } from "@/components/ui/sheet";
import { DevTool } from "@hookform/devtools";
import { ChangeEvent, useRef, useState } from "react";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";
import { HiCheckCircle, HiOutlineDocumentPlus } from "react-icons/hi2";
import Card from "./Card";
import Heading from "./Heading";

const CreateTimestamp = () => {
  type Content = "image" | "video" | "document" | "audio";
  const [contentType, setContentType] = useState<Content>();
  const [file, setFile] = useState<File>();


  const onSubmit = (data: any) => {
    console.log("submit");
    console.log("🚀 ~ file: CreateTimestamp.tsx:23 ~ onSubmit ~ data:", {
      ...data,
      upload: file,
      type: contentType,
    });
  };

  const { register, control, handleSubmit } = useForm<any>();

  return (
    <>
      <form className="bg-[#F1F5F9] h-[100vh] py-6 px-8 divide-y-2 divide-gray-200 overflow-y-auto">
        <div className="space-y-2 py-6">
          <Heading text="Select type of file to upload" />
          <ContentType type={contentType} setType={setContentType} />
        </div>
        <div className="space-y-2 py-6">
          <Heading text="Upload file from your device" />
          <FileUploader setFile={setFile} />
        </div>
        <div className="space-y-2 py-6">
          <Heading text="Add details about your file" />
          <DetailsForm register={register} />
        </div>
        {/* <div className="flex gap-2 py-6">
          <Button
            onClick={handleSubmit(onSubmit)}
            className="w-full !p-3 justify-center"
          >
            Finish
          </Button>
          <Button className="w-full !p-3 justify-center" variant="secondary">
            Cancel
          </Button>
        </div> */}

        <div className="flex gap-2 py-6">
          <Button
            onClick={handleSubmit(onSubmit)}
            className="w-full !p-3 justify-center"
          >
            Finish
          </Button>

          <SheetClose asChild>
            <Button className="w-full !p-3 justify-center" variant="secondary">
              Cancel
            </Button>
          </SheetClose>
        </div>
      </form>
      <DevTool control={control} placement="bottom-right" />
    </>
  );
};

export default CreateTimestamp;

const ContentType = ({
  type,
  setType,
}: {
  type: string | undefined;
  setType: any;
}) => {
  const cards = [
    {
      content: {
        label: "Image",
        subLabel: ".jpg .png .jpeg",
      },
      onClick: () => setType("image"),
      icon: <HiOutlineDocumentPlus className="w-8 h-8 text-gray-600" />,
      className: type === "image" ? "border-blue-400" : "border-[#CCE2FF]",
    },
    {
      content: {
        label: "Document",
        subLabel: ".pdf .txt .docx",
      },
      onClick: () => setType("document"),
      icon: <HiOutlineDocumentPlus className="w-8 h-8 text-gray-600" />,
      className: type === "document" ? "border-blue-400" : "border-[#CCE2FF]",
    },
    {
      content: {
        label: "Video",
        subLabel: ".mp4",
      },
      onClick: () => setType("video"),
      icon: <HiOutlineDocumentPlus className="w-8 h-8 text-gray-600" />,
      className: type === "video" ? "border-blue-400" : "border-[#CCE2FF]",
    },
    {
      content: {
        label: "Audio",
        subLabel: ".mp3",
      },
      onClick: () => setType("audio"),
      icon: <HiOutlineDocumentPlus className="w-8 h-8 text-gray-600" />,
      className: type === "audio" ? "border-blue-400" : "border-[#CCE2FF]",
    },
  ];

  return (
    <div className="space-y-2">
      {cards.map(card => (
        <Card
          key={card.content.label}
          content={card.content}
          onClick={card.onClick}
          className={card.className}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

interface FileUploaderProps {
  setFile: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ setFile }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files?.[0];
    if (fileUploaded) {
      setFile(fileUploaded);
    }
  };

  return (
    <>
      <Button className="w-fit" onClick={handleClick}>
        Choose File
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }} // Make the file input element invisible
      />
    </>
  );
};

const DetailsForm = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <div className="text-start space-y-4">
      <div className="space-y-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="w-full border border-[#CCE2FF] focus:outline-blue-400 rounded-md p-2.5 text-lg"
          {...register("name")}
          placeholder="Enter name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          className="w-full border border-[#CCE2FF] focus:outline-blue-400 rounded-md p-2.5 text-lg"
          {...register("author")}
          placeholder="Enter author"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="w-full border border-[#CCE2FF] focus:outline-blue-400 rounded-md p-2.5 text-lg"
          {...register("description")}
          placeholder="Enter description"
        />
      </div>
    </div>
  );
};
