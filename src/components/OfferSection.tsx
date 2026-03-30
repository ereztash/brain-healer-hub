import { motion } from "framer-motion";
import { AlertTriangle, Check, Shield } from "lucide-react";

const INCLUDED = [
  "3 שעות וובינר אינטנסיבי עם הדגמות חיות",
  "תבניות מוכנות לסוכן כתיבה אישי",
  "גישה לקהילה פרטית + 30 יום ליווי",
  "הקלטה מלאה + חומרים דיגיטליים",
  "בונוס: 10 פרומפטים מוכנים לשימוש מיידי",
];

const OfferSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-lg">
        <motion.div
          className="card-glass rounded-2xl p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Scarcity banner */}
          <div className="absolute top-0 left-0 right-0 bg-danger py-2 px-4">
            <div className="flex items-center justify-center gap-2">
              <AlertTriangle size={16} className="text-danger-foreground" />
              <span className="text-danger-foreground font-bold text-sm">
                נותרו 4 לקוחות בלבד שאני יכול ללוות החודש
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-8">
            <p className="text-muted-foreground mb-1">השקעה חד-פעמית (לא מנוי!)</p>
            <p className="text-muted-foreground line-through text-xl mb-1 opacity-60">₪1,500</p>
            <p className="text-6xl md:text-7xl font-black text-electric mb-1">₪800</p>
            <p className="text-muted-foreground text-sm mb-6">
              פחות מעלות חודש אחד של שריפת זמן
            </p>
          </div>

          {/* What's included */}
          <div className="text-right mb-8 border border-border rounded-xl p-5 bg-secondary/30">
            <p className="text-sm font-bold text-foreground mb-4 text-center">מה כלול בוובינר:</p>
            <ul className="space-y-3">
              {INCLUDED.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check size={15} className="text-electric mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA button */}
          <motion.button
            onClick={scrollToForm}
            className="w-full py-4 rounded-lg bg-danger text-danger-foreground font-black text-lg pulse-red mb-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            אני רוצה את מקומי עכשיו
          </motion.button>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Shield size={14} className="text-electric flex-shrink-0" />
            <span>ערבות השבת כסף מלאה תוך 14 יום — ללא שאלות</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
