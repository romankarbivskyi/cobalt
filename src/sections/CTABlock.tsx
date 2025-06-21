import { SectionHead, Title, Subtitle, Button } from "@/components/ui";

const CTABlock = () => {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-4 py-5 sm:px-6 sm:py-10 md:px-8 md:py-24">
      <div className="from-dark via-accent to-dark absolute top-0 h-px w-3xs bg-linear-to-r"></div>
      <SectionHead center className="lg:max-w-3/5">
        <Title level="h3">
          See where financial automation can take your business.
        </Title>
        <Subtitle size="lg">
          The first financial tool you'll love. And the last one you'll ever
          need.
        </Subtitle>
      </SectionHead>
      <Button>Join the waitlist</Button>
    </section>
  );
};

export default CTABlock;
