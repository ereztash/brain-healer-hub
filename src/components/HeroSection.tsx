import { motion } from "framer-motion";
import brainImage from "@/assets/brain-hero.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Scan line overlay */}
      <div className="absolute inset-0 scan-line pointer-events-none" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-danger/5 blur-[120px]" />

      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-right"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="text-foreground">המחיר הסמוי של ה</span>
            <span className="text-danger">'חינם'</span>
            <span className="text-foreground">:</span>
            <br />
            <span className="text-foreground">איך כתיבת תוכן </span>
            <span className="text-gradient-danger">שורפת לכם את המוח</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mr-0 mb-10 leading-relaxed">
            גלו איך להפסיק את הדימום הקוגניטיבי ולהחזיר לעצמכם 15 שעות עבודה בחודש.
          </p>

          <motion.button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-danger text-danger-foreground font-bold text-lg pulse-red transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            אני רוצה להחזיר לעצמי את המוח
          </motion.button>
        </motion.div>

        {/* Brain image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <img
              src={brainImage}
              alt="3D Brain illustration with timer"
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl glow-danger opacity-40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
