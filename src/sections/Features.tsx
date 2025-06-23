import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    title: "Insights at your fingertips",
    subtitle:
      "All your data and finances in one place to provide quick answers and make decisions instantly.",
    img: "/images/features/feature1.png",
  },
  {
    title: "Manage in real time",
    subtitle:
      "Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it's 2023.",
    img: "/images/features/feature2.png",
  },
  {
    title: "Important business alerts",
    subtitle:
      "Important business alerts. Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.",
    img: "/images/features/feature3.png",
  },
  {
    title: "Connect all your apps",
    subtitle:
      "Bring your data with our built-in integrations for accounting, revenue tools and banking.",
    img: "/images/features/feature4.png",
  },
  {
    title: "You're in control",
    subtitle:
      "Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode.",
    img: "/images/features/feature5.png",
  },
];

const Features = () => {
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
            Everything you need. Nothing you don't
          </h2>
          <p className="text-regular flex-1 text-xs sm:text-lg">
            Financial management and visibility in one place. Experience a{" "}
            <span className="text-white">flexible toolkit</span> that makes
            every task feel like a breeze.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} {...feature} className="feature-card" />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[3fr_2fr]">
            {features.slice(3, 5).map((feature, index) => (
              <FeatureCard key={index} {...feature} className="feature-card" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
