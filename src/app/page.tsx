import HeroSection from "../components/hero";
import InfosBdmBank from "@/components/InfosBdmBank/InfosBdmBank";
import Desktop3 from "@/components/Desktop3/desktop3";
import Desktop4 from "@/components/Desktop4/desktop4";
import Desktop5 from "@/components/Desktop5/desktop5";
import Desktop6 from "@/components/Desktop6/desktop6";
import Desktop7 from "@/components/Desktop7/desktop7";
import DownloadApp from "@/components/DownloadApp/DownloadApp";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InfosBdmBank />
      <Desktop3 />
      <Desktop4 />
      <Desktop5 />
      <Desktop6 />
      <Desktop7 />
      <DownloadApp />
    </>
  );
}
