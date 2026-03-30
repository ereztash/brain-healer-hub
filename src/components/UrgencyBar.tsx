import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";

const WEBINAR_DATE = new Date("2026-04-20T18:00:00+03:00");
const REMAINING_SPOTS = 4;
const TOTAL_SPOTS = 10;

const UrgencyBar = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = WEBINAR_DATE.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 bg-danger/95 backdrop-blur-sm py-2 px-4"
      initial={{ y: -48 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-3 text-danger-foreground text-sm font-bold">
        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>הוובינר מתחיל בעוד:</span>
          <span className="font-mono text-base tracking-widest bg-black/20 px-2 py-0.5 rounded">
            {pad(timeLeft.days)}:{pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
          </span>
        </div>
        <span className="hidden md:block opacity-40">|</span>
        <div className="flex items-center gap-1.5">
          <Users size={14} />
          <span>
            נותרו <strong className="underline">{REMAINING_SPOTS}</strong> מתוך {TOTAL_SPOTS} מקומות
          </span>
        </div>
        <motion.button
          onClick={scrollToForm}
          className="bg-white text-danger px-3 py-1 rounded font-black text-xs hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          הבטח מקום →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default UrgencyBar;
