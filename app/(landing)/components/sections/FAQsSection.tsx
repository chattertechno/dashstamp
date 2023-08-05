import { AppAccordion } from "@/components/shared";
import { H1, P1 } from "@/components/typography";

const FAQsSection = () => {
  const faqs = [
    {
      qn: "What is online Notarization?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      qn: "Where are Online Notarizations valid and enforceable?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      qn: "Is Online Notarization legal?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      qn: "How does online Notarization ensure the Security and Privacy of personal information on Notarized Documents?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      qn: "What is online Notarization?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
    <section id='faq' className="app-container pb-14 md:pt-8 md:pb-20 flex flex-col md:flex-row gap-6">
      {/* .left - heading  */}
      <div className="flex-1 space-y-4 md:space-y-8">
        <H1>
          <span className="text-[#2B31D6]">FAQ</span>s
        </H1>
        <div className="md:w-[65%]">
          <P1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </P1>
        </div>
      </div>
      {/* right - faqs  */}
      <div className="flex-1">
        {faqs.map(faq => (
          <AppAccordion key={faq.qn} qn={faq.qn} ans={faq.ans} />
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;
