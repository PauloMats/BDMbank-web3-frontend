import HeroSection from "../components/hero";
import InfosBdmBank from "@/components/InfosBdmBank/InfosBdmBank";
import ResumeBdmBankSection from "@/components/ResumeBdmBankSection/ResumeBdmBankSection";
import BdmPOS from "@/components/BdmPOS/BdmPOS";
import Cambio from "@/components/Cambio/Cambio";
import CreditoPJ from "@/components/CreditoPJ/CreditoPJ";
import CartaoVisa from "@/components/CartaoVisa/CartaoVisa";
import DownloadApp from "@/components/DownloadApp/DownloadApp";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InfosBdmBank />
      <ResumeBdmBankSection />
      <BdmPOS />
      <Cambio />
      <CreditoPJ />
      <CartaoVisa />
      <DownloadApp />
    </>
  );
}
