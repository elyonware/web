import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const SERVICES = [
  "Software & Application Development",
  "Cloud Platforms & Data Management",
  "IoT & Embedded Systems",
  "AI, ML & Biometric Systems",
  "IT Consulting & System Integration",
  "Digital Platforms & Marketplaces",
  "Hilabi — Vehicle QR Tag System",
  "Assessment & Evaluation System",
  "Scholar Management System",
  "Other / Not sure yet",
];

const CONTACT_ITEMS = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "General enquiries",
    value: "hello@elyonware.com",
    href: "mailto:hello@elyonware.com",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
    label: "Sales & partnerships",
    value: "sales@elyonware.com",
    href: "mailto:sales@elyonware.com",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    label: "Call us",
    value: "+91 87300 32780",
    href: "tel:+918730032780",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.49 2.031 7.8L0 32l8.418-2.004A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.078 22.616c-.337.947-1.97 1.809-2.695 1.927-.69.112-1.56.159-2.514-.158-.58-.19-1.324-.444-2.276-.87-4.002-1.73-6.614-5.76-6.814-6.026-.198-.265-1.618-2.153-1.618-4.108s1.023-2.91 1.386-3.309c.362-.398.792-.497 1.056-.497.264 0 .528.002.759.014.243.013.569-.092.891.68.336.8 1.141 2.755 1.24 2.955.099.199.166.431.033.694-.133.264-.199.43-.397.661-.198.232-.417.518-.595.695-.198.199-.404.414-.174.812.23.397 1.022 1.687 2.195 2.733 1.508 1.343 2.78 1.758 3.177 1.957.397.198.628.166.86-.1.23-.265.99-1.155 1.254-1.552.264-.397.528-.331.891-.199.364.133 2.31 1.09 2.707 1.288.397.199.661.298.76.464.099.166.099.962-.238 1.91z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 87300 32780",
    href: "https://wa.me/918730032780",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 00.284 2.253"
        />
      </svg>
    ),
    label: "Website",
    value: "www.elyonware.com",
    href: "/",
  },
];

type FormState = "idle" | "sent";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white border border-white/25 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00d4ff]/70 transition-all duration-200 text-sm";

  return (
    <>
      <SEO
        title="Contact Elyonware | Let's Talk"
        description="Reach out to Elyonware for project enquiries, product questions, or partnership opportunities. We respond within one business day."
        path="/contact"
      />
      <main style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(180,230,255,0.22) 0%, transparent 50%), radial-gradient(ellipse at 0% 30%, rgba(0,150,255,0.18) 0%, transparent 50%), radial-gradient(ellipse at 100% 20%, rgba(100,200,255,0.18) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(50,100,220,0.12) 0%, transparent 50%), #03080f' }}>
        <Header />

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-16 px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-4">
            Contact Us
          </p>
          <h1
            className="font-black tracking-tight leading-tight text-white mb-5"
            style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)" }}
          >
            Let's start a{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              conversation.
            </span>
          </h1>
          <p className="text-white text-lg max-w-xl mx-auto">
            Whether you have a project in mind or just want to explore what's
            possible — we're here for it. No hard sells, just honest
            conversation.
          </p>
        </section>

        {/* ── Main grid ── */}
        <section className="py-12 px-4 sm:px-6 pb-28">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
            {/* ── Contact form ── */}
            <div>
              <div
                className="p-6 sm:p-8 rounded-3xl border border-white/20 backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.13) 0%, rgba(88,101,242,0.22) 40%, rgba(168,85,247,0.18) 75%, rgba(0,212,255,0.12) 100%)",
                  boxShadow:
                    "0 0 60px rgba(88,101,242,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                {status === "sent" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Message sent!
                    </h3>
                    <p className="text-white max-w-sm">
                      Thanks for reaching out. We'll get back to you within 1–2
                      business days.
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({
                          name: "",
                          email: "",
                          company: "",
                          service: "",
                          message: "",
                        });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-[30px] border border-white/20 text-white text-sm font-semibold hover:bg-white/[0.08] transition-colors"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold text-white mb-6">
                      Send us a message
                    </h2>

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white mb-1.5">
                          Full name *
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Jane Smith"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white mb-1.5">
                          Email address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@company.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">
                        Company / Organisation
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp (optional)"
                        className={inputClass}
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">
                        What are you interested in? *
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option
                          value=""
                          disabled
                          className="bg-white text-gray-400"
                        >
                          Select a service or product…
                        </option>
                        {SERVICES.map((s) => (
                          <option
                            key={s}
                            value={s}
                            className="bg-white text-gray-900"
                          >
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project, timeline or any questions you have…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-[30px] transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
                    >
                      Send message →
                    </button>

                    <p className="text-xs text-white text-center">
                      We'll respond within 1–2 business days.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* ── Contact info ── */}
            <div className="flex flex-col gap-5">
              {/* Contact channels with robot floating over the card */}
              <div className="relative">
                <img
                  src="/robot3-lay-on-belly.png"
                  alt=""
                  style={{
                    width: 200,
                    height: "auto",
                    animation: "float-subtle 8s ease-in-out infinite",
                    filter: "drop-shadow(0 0 20px rgba(0,212,255,0.2))",
                    position: "absolute",
                    top: -90,
                    right: 16,
                    zIndex: 10,
                  }}
                />
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                  <h3 className="font-bold text-white mb-5">
                    Other ways to reach us
                  </h3>
                  <div className="flex flex-col gap-4">
                    {CONTACT_ITEMS.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="flex items-start gap-3 group"
                      >
                        <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400 group-hover:bg-indigo-500/25 transition-colors">
                          {c.icon}
                        </div>
                        <div>
                          <div className="text-xs text-white mb-0.5">
                            {c.label}
                          </div>
                          <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                            {c.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-violet-950/40 border border-indigo-500/20 backdrop-blur-md">
                <h3 className="font-bold text-white mb-3">Response time</h3>
                <p className="text-sm text-white leading-relaxed mb-4">
                  We aim to respond to every enquiry within{" "}
                  <span className="text-indigo-300 font-semibold">
                    24–48 hours
                  </span>{" "}
                  on business days.
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-white">
                    Currently accepting new projects
                  </span>
                </div>
              </div>

              {/* Quick links */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                <h3 className="font-bold text-white mb-4">Explore first</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Our services", href: "/#services" },
                    { label: "Our products", href: "/#products" },
                    { label: "About us", href: "/about" },
                  ].map((l) => (
                    <Link
                      key={l.label}
                      to={l.href}
                      className="flex items-center justify-between py-2 border-b border-white/[0.06] last:border-0 text-sm text-white hover:text-indigo-300 transition-colors group"
                    >
                      {l.label}
                      <svg
                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <Footer />
      </main>
    </>
  );
}
