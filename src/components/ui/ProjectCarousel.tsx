"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import FlexCarousel from "@/components/ui/FlexCarousel";

interface ProjectCarouselProps {
  images: readonly string[];
  title: string;
}

export default function ProjectCarousel({
  images,
  title,
}: ProjectCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);

  // Muat carousel hanya saat kartu mendekati layar
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const items = useMemo(
    () =>
      images.map((src, index) => ({
        src,
        alt: `${title} screenshot ${index + 1}`,
        title: `Screenshot ${index + 1}`,
      })),
    [images, title],
  );

  return (
    <div ref={containerRef} className="relative h-[320px] w-full sm:h-[420px]">
      {active ? (
        <FlexCarousel
          items={items}
          preset="liquid"
          intro="rise"
          cardHeight={0.5}
          gap={12}
          squeeze={0.2}
          focusOnClick
          captions={false}
          fit="natural"
          radius={0}
          lensWidth={0.74}
          lensHeight={1.18}
          tilt={62}
          roundness={1}
          bend={0.34}
          reach={0.38}
          curl="twist"
          dispersion={0.45}
          liquid={0}
          followCursor={false}
          autoplay={false}
          interval={4}
          captureWheel={false}
        />
      ) : null}
    </div>
  );
}
