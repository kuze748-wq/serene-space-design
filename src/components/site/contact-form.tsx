import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { whatsappUrl } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(80),
  email: z.string().trim().email("Informe um e-mail válido.").max(120),
  phone: z.string().trim().min(8, "Informe um telefone válido.").max(24),
  message: z.string().trim().min(5, "Escreva uma breve mensagem.").max(500),
});

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) next[issue.path[0] as keyof Errors] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const { name, email, phone, message } = parsed.data;
    const text = `Olá! Gostaria de saber mais sobre o atendimento psicológico.\n\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }
  const fields = [
    { id: "name", label: "Nome", type: "text", placeholder: "Como você gostaria de ser chamado(a)?" },
    { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
    { id: "phone", label: "Telefone", type: "tel", placeholder: "(00) 00000-0000" },
  ] as const;
  return <form onSubmit={submit} noValidate className="grid gap-5" aria-label="Formulário de contato">
    <div className="grid gap-5 sm:grid-cols-2">{fields.map((field, index) => <div key={field.id} className={index === 0 ? "sm:col-span-2" : ""}><Label htmlFor={field.id}>{field.label}</Label><Input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} maxLength={field.id === "phone" ? 24 : 120} aria-invalid={Boolean(errors[field.id])} className="mt-2 h-12 bg-background" />{errors[field.id] && <p className="mt-1 text-xs text-destructive" role="alert">{errors[field.id]}</p>}</div>)}</div>
    <div><Label htmlFor="message">Mensagem</Label><Textarea id="message" name="message" placeholder="Conte apenas o necessário para iniciarmos o contato. Evite informações sensíveis." maxLength={500} aria-invalid={Boolean(errors.message)} className="mt-2 min-h-32 bg-background" />{errors.message && <p className="mt-1 text-xs text-destructive" role="alert">{errors.message}</p>}</div>
    <p className="text-xs leading-5 text-muted-foreground">Ao enviar, os dados serão usados somente para abrir uma conversa no WhatsApp. Nenhuma informação é armazenada neste site.</p>
    <Button type="submit" size="lg" className="h-12 justify-between rounded-full px-6">Enviar mensagem <ArrowUpRight /></Button>
    <Button asChild type="button" variant="outline" size="lg" className="h-12 rounded-full"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />Falar direto pelo WhatsApp</a></Button>
  </form>;
}
