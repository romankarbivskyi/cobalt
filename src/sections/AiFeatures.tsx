import { FeatureCard } from "@/components";
import { SectionHead, Subtitle, Title } from "@/components/ui";

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

const Features = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24">
      <div className="space-y-16">
        <SectionHead center variant="half">
          <Title level="h2">Meet Genius</Title>
          <Subtitle size="lg">
            Our AI-driven assistant is designed to decode complex financial
            figures and{" "}
            <span className="text-white">illuminate key trends</span> in your
            business.
          </Subtitle>
        </SectionHead>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
