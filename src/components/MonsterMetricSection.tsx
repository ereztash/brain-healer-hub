import { motion } from "framer-motion";

const MonsterMetricSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-danger/[0.02]" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-danger text-8xl md:text-9xl font-black mb-6">
            ₪4,200
          </p>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            זהו ההפסד החודשי המינימלי שלכם על חשיפה 'אורגנית'.
            <br />
            <span className="text-muted-foreground">
              אתם לא משלמים באשראי, אתם משלמים ב
            </span>
            <span className="text-danger font-bold">'חמצן תפעולי'</span>.
          </p>
          <div className="inline-block card-glass px-6 py-3 rounded-lg">
            <span className="text-electric font-bold">Decision Latency Tax</span>
            <span className="text-muted-foreground mr-2"> — מס השהיית החלטות</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MonsterMetricSection;
