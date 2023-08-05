import { H1, P1, SubH1 } from "@/components/typography";
import Image from "next/image";
import featureImgPlaceholder from "./feature.svg";

const FeaturesSection = () => {
  return (
    <section id='features' className="py-14 pb-20">
      {/* top - feature 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* left - content  */}
        <div className="lg:w-[55%] space-y-4 md:space-y-8">
          <div className="space-y-2 md:space-y-4">
            <SubH1>Feature</SubH1>
            <H1>
              Blockchain-Enabled <br className="hidden md:inline-block"/> Timestamps for{" "}  <br className="hidden md:inline-block"/>
              <span className="text-[#2B31D6]">Media Files</span>
            </H1>
          </div>
          <P1>
            Stamp each media file you upload with a unique cryptographic
            identifier, ensuring accurate and tamper-proof records of their
            existence using dashstamp&rsquo;`s blockchain technology.
          </P1>
        </div>
        {/* right - img  */}
        <div className="lg:w-[40%]">
          <Image src={featureImgPlaceholder} alt="feature image" />
        </div>
      </div>
      {/* mid - feature 2 */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* left - img  */}
        <div className="lg:w-[40%]">
          <Image src={featureImgPlaceholder} alt="feature image" />
        </div>
        {/* right - content  */}
        <div className="lg:w-[55%] space-y-4 md:space-y-8">
          <div className="space-y-2 md:space-y-4">
            <SubH1>Feature</SubH1>
            <H1>
              Instant Proof of <span className="text-[#2B31D6]">Ownership</span>
            </H1>
          </div>
          <P1>
            Easily generate verifiable proof of ownership for your media files
            with dashstamp, safeguarding your intellectual property and
            asserting your rights effortlessly.
          </P1>
        </div>
      </div>
      {/* bottom - feature 3 */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* left - content  */}
        <div className="lg:w-[55%] space-y-4 md:space-y-8">
          <div className="space-y-2 md:space-y-4">
            <SubH1>Feature</SubH1>
            <H1>
              Secure and <br className="hidden md:block" />{" "}
              <span className="text-[#2B31D6]">Tamper-Proof</span> Verification
            </H1>
          </div>
          <P1>
            Rest assured about the integrity of your media files. dashstamp
            utilizes advanced cryptographic algorithms and secure blockchain
            storage, making it virtually impossible to alter or manipulate
            timestamps. Your files remain authentic and unaltered.
          </P1>
        </div>
        {/* right - img  */}
        <div className="lg:w-[40%]">
          <Image src={featureImgPlaceholder} alt="feature image" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
