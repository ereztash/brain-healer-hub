import HeroSection from "@/components/HeroSection";
import MonsterMetricSection from "@/components/MonsterMetricSection";
import CalculatorSection from "@/components/CalculatorSection";
import ScienceSection from "@/components/ScienceSection";
import SolutionSection from "@/components/SolutionSection";
import OfferSection from "@/components/OfferSection";
import LeadFormSection from "@/components/LeadFormSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MonsterMetricSection />
      <CalculatorSection />
      <ScienceSection />
      <SolutionSection />
      <OfferSection />
      <LeadFormSection />
      <FAQSection />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2026 Tech Tourniquet. כל הזכויות שמורות.
        </p>
      </footer>
    </div>
  );
};

export default Index;
