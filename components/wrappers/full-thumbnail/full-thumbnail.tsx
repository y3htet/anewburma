import { CarouselTypes } from "@/types";
import React, { useEffect, useRef } from "react";
import ThumballItem from "../thumball/thumball-item";
import CampaignEventItem from "../campaign-event/campaign-event-item";
import { campaign_latest } from "@/constants";

// Custom CSS to hide scrollbar

const hideScrollbarCSS = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const FullThumball = ({
  hero,
  setBackground,
}: {
  hero: CarouselTypes[];
  setBackground: (value: string) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (container) {
        scrollAmount += 1;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scroll, 30); // Adjust speed here for smooth scrolling

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{hideScrollbarCSS}</style>
      <CampaignEventItem key={1} item={campaign_latest} background={hero[2].image} />
      <div
        ref={containerRef}
        className="absolute w-[80%] bottom-[50px] left-[10%] z-20 flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {hero &&
          hero.map((item, idx) => (
            <ThumballItem key={idx} item={item} setBackground={setBackground} />
          ))}
      </div>
    </>
  );
};

export default FullThumball;
