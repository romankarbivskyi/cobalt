import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <section className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-10 md:px-8 md:py-24">
      <div
        className="mx-auto flex w-full max-w-none flex-col items-center justify-between gap-5 text-center md:gap-10 lg:mx-0 lg:flex-row lg:items-start lg:gap-16 lg:text-start"
        ref={containerRef}
      >
        <h2 className="title flex-1 text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Who said finance has to be boring?
        </h2>
        <p className="text-regular flex-1 text-sm sm:text-xl">
          With Cobalt, managing your business finances is effortless,
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making,
          and puts the power of advanced financial management right at your
          fingertips.{" "}
          <span className="text-white">
            Say no to spreadsheets and tools designed in the 80s.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
