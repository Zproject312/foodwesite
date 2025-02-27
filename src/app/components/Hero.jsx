'use client';

import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
const Hero = () => {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const slides = [
    { id: 1, url: '/images/slider1.jpg', alt: 'Slide 1' },
    { id: 2, url: '/images/slider2.jpg', alt: 'Slide 2' },
    { id: 3, url: '/images/slider3.jpg', alt: 'Slide 3' },
  ];
  return (
    <div className="relative w-full h-full bg-brand-accent">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {/* Carousel Items */}
          {slides.map((slide) => {
            return (
              <div className='h-full w-full flex-[0_0_100%] mx-auto' key={slide.id}>
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  className=" w-full lg:h-[75vh] h-[50vh] object-cover"
                  width={7607}
                  height={5200}
                  objectFit='contain'
                  loading='eager'
                />
              </div>
            )

          })}


        </div>
      </div>

      {/* Navigation */}
      <button
        className="absolute flex items-center justify-center top-1/2 left-4 transform -translate-y-1/2 text-white bg-brand-primary p-2 rounded-full cursor-pointer"
        onClick={() => autoplay.current.embla.scrollPrev()}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-brand-primary p-2 rounded-full cursor-pointer"
        onClick={() => autoplay.current.embla.scrollNext()}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Hero;
