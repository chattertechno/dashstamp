"use client";

import { H2, P2 } from "@/components/typography";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { Card, Heading } from "../../components/shared";

const WalletPage = () => {
  const cards = [
    {
      content: {
        label: "Wallet name",
        subLabel: "network",
      },
      onClick: () => {},
      icon: <HiOutlineDocumentPlus className="w-8 h-8 text-gray-600" />,
    },
    {
      content: {
        label: "Wallet name",
        subLabel: "network",
      },
      onClick: () => {},
      icon: <HiOutlineDocumentPlus className="w-8 h-8 text-gray-600" />,
    },
    {
      content: {
        label: "Wallet name",
        subLabel: "network",
      },
      onClick: () => {},
      icon: <HiOutlineDocumentPlus className="w-8 h-8 text-gray-600" />,
    },
    {
      content: {
        label: "Wallet name",
        subLabel: "network",
      },
      onClick: () => {},
      icon: <HiOutlineDocumentPlus className="w-8 h-8 text-gray-600" />,
    },
  ];

  return (
    <>
      <main className="flex md:flex-1 h-full">
        <div className="w-full p-6 md:px-16 py-8 overflow-y-auto">
          {/* top  */}
          <div className="space-y-2">
            <H2>Connect Wallet</H2>
            <P2 className="w-[70%]">
              Choose and enable your preferred wallet integration within your
              account. By connecting your wallet, you unlock a range of 
              powerful features and services.
            </P2>
          </div>
          {/* bottom  */}
          <div className="mt-6 md:mt-8 space-y-2 md:space-y-4">
            <Heading text="Choose Wallet" />
            {/* cards  */}
            <div className="w-full md:w-2/5 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {cards.map(card => (
                <Card
                  key={card.content.label}
                  content={card.content}
                  onClick={card.onClick}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WalletPage;
