import HeaderOne from "@/components/wrappers/header/header-one";
import HeroOne from "@/components/wrappers/hero/hero-one";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeaderOne />
    <HeroOne />
  
    
    </>
  );
}

export const metadata: Metadata = {
  title: "A New Burma",
  description: "A New Burma is a term that encapsulates the transformative journey of Myanmar, formerly known as Burma, as it navigates the complexities of modern statehood and development. Emerging from decades of military dictatorship, Myanmar has embarked on a challenging path toward democracy, economic revitalization, and social cohesion.",
  icons: {
    icon: "/logo/anb.png"
  },
  openGraph: mergeOpenGraph({
    title: "A New Burma",
    url: '/',
  })
};
