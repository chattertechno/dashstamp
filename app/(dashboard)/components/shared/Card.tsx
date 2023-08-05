"use client";

const Card = ({
  icon,
  content,
  className,
  onClick,
}: {
  icon: React.ReactNode;
  content: { label: string; subLabel: string };
  className?: string;
  onClick: () => void;
}) => {
  return (
    <div
      className={`cursor-pointer border rounded-md flex gap-3 md:gap-6 items-center p-4 px-6 bg-white border-[#CCE2FF] ${className}`}
      onClick={onClick}
    >
      {icon}
      <div>
        <div>
          <p>{content.label}</p>
          <p className="text-gray-400">{content.subLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
