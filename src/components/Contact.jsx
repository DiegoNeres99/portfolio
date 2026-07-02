import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiAlertCircle, FiSend } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import { isValidSocialProfile } from "../utils/socialLinks";
import SectionTitle from "./SectionTitle";

const schema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

const contactLinks = (p, { hasGithub, hasLinkedin, hasInstagram }) => [
  {
    href: `mailto:${p.email}`,
    icon: FaEnvelope,
    label: p.email,
    show: true,
  },
  {
    href: p.whatsapp,
    icon: FaWhatsapp,
    label: "WhatsApp — resposta rápida",
    show: true,
    external: true,
  },
  {
    href: p.linkedin,
    icon: FaLinkedin,
    label: "LinkedIn",
    show: hasLinkedin,
    external: true,
  },
  {
    href: p.github,
    icon: FaGithub,
    label: "GitHub /DiegoNeres99",
    show: hasGithub,
    external: true,
  },
  {
    href: p.instagram,
    icon: FaInstagram,
    label: `Instagram ${p.instagramHandle ?? ""}`,
    show: hasInstagram,
    external: true,
  },
];

function Contact() {
  const hasGithub = isValidSocialProfile(profile.github, "github");
  const hasLinkedin = isValidSocialProfile(profile.linkedin, "linkedin");
  const hasInstagram = isValidSocialProfile(profile.instagram, "instagram");

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setStatus("submitting");
    try {
      if (FORMSPREE_URL) {
        const res = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Formspree error");
        setStatus("success");
        reset();
      } else {
        // Fallback: abre mailto com os dados preenchidos
        const subject = encodeURIComponent(`Contato Portfolio — ${data.name}`);
        const body = encodeURIComponent(
          `Nome: ${data.name}\nE-mail: ${data.email}\n\nMensagem:\n${data.message}`
        );
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setStatus("idle");
      }
    } catch {
      setStatus("error");
    }
  };

  const links = contactLinks(profile, { hasGithub, hasLinkedin, hasInstagram });

  return (
    <section id="contato" data-section className="py-28 md:py-36">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionTitle
          eyebrow="Contato"
          title="Vamos construir algo sólido"
          subtitle="Aberto a oportunidades de emprego, freelas e projetos em equipe. Retorno em até 24h."
        />

        <div className="grid gap-6 md:grid-cols-[1fr_auto]">
          {/* Formulário */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-2xl border border-border bg-surface p-7 md:p-9"
          >
            <div className="space-y-5">
              {/* Nome */}
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-textMuted">
                  Nome
                </label>
                <input
                  id="contact-name"
                  {...register("name")}
                  className="w-full rounded-lg border border-border bg-panel px-4 py-3 text-sm text-textPrimary transition focus-visible:border-accent focus-visible:outline-none"
                  placeholder="Seu nome"
                />
                {errors.name ? (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <FiAlertCircle size={11} /> {errors.name.message}
                  </p>
                ) : null}
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="contact-email" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-textMuted">
                  E-mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  {...register("email")}
                  className="w-full rounded-lg border border-border bg-panel px-4 py-3 text-sm text-textPrimary transition focus-visible:border-accent focus-visible:outline-none"
                  placeholder="seuemail@dominio.com"
                />
                {errors.email ? (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <FiAlertCircle size={11} /> {errors.email.message}
                  </p>
                ) : null}
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="contact-message" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-textMuted">
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  {...register("message")}
                  className="w-full resize-none rounded-lg border border-border bg-panel px-4 py-3 text-sm text-textPrimary transition focus-visible:border-accent focus-visible:outline-none"
                  placeholder="Me conte sobre seu projeto ou oportunidade..."
                />
                {errors.message ? (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <FiAlertCircle size={11} /> {errors.message.message}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90 disabled:opacity-50"
              >
                {status === "submitting" ? (
                  "Enviando..."
                ) : (
                  <>
                    <FiSend size={14} /> Enviar Mensagem
                  </>
                )}
              </button>

              {status === "success" ? (
                <p className="flex items-center gap-1.5 text-sm text-green-400">
                  <FiCheck size={14} /> Mensagem enviada!
                </p>
              ) : null}

              {status === "error" ? (
                <p className="flex items-center gap-1.5 text-sm text-red-400">
                  <FiAlertCircle size={14} /> Erro ao enviar. Tente pelo WhatsApp.
                </p>
              ) : null}
            </div>
          </motion.form>

          {/* Links diretos */}
          <motion.aside
            variants={fadeUp}
            className="flex flex-col rounded-2xl border border-border bg-surface p-7 md:w-64"
          >
            <h3 className="font-display text-lg font-bold text-textPrimary">
              Contato direto
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-textMuted">
              Prefere contato direto? Escolha o canal mais conveniente.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              {links
                .filter((l) => l.show)
                .map((l) => {
                  const Icon = l.icon;
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-xl border border-border bg-panel px-4 py-3 text-sm text-textMuted transition hover:border-accent/40 hover:text-textPrimary"
                    >
                      <Icon size={15} className="shrink-0 text-accent" aria-hidden="true" />
                      <span className="truncate">{l.label}</span>
                    </a>
                  );
                })}
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
