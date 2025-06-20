import { FeatureCard } from "@/components";
import { SectionHead, Subtitle, Title } from "@/components/ui";

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
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24">
      <div className="space-y-16">
        <SectionHead variant="half">
          <Title level="h2">Everything you need. Nothing you don't</Title>
          <Subtitle size="lg">
            Financial management and visibility in one place. Experience a{" "}
            <span className="text-white">flexible toolkit</span> that makes
            every task feel like a breeze.
          </Subtitle>
        </SectionHead>

        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[3fr_2fr]">
            {features.slice(3, 5).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
