import { Button, SectionHead, Subtitle, Title } from "@/components/ui";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 pt-5 sm:px-6 sm:pt-10 md:px-8 md:pt-24">
      <div className="relative z-10 flex flex-col items-center justify-center gap-10">
        <SectionHead center className="z-10">
          <Title>Unleash the power of intuitive finance</Title>
          <Subtitle>
            Say goodbye to the outdated financial tools. Every small business
            owner, regardless of the background, can now manage their business
            like a pro. Simple. Intuitive. And never boring.
          </Subtitle>
        </SectionHead>
        <div className="z-10 space-y-8">
          <Button>Join the waitlist</Button>
          <a
            href="#"
            className="text-regular flex flex-col items-center justify-center gap-[5px] text-sm"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </div>
        <img
          src="/images/stars.png"
          alt="Stars"
          className="absolute top-1/4 z-0 object-contain"
        />
      </div>
      <div className="animated-wrapper my-10 !w-full overflow-hidden !rounded-xl !p-[0.5px] md:my-24 md:!rounded-2xl">
        <img
          src="/images/hero-interface.png"
          alt="Program intergace"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
