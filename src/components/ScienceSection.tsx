import { motion } from "framer-motion";
import { Cog, BatteryLow } from "lucide-react";

const cards = [
  {
    icon: Cog,
    title: "מס התחלופה",
    subtitle: "Context Switching",
    content: "כל קפיצה בין משימות גוזלת 23 דקות ו-15 שניות של ריכוז.",
    color: "electric" as const,
  },
  {
    icon: BatteryLow,
    title: "עייפות החלטות",
    subtitle: "Decision Fatigue",
    content: "שריפת דופמין על אימוג'ים וכותרות מונעת מכם לסגור עסקאות בשיחות מכירה.",
    color: "danger" as const,
  },
];

const ScienceSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-center mb-16 text-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          המדע מאחורי <span className="text-danger">השריפה</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="card-glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <card.icon
                className={card.color === "electric" ? "text-electric" : "text-danger"}
                size={40}
              />
              <h3 className="text-2xl font-bold text-foreground mt-4 mb-1">
                {card.title}
              </h3>
              <p className="text-electric text-sm mb-4">{card.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
