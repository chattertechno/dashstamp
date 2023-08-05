import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";

const Drawer = ({
  button,
  title,
  children,
}: {
  button: string | ReactNode;
  title?: string;
  children: ReactNode;
}) => {
  return (
    <Sheet>
      <SheetTrigger>{button}</SheetTrigger>
      <SheetContent className="md:max-w-[35%] w-[100%] md:w-[35%] overflow-y-auto p-0">
        <SheetHeader>
          {title && <SheetTitle>{title}</SheetTitle>}

          {children}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
