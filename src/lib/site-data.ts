import type { LucideIcon } from "lucide-react";
import { Brain, Compass, HeartHandshake, Leaf, MessageCircleHeart, ShieldCheck, Sparkles, SunMedium } from "lucide-react";

export const brand = {
  name: "Ângela Testa",
  role: "Psicóloga",
  crp: "CRP: [PLACEHOLDER — inserir registro profissional]",
  location: "Adamantina — SP",
  phoneDisplay: "(18) 99618-6802",
  whatsapp: "5518996186802",
  instagram: "https://www.instagram.com/angelatesta.eusoupsico/",
  whatsappMessage: "Olá! Gostaria de saber mais sobre o atendimento psicológico.",
};

export const navItems = [
  { label: "Início", to: "/" as const },
  { label: "Sobre", to: "/sobre" as const },
  { label: "Atendimento", to: "/atendimento" as const },
  { label: "Especialidades", to: "/especialidades" as const },
  { label: "Como funciona", to: "/como-funciona" as const },
  { label: "Depoimentos", to: "/depoimentos" as const },
  { label: "FAQ", to: "/faq" as const },
  { label: "Contato", to: "/contato" as const },
];

export function whatsappUrl(message = brand.whatsappMessage) {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Specialty = { title: string; description: string; icon: LucideIcon };

export const specialties: Specialty[] = [
  { title: "Ansiedade", description: "Um espaço para compreender pensamentos, emoções e padrões que atravessam o cotidiano.", icon: Brain },
  { title: "Autoconhecimento", description: "Um percurso de aproximação com a própria história, escolhas, limites e possibilidades.", icon: Compass },
  { title: "Estresse", description: "Acolhimento para momentos de sobrecarga, tensão e dificuldade de encontrar equilíbrio.", icon: SunMedium },
  { title: "Relacionamentos", description: "Escuta para questões ligadas a vínculos, comunicação, limites e convivência.", icon: HeartHandshake },
  { title: "Desenvolvimento emocional", description: "Acompanhamento para reconhecer emoções e construir novos recursos internos.", icon: Leaf },
  { title: "Autoestima", description: "Um olhar cuidadoso para a relação consigo, sua percepção de valor e suas necessidades.", icon: Sparkles },
  { title: "Orientação psicológica", description: "Escuta profissional para organizar questões pontuais e compreender caminhos possíveis.", icon: MessageCircleHeart },
  { title: "Outras demandas", description: "Cada história é singular. O primeiro contato ajuda a compreender sua necessidade de cuidado.", icon: ShieldCheck },
];

export const steps = [
  { number: "01", title: "Primeiro contato", text: "Você envia uma mensagem pelo WhatsApp para saber mais e verificar a disponibilidade." },
  { number: "02", title: "Conversa inicial", text: "Um breve alinhamento para compreender sua busca e esclarecer dúvidas sobre o atendimento." },
  { number: "03", title: "Definição do acompanhamento", text: "Modalidade, frequência e demais combinados são definidos de forma clara e respeitosa." },
  { number: "04", title: "Acompanhamento psicológico", text: "Os encontros acontecem em um espaço de escuta, privacidade e cuidado profissional." },
];

export const faqs = [
  { q: "Como funciona a primeira sessão?", a: "A primeira sessão é um momento de acolhimento e escuta. Você poderá contar o que motivou a busca pelo atendimento, apresentar suas dúvidas e conhecer a forma de trabalho da profissional. Não é necessário chegar com tudo organizado." },
  { q: "Quanto tempo dura uma sessão?", a: "A duração exata será informada no primeiro contato. Esse e outros combinados do atendimento são esclarecidos antes do agendamento." },
  { q: "O atendimento pode ser online?", a: "A modalidade disponível será confirmada no primeiro contato, de acordo com a atuação profissional e com a sua necessidade." },
  { q: "Como faço para agendar?", a: "Entre em contato pelo WhatsApp. A conversa inicial serve para verificar disponibilidade, modalidade e demais informações necessárias para o agendamento." },
  { q: "Qual é a frequência das sessões?", a: "A frequência é definida de forma individual, considerando a avaliação profissional e as necessidades de cada pessoa. Esse combinado pode ser revisto ao longo do acompanhamento." },
  { q: "O atendimento é confidencial?", a: "Sim. O atendimento psicológico é orientado pelo sigilo profissional e pelas normas éticas da Psicologia, respeitadas as exceções previstas na legislação e no código profissional." },
  { q: "Como saber se a psicoterapia é indicada para mim?", a: "A psicoterapia pode ser procurada em momentos de sofrimento, mudança ou desejo de autoconhecimento. Uma conversa inicial ajuda a compreender sua demanda e a avaliar a indicação do acompanhamento, sem promessas de resultados." },
];

export function pageMeta(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
