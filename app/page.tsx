import FeatureSection from "./ui/featured/FeatureSection";
import Header from "@/app/ui/header/header";

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <FeatureSection />
      </main>
    </>
  );
}
