import { useEffect, useRef } from "react";
import "../custom.css"; // keep custom styles if you want extra

export default function HeroSection() {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && contentRef.current) {
          contentRef.current.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        <img
          src="/Homepage/slidegroombride.jpg"
          alt="First Slide"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeSlide1"
        />
        <img
          src="/Homepage/slide3.jpg"
          alt="Second Slide"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeSlide2"
        />
        <img
          src="/Homepage/slidepree1.jpg"
          alt="Third Slide"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeSlide3"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>

      {/* Text Content */}
      <div
        ref={contentRef}
        className="absolute bottom-12 right-8 text-right text-white z-10 opacity-0 translate-y-12 transition-all duration-700 ease-out"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          CAPTURING
          <br />
          TIMELESS MOMENTS
        </h1>

        <p className="italic mt-3 text-lg max-w-md ml-auto">
          "Photography is the story I fail to put into words." – Destin Sparks
        </p>
        <div className="w-16 h-[2px] bg-white mt-4 ml-auto"></div>
      </div>
    </section>
  );
}
