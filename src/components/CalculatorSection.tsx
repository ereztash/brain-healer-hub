import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";

const CalculatorSection = () => {
  const [hourlyRate, setHourlyRate] = useState(300);
  const [hoursPerWeek, setHoursPerWeek] = useState(4);

  const monthlyLoss = hourlyRate * hoursPerWeek * 4;

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          className="card-glass rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 justify-center mb-8">
            <Calculator className="text-electric" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              מחשבון כאב אישי
            </h2>
          </div>

          <div className="space-y-8">
            {/* Hourly Rate */}
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-muted-foreground">תעריף שעתי</span>
                <span className="text-electric font-bold text-lg">₪{hourlyRate}</span>
              </div>
              <Slider
                value={[hourlyRate]}
                onValueChange={(v) => setHourlyRate(v[0])}
                min={100}
                max={1000}
                step={50}
                className="[&_[role=slider]]:bg-electric [&_[role=slider]]:border-electric [&_.relative>div]:bg-electric"
              />
            </div>

            {/* Hours per week */}
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-muted-foreground">שעות תוכן בשבוע</span>
                <span className="text-electric font-bold text-lg">{hoursPerWeek} שעות</span>
              </div>
              <Slider
                value={[hoursPerWeek]}
                onValueChange={(v) => setHoursPerWeek(v[0])}
                min={1}
                max={20}
                step={1}
                className="[&_[role=slider]]:bg-electric [&_[role=slider]]:border-electric [&_.relative>div]:bg-electric"
              />
            </div>

            {/* Result */}
            <motion.div
              className="text-center pt-6 border-t border-border"
              key={monthlyLoss}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-muted-foreground mb-2">ההפסד החודשי שלכם:</p>
              <p className="text-5xl md:text-6xl font-black text-danger">
                ₪{monthlyLoss.toLocaleString()}
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                שנזרקים על תוכן שאפשר לייצר אוטומטית
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
