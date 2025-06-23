import FeatureCard from "@/components/FeatureCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const features = [
  {
    title: "Smart forecasting",
    subtitle:
      "Harness the power of Cobalt's predictive analytics to map out the financial future of your business.",
    img: "/images/features/ai-feature1.png",
  },
  {
    title: "Chat with Genius",
    subtitle:
      "Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless.",
    img: "/images/features/ai-feature2.png",
  },
];

const AiFeatures = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      const cards = gsap.utils.toArray(".feature-card");
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 80, opacity: 0 });

        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
      ref={containerRef}
    >
      <div className="space-y-16">
        <div
          className="mx-auto flex w-full flex-col items-center gap-5 text-center md:mx-0 md:max-w-2/3 md:items-start md:text-start lg:max-w-1/2"
          ref={contentRef}
        >
          <h2 className="title flex-1 text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Meet Genius
          </h2>
          <p className="text-regular flex-1 text-xs sm:text-lg">
            Our AI-driven assistant is designed to decode complex financial
            figures and{" "}
            <span className="text-white">illuminate key trends</span> in your
            business.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} className="feature-card" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiFeatures;
