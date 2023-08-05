import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AppAccordion = ({ qn, ans }: { qn: string; ans: string }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-start font-semibold">
          {qn}
        </AccordionTrigger>
        <AccordionContent>{ans}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AppAccordion;
