import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "יובל כהן",
    role: "מנהל שיווק דיגיטלי",
    company: "SaaS B2B",
    avatar: "יכ",
    text: "לפני הוובינר הייתי מבזבז 18 שעות בחודש על כתיבת פוסטים. היום הסוכן שלי מייצר 12 פוסטים ב-40 דקות. החזרתי לעצמי שבוע עבודה שלם.",
    metric: "18 שעות → 40 דקות בחודש",
    color: "electric" as const,
  },
  {
    name: "מיכל לוי",
    role: "יועצת עצמאית",
    company: "HR Tech",
    avatar: "מל",
    text: "הייתי סקפטית לגבי AI לכתיבה. אחרי הוובינר פיתחתי סוכן שמדבר בדיוק כמוני. הלקוחות שלי לא יודעים שAI עוזר לי — וזה בדיוק מה שרציתי.",
    metric: "₪3,200 הכנסה נוספת בחודש ראשון",
    color: "danger" as const,
  },
  {
    name: "אמיר ברק",
    role: "מייסד שותף",
    company: "Fintech Startup",
    avatar: "אב",
    text: "שלמתי ₪800 וחסכתי ₪4,000 כבר בחודש הראשון. החשבון הפשוט הזה מספיק. ההשקעה הכי טובה שעשיתי השנה — ללא תחרות.",
    metric: "ROI של 500% בחודש הראשון",
    color: "electric" as const,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-electric uppercase tracking-widest mb-3">
            תוצאות אמיתיות
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            מה אמרו המשתתפים{" "}
            <span className="text-gradient-electric">בדיוק</span>
          </h2>
          <p className="text-muted-foreground text-lg">מספרים לא משקרים</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="card-glass rounded-2xl p-6 flex flex-col gap-4 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Quote
                size={20}
                className={`absolute top-4 left-4 opacity-20 ${t.color === "electric" ? "text-electric" : "text-danger"}`}
              />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-foreground/90 leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Metric badge */}
              <div
                className={`text-xs font-bold px-3 py-2 rounded-lg text-center ${
                  t.color === "electric"
                    ? "bg-electric/10 text-electric border border-electric/20"
                    : "bg-danger/10 text-danger border border-danger/20"
                }`}
              >
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    t.color === "electric"
                      ? "bg-electric/20 text-electric"
                      : "bg-danger/20 text-danger"
                  }`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
