import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "זה יישמע כמו רובוט?",
    a: "בשום אופן לא. הסוכן מאומן על הסגנון האישי שלכם — הטון, המילים, הביטויים. התוצאה היא תוכן שנשמע בדיוק כמוכם, כי הוא למד מכם.",
  },
  {
    q: "מה אם אין לי היסטוריה בלינקדאין?",
    a: "אין בעיה. נעבוד איתכם על בניית Tone of Voice מאפס, ונלמד את הסוכן את הסגנון שלכם דרך שיחה אישית וחומרים קיימים.",
  },
  {
    q: "כמה זמן לוקח עד שאני רואה תוצאות?",
    a: "תוך שבוע תקבלו את הסוכן האישי שלכם מוכן לפעולה. רוב הלקוחות שלנו רואים חיסכון של 10-15 שעות כבר בחודש הראשון.",
  },
  {
    q: "למה זה חד-פעמי ולא מנוי?",
    a: "כי אנחנו בונים לכם נכס, לא שירות תלוי. הסוכן שלכם — ברגע שהוא מוכן — הוא שלכם לתמיד.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          שאלות <span className="text-electric">נפוצות</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-glass rounded-xl border-border px-6"
              >
                <AccordionTrigger className="text-foreground text-right font-bold text-lg hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
