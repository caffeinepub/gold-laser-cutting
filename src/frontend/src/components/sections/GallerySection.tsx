import { useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const galleryImages = [
    {
      src: '/assets/generated/gallery-sample-01.dim_1200x900.png',
      alt: 'Gold jewellery laser cutting sample 1',
    },
    {
      src: '/assets/generated/gallery-sample-02.dim_1200x900.png',
      alt: 'Gold jewellery laser cutting sample 2',
    },
    {
      src: '/assets/generated/gallery-sample-03.dim_1200x900.png',
      alt: 'Gold jewellery laser cutting sample 3',
    },
    {
      src: '/assets/generated/gallery-sample-04.dim_1200x900.png',
      alt: 'Gold jewellery laser cutting sample 4',
    },
    {
      src: '/assets/generated/gallery-sample-05.dim_1200x900.png',
      alt: 'Gold jewellery laser cutting sample 5',
    },
  ];

  const uploadedImages = [
    {
      src: '/assets/Casting-Jewellery-Ring.jpg',
      alt: 'Intricate gold casting jewellery ring with detailed laser cut patterns',
    },
    {
      src: '/assets/Casting_type_gold_pendant_necklace_with_white_stones_by_Mannil_Jewellers__20HzeFw.webp',
      alt: 'Elegant gold pendant necklace with white stones and precision laser cutting',
    },
    {
      src: '/assets/casting-ladies-gold-rings.jpg',
      alt: 'Beautiful ladies gold ring with laser cut heart design and gemstones',
    },
  ];

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gold-text">Gallery</span>
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of precision laser cutting work
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* First 5 gallery images */}
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-[4/3] overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              {/* Loading Skeleton */}
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-muted animate-pulse"></div>
              )}

              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                  loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}

          {/* 6th card with uploaded images collage */}
          <div
            className={`group relative aspect-[4/3] overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${100 + 5 * 100}ms` }}
          >
            {/* Grid layout for 3 images */}
            <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
              {/* First image - top left */}
              <div className="relative overflow-hidden">
                {!loadedImages.has(100) && (
                  <div className="absolute inset-0 bg-muted animate-pulse"></div>
                )}
                <img
                  src={uploadedImages[0].src}
                  alt={uploadedImages[0].alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(100)}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                    loadedImages.has(100) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Second image - top right */}
              <div className="relative overflow-hidden">
                {!loadedImages.has(101) && (
                  <div className="absolute inset-0 bg-muted animate-pulse"></div>
                )}
                <img
                  src={uploadedImages[1].src}
                  alt={uploadedImages[1].alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(101)}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                    loadedImages.has(101) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Third image - bottom spanning both columns */}
              <div className="relative overflow-hidden col-span-2">
                {!loadedImages.has(102) && (
                  <div className="absolute inset-0 bg-muted animate-pulse"></div>
                )}
                <img
                  src={uploadedImages[2].src}
                  alt={uploadedImages[2].alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(102)}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                    loadedImages.has(102) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
