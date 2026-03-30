import HeroSection from "@/components/HeroSection";
import MonsterMetricSection from "@/components/MonsterMetricSection";
import CalculatorSection from "@/components/CalculatorSection";
import ScienceSection from "@/components/ScienceSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import LeadFormSection from "@/components/LeadFormSection";
import FAQSection from "@/components/FAQSection";
import UrgencyBar from "@/components/UrgencyBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <div className="pt-10">
        <HeroSection />
        <MonsterMetricSection />
        <CalculatorSection />
        <ScienceSection />
        <SolutionSection />
        <TestimonialsSection />
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
    </div>
  );
};

export default Index;
