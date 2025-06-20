import { SectionHead, Title, Subtitle } from "@/components/ui";

const About = () => {
  return (
    <section className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-10 md:px-8 md:py-24">
      <SectionHead variant="wide">
        <Title level="h2">Who said finance has to be boring?</Title>
        <Subtitle>
          With Cobalt, managing your business finances is effortless,
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making,
          and puts the power of advanced financial management right at your
          fingertips.{" "}
          <span className="text-white">
            Say no to spreadsheets and tools designed in the 80s.
          </span>
        </Subtitle>
      </SectionHead>
    </section>
  );
};

export default About;
