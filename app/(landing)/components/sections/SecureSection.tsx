import { H1, P1, P2, SubH1 } from "@/components/typography";
import Image from "next/image";
import secureImg from "./secure.svg";

import icon1 from "./secureSVGs/blockchain.svg";
import icon4 from "./secureSVGs/cloud_done.svg";
import icon3 from "./secureSVGs/code.svg";
import icon2 from "./secureSVGs/enhanced_encryption.svg";

const SecureSection = () => {
  const cards = [
    { icon: icon1, description: "Blockchain Security" },
    { icon: icon2, description: "Advanced Encryption" },
    { icon: icon3, description: "Immutable Timestamps" },
    { icon: icon4, description: "Secure Storage" },
  ];

  return (
    <section id='security' className="app-container flex flex-col md:flex-row items-center gap-6 justify-between pt-10 md:pt-28"> 
      {/* left - img  */}
      <div className="md:w-[40%]">
        <Image src={secureImg} alt="secure image" />
      </div>
      {/* .right - content  */}
      <div className="md:w-[55%] space-y-4 md:space-y-8">
        <div className="space-y-2 md:space-y-4">
          <SubH1 className="!bg-[#BDB84A] !text-[#1A1A1A]">SAFE & SECURE</SubH1>
          <H1>
            Bulletproof Security:{" "}
            <span className="text-[#2B31D6]">Safeguarding Your Files</span> with
            Cutting-Edge Technology
          </H1>
        </div>
        <P1>
          Trust in Every Timestamp: Ensuring Immunity to Tampering and Fraud,
          Your Media, Fortified: The Robust Security of dashstamp
        </P1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
          {cards.map(card => (
            <div key={card.description} className="space-y-1">
              <Image src={card.icon} alt={card.description} />
              <P2>{card.description}</P2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecureSection;
