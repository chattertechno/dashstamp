import Image from "next/image";

const PartnersSection = () => {
  const logos = [
    { src: "/partners/dash.svg", name: "1" },
    { src: "/partners/sodality.svg", name: "2" },
    { src: "/partners/dash.svg", name: "3" },
    { src: "/partners/sodality.svg", name: "4" },
    { src: "/partners/dash.svg", name: "5" },
    { src: "/partners/sodality.svg", name: "6" },
  ];

  return (
    <section className="py-10 md:py-24 flex justify-between items-center overflow-x-hidden gap-3">
      {logos.map(logo => (
        <Image
          src={logo.src}
          key={logo.name}
          alt={logo.name}
          width={160}
          height={20}
        />
      ))}
    </section>
  );
};

export default PartnersSection;
