import { Button } from "@/components/ui";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 pt-5 sm:px-6 sm:pt-10 md:px-8 md:pt-24">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="max-w-3xl space-y-6 text-center">
          <h1 className="title text-5xl font-bold sm:text-6xl md:text-7xl">
            Unleash the power of intuitive finance
          </h1>
          <p className="text-regular text-sm sm:text-xl">
            Say goodbye to the outdated financial tools. Every small business
            owner, regardless of the background, can now manage their business
            like a pro. Simple. Intuitive. And never boring.
          </p>
        </div>
        <div className="space-y-8">
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
      </div>
      <div className="animated-wrapper my-10 !w-full !rounded-2xl !p-[0.5px] md:my-24">
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
