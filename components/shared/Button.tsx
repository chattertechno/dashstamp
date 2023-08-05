import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "text" | "icon";
  type?: "button" | "submit" | "reset";
}) => {
  let styles = "";

  switch (variant) {
    case "primary":
      styles =
        "px-4 py-2 bg-[#0006A2] hover:bg-blue-800 rounded-full text-white";
      break;
    case "secondary":
      styles =
        "px-4 py-2 bg-white rounded-full text-[#0006A2] border border-blue-400";
      break;
    case "text":
      styles = "hover:text-[#0006A2]";
      break;
    case "icon":
      styles = "rounded-full bg-[#F1F5F9] p-2 hover:bg-gray-200";
      break;
    default:
      break;
  }

  return (
    <span
      className={`cursor-pointer flex gap-2 items-center ${styles} ${className}`}
      onClick={onClick}
      // type={type}
    >
      {children}
    </span>
  );
};

export default Button;
