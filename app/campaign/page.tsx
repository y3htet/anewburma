"use client";
import Carousel from "@/components/wrappers/carousel/carousel";
import Thumball from "@/components/wrappers/thumball/thumball";
import { useState } from "react";
import { campaign } from "@/constants/index";
import FullThumball from "@/components/wrappers/full-thumbnail/full-thumbnail";

export default function Campaign() {
  const [background, setBackground] = useState(campaign[1].image); // Corrected syntax

  return (
    <>
      <section className="w-screen h-screen overflow-hidden relative bg-gray-800 text-white">
        {/* Thumball */}
        <FullThumball
          hero={campaign}
          setBackground={setBackground}
        />
      </section>
    </>
  );
}
