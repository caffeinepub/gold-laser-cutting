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
    {
      src: '/assets/generated/gallery-sample-06.dim_1200x900.png',
      alt: 'Gold jewellery laser cutting sample 6',
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
        </div>
      </div>
    </section>
  );
}
