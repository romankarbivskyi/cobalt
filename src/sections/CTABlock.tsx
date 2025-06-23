import Button from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const CTABlock = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const dividerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(dividerRef.current, {
        scaleX: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          titleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .from(
          buttonRef.current,
          {
            y: 30,
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.1",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-4 py-5 sm:px-6 sm:py-10 md:px-8 md:py-24"
      ref={containerRef}
    >
      <div
        className="from-dark via-accent to-dark absolute top-0 h-px w-3xs bg-linear-to-r"
        ref={dividerRef}
      ></div>
      <div className="flex max-w-3xl flex-col items-center gap-6 text-center lg:max-w-3/5">
        <h3
          className="title flex-1 text-xl leading-tight font-bold sm:text-2xl md:text-3xl lg:text-4xl"
          ref={titleRef}
        >
          See where financial automation can take your business.
        </h3>
        <p className="text-regular flex-1 text-xs sm:text-lg" ref={subtitleRef}>
          The first financial tool you'll love. And the last one you'll ever
          need.
        </p>
      </div>
      <div ref={buttonRef}>
        <Button>Join the waitlist</Button>
      </div>
    </section>
  );
};

export default CTABlock;
