"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Img = { src: string; alt: string; caption?: string };

export default function NewsBodyGallery({ images }: { images: Img[] }) {
  return (
    <figure className="my-10">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          className="investment-swiper h-full w-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={`${img.src}-${i}`}>
              <div className="relative h-full w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-cover"
                />
                {img.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 py-3 text-sm tracking-[0.48px] text-white">
                    {img.caption}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </figure>
  );
}
