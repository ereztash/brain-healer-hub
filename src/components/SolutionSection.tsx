import { motion } from "framer-motion";
import { Bot, Mic, History } from "lucide-react";

const features = [
  { icon: Bot, text: "סוכן AI אישי שלמד את הסגנון שלכם" },
  { icon: Mic, text: "Tone of Voice מותאם אישית" },
  { icon: History, text: "מאומן על ההיסטוריה והתוכן שלכם" },
];

const SolutionSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-electric/[0.02]" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            <span className="text-electric">Tech Tourniquet</span>: חסם עורקים טכנולוגי
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            אנחנו מעבירים את שריפת המשאבים מהמוח שלכם למכונה שלמדה אתכם.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="card-glass rounded-xl p-6 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-full bg-electric/10 flex items-center justify-center">
                <f.icon className="text-electric" size={28} />
              </div>
              <p className="text-foreground font-medium text-lg">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
