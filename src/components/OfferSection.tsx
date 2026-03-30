import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const OfferSection = () => {
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
                נותרו 6 מקומות בלבד מתוך 10 החודש
              </span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-muted-foreground mb-2">השקעה חד-פעמית (לא מנוי!)</p>
            <p className="text-6xl md:text-7xl font-black text-electric mb-2">₪800</p>
            <p className="text-muted-foreground text-sm">
              פחות מעלות חודש אחד של שריפת זמן
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
