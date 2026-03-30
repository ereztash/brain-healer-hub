import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const LeadFormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);
    // TODO: Connect to Supabase
    await new Promise((r) => setTimeout(r, 1000));
    toast({
      title: "נרשמת בהצלחה! 🎉",
      description: "נשלח לך מייל עם פרטי הוובינר בקרוב.",
    });
    setName("");
    setEmail("");
    setLinkedin("");
    setLoading(false);
  };

  return (
    <section id="lead-form" className="py-24 px-4">
      <div className="container mx-auto max-w-lg">
        <motion.form
          onSubmit={handleSubmit}
          className="card-glass rounded-2xl p-8 md:p-10 glow-electric"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            הצטרפו <span className="text-electric">לוובינר</span>
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">שם מלא</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ישראל ישראלי"
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">אימייל עבודה</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">קישור לפרופיל LinkedIn</label>
              <Input
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://linkedin.com/in/..."
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                dir="ltr"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 rounded-lg bg-danger text-danger-foreground font-bold text-lg pulse-red disabled:opacity-50 transition-transform hover:scale-[1.02]"
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "שולח..." : "תעצרו לי את הדימום - אני בפנים"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadFormSection;
