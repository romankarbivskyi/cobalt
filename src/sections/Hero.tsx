import Button from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const learnMoreRef = useRef(null);
  const imageRef = useRef(null);
  const starsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    console.log("Title element:", titleRef.current);

    const titleSplit = new SplitText(titleRef.current, {
      type: "words",
      wordsClass: "split-word",
    });

    gsap.set(titleSplit.words, {
      y: 100,
      opacity: 0,
    });

    tl.to(
      titleSplit.words,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        onStart: () => console.log("Animation started"),
        onComplete: () => console.log("Animation completed"),
      },
      0,
    );

    tl.from(
      subtitleRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3",
    );

    tl.from(
      buttonRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2",
    );

    tl.from(
      learnMoreRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    );

    tl.from(
      starsRef.current,
      {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=0.8",
    );

    gsap.from(imageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 pt-15 sm:px-6 sm:pt-20 md:px-8 md:pt-25">
      <div className="relative z-10 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-10">
          <div className="z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
            <h1
              className="flex-1 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              ref={titleRef}
            >
              Unleash the power of intuitive finance
            </h1>
            <p
              className="text-regular flex-1 text-sm sm:text-xl"
              ref={subtitleRef}
            >
              Say goodbye to the outdated financial tools. Every small business
              owner, regardless of the background, can now manage their business
              like a pro. Simple. Intuitive. And never boring.
            </p>
          </div>

          <div className="z-10 space-y-8">
            <div ref={buttonRef}>
              <Button>Join the waitlist</Button>
            </div>
            <a
              href="#"
              className="text-regular flex flex-col items-center justify-center gap-[5px] text-sm"
              ref={learnMoreRef}
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <img
          src="/images/stars.png"
          alt="Stars"
          className="absolute top-1/4 z-0 object-contain"
          ref={starsRef}
        />
      </div>

      <div
        className="animated-wrapper my-10 !w-full overflow-hidden !rounded-xl !p-[0.5px] md:my-24 md:!rounded-2xl"
        ref={imageRef}
      >
        <img
          src="/images/hero-interface.png"
          alt="Program interface"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
