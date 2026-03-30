import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Shield, Lock, Users } from "lucide-react";

const LeadFormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase.from("webinar_registrants").insert({
        full_name: name.trim(),
        work_email: email.trim(),
        linkedin_url: null,
      });

      if (error) throw error;

      toast({
        title: "נרשמת בהצלחה! 🎉",
        description: "נשלח לך מייל עם פרטי הוובינר בקרוב.",
      });
      setName("");
      setEmail("");
    } catch (err: any) {
      toast({
        title: "שגיאה",
        description: "משהו השתבש, נסו שוב.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="py-24 px-4">
      <div className="container mx-auto max-w-lg">
        {/* Social proof header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-electric/10 border border-electric/20 rounded-full px-4 py-2 mb-4">
            <Users size={14} className="text-electric" />
            <span className="text-electric text-sm font-semibold">
              47 אנשי מקצוע כבר הבטיחו את מקומם
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            הבטיחו את{" "}
            <span className="text-gradient-danger">מקומכם האחרון</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            נותרו 4 מקומות בלבד — ההרשמה לוקחת דקה
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="card-glass rounded-2xl p-8 md:p-10 glow-danger"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                שם מלא
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ישראל ישראלי"
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-electric transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                אימייל
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-electric transition-colors"
                dir="ltr"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 rounded-lg bg-danger text-danger-foreground font-black text-lg pulse-red disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "שומר מקום..." : "תעצרו לי את הדימום — אני בפנים ✊"}
          </motion.button>

          {/* Trust signals */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Lock size={11} className="text-electric" />
              המידע שלך מוצפן ומאובטח
            </span>
            <span className="flex items-center gap-1.5">
              <Shield size={11} className="text-electric" />
              ערבות השבת כסף מלאה 14 יום
            </span>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadFormSection;
