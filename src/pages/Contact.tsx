import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const CONTACT_ITEMS = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "Mail us",
    value: "contact@elyonware.com",
    href: "mailto:contact@elyonware.com",
    accent: "text-blue-400",
    iconBg: "bg-blue-500/15 group-hover:bg-blue-500/25",
    hoverText: "group-hover:text-blue-400",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
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
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/15 group-hover:bg-emerald-500/25",
    hoverText: "group-hover:text-emerald-400",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.49 2.031 7.8L0 32l8.418-2.004A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.078 22.616c-.337.947-1.97 1.809-2.695 1.927-.69.112-1.56.159-2.514-.158-.58-.19-1.324-.444-2.276-.87-4.002-1.73-6.614-5.76-6.814-6.026-.198-.265-1.618-2.153-1.618-4.108s1.023-2.91 1.386-3.309c.362-.398.792-.497 1.056-.497.264 0 .528.002.759.014.243.013.569-.092.891.68.336.8 1.141 2.755 1.24 2.955.099.199.166.431.033.694-.133.264-.199.43-.397.661-.198.232-.417.518-.595.695-.198.199-.404.414-.174.812.23.397 1.022 1.687 2.195 2.733 1.508 1.343 2.78 1.758 3.177 1.957.397.198.628.166.86-.1.23-.265.99-1.155 1.254-1.552.264-.397.528-.331.891-.199.364.133 2.31 1.09 2.707 1.288.397.199.661.298.76.464.099.166.099.962-.238 1.91z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 87300 32780",
    href: "https://wa.me/918730032780",
    accent: "text-[#25D366]",
    iconBg: "bg-[#25D366]/15 group-hover:bg-[#25D366]/25",
    hoverText: "group-hover:text-[#25D366]",
  },
];

const ADDRESSES = [
  {
    label: "Registered Office",
    lines: [
      "27, Mawtap, Pyllun, Mawphlang",
      "East Khasi Hills, Shillong",
      "Meghalaya 793121, India",
    ],
    mapQuery: "27, Mawtap, Pyllun, Mawphlang, East Khasi Hills, Shillong, Meghalaya 793121, India",
  },
  {
    label: "Eazy Print Sevcs",
    lines: [
      "Rohila Building, Jaiaw Pdeng",
      "Shillong, East Khasi Hills",
      "Meghalaya 793002, India",
    ],
    mapQuery: "Rohila Building, Jaiaw Pdeng, Shillong, East Khasi Hills, Meghalaya 793002, India",
  },
];

const QUICK_LINKS = [
  { label: "Our services", href: "/#services" },
  { label: "Our products", href: "/#products" },
  { label: "About us", href: "/about" },
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Elyonware | Schedule a Consultation"
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

        {/* ── Contact channels ── */}
        <section className="py-8 px-4 sm:px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <img
                src="/robot3-lay-on-belly.png"
                alt=""
                style={{
                  width: 170,
                  height: "auto",
                  animation: "float-subtle 8s ease-in-out infinite",
                  filter: "drop-shadow(0 0 20px rgba(0,212,255,0.2))",
                  position: "absolute",
                  top: -84,
                  right: 8,
                  zIndex: 10,
                }}
              />
              <div className="grid sm:grid-cols-3 gap-4">
                {CONTACT_ITEMS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group relative z-10 flex items-center gap-4 p-6 rounded-2xl border border-white/[0.1] bg-[#12142e] hover:bg-[#181b3a] transition-colors"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${c.iconBg} ${c.accent}`}>
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-0.5">{c.label}</div>
                      <div className={`text-lg font-semibold text-white transition-colors ${c.hoverText}`}>
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office addresses */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {ADDRESSES.map((a) => (
                <div
                  key={a.label}
                  data-no-cursor-fx
                  className="relative z-10 flex flex-col rounded-2xl border border-white/[0.1] bg-[#12142e] overflow-hidden"
                >
                  <div className="flex items-start gap-4 p-6">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-rose-500/15 text-rose-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-0.5">{a.label}</div>
                      <div className="text-base font-semibold text-white leading-relaxed">
                        {a.lines.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <iframe
                    title={`Map — ${a.label}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(a.mapQuery)}&output=embed`}
                    className="w-full h-56 border-0 grayscale-[20%] contrast-[1.1]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {/* Response time */}
              <div
                data-no-cursor-fx
                className="relative z-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-violet-950/40 border border-indigo-500/20"
              >
                <h3 className="font-bold text-lg text-white mb-3">Response time</h3>
                <p className="text-base text-white leading-relaxed mb-4">
                  We aim to respond to every enquiry within{" "}
                  <span className="text-indigo-300 font-semibold">24–48 hours</span>{" "}
                  on business days.
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-base text-white">Currently accepting new projects</span>
                </div>
              </div>

              {/* Quick links */}
              <div
                data-no-cursor-fx
                className="relative z-10 p-6 rounded-2xl bg-[#12142e] border border-white/[0.1]"
              >
                <h3 className="font-bold text-lg text-white mb-4">Explore first</h3>
                <div className="flex flex-col gap-2">
                  {QUICK_LINKS.map((l) => (
                    <Link
                      key={l.label}
                      to={l.href}
                      className="flex items-center justify-between py-2 border-b border-white/[0.06] last:border-0 text-base text-white hover:text-indigo-300 transition-colors group"
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
