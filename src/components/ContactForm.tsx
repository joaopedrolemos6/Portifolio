import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { z } from "zod";
import { contactService } from "@/services/contactService";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: keyof ContactForm, value: string) => {
    try {
      contactSchema.shape[name].parse(value);
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [name]: error.errors[0].message }));
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      validateField(name as keyof ContactForm, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name as keyof ContactForm, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    try {
      contactSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactForm, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactForm] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }
    }

    setIsSubmitting(true);
    
    // Using contact service (ready for backend integration)
    try {
      await contactService.sendMessage({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Contato
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vamos conversar sobre seu projeto
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-3xl p-10 space-y-7">
            <div className="space-y-3">
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-5 py-4 rounded-2xl bg-background border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                  errors.name ? "border-destructive" : "border-border"
                }`}
                placeholder="Seu nome"
              />
              {errors.name && (
                <p className="text-sm text-destructive flex items-center gap-2 mt-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-5 py-4 rounded-2xl bg-background border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                  errors.email ? "border-destructive" : "border-border"
                }`}
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="text-sm text-destructive flex items-center gap-2 mt-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={6}
                className={`w-full px-5 py-4 rounded-2xl bg-background border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none ${
                  errors.message ? "border-destructive" : "border-border"
                }`}
                placeholder="Conte sobre seu projeto..."
              />
              {errors.message && (
                <p className="text-sm text-destructive flex items-center gap-2 mt-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </p>
              )}
            </div>

            {status === "success" && (
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">Mensagem enviada com sucesso!</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || status === "success"}
              className="w-full btn-hero flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {isSubmitting ? (
                <span>Enviando...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
