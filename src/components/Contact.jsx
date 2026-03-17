import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Contato Portfolio - ${form.name || "Novo lead"}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" data-section className="py-20 md:py-28">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          eyebrow="Contato"
          title="Vamos Construir Algo Solido"
          subtitle="Use o formulario para enviar uma mensagem direta ou acesse os canais abaixo."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <motion.form
            variants={fadeUp}
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-surface p-5 md:p-6"
          >
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-textMuted">
                  Nome
                </span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="w-full rounded-lg border border-white/10 bg-panel px-3 py-2 text-sm text-textPrimary outline-none transition focus:border-accent"
                  placeholder="Seu nome"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-textMuted">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-lg border border-white/10 bg-panel px-3 py-2 text-sm text-textPrimary outline-none transition focus:border-accent"
                  placeholder="seuemail@dominio.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-textMuted">
                  Mensagem
                </span>
                <textarea
                  required
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  className="w-full rounded-lg border border-white/10 bg-panel px-3 py-2 text-sm text-textPrimary outline-none transition focus:border-accent"
                  placeholder="Como posso ajudar?"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:shadow-glow"
            >
              Enviar Mensagem
            </button>
          </motion.form>

          <motion.aside
            variants={fadeUp}
            className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 md:p-6"
          >
            <div>
              <h3 className="font-display text-xl text-textPrimary">Canais de contato</h3>
              <p className="mt-2 text-sm leading-relaxed text-textMuted">
                Retorno rapido para oportunidades de trabalho, freelas e projetos em equipe.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-panel px-4 py-3 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
              >
                <FaEnvelope /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-panel px-4 py-3 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-panel px-4 py-3 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-panel px-4 py-3 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-panel px-4 py-3 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
