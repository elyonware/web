import { useState, useRef, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ROLES = [
  { id: "ai-ml-engineer-senior", label: "Senior AI/ML Engineer", dept: "Artificial Intelligence" },
  { id: "ai-ml-engineer-mid",    label: "AI/ML Engineer",         dept: "Artificial Intelligence" },
  { id: "fullstack-engineer",    label: "Full-Stack Software Engineer", dept: "Engineering" },
  { id: "iot-engineer",          label: "IoT & Embedded Systems Engineer", dept: "Hardware & IoT" },
];

const STEPS = [
  { num: "01", title: "Fill out the form", desc: "Complete all fields honestly. We value clarity over polish." },
  { num: "02", title: "Send your application", desc: "Submitting opens your email client with everything pre-filled. Just hit send." },
  { num: "03", title: "We review & reach out", desc: "We personally review every application and respond within 5–7 business days." },
  { num: "04", title: "Technical interview", desc: "A focused conversation and/or take-home task to assess your skills." },
  { num: "05", title: "Offer & onboarding", desc: "If it's a match, we move fast — expect an offer within days." },
];

const TIPS = [
  "Tailor your cover letter to the specific role — generic messages stand out for the wrong reason.",
  "Link your best work: GitHub repos, live projects, or a portfolio.",
  "Be honest about your experience level — we value growth mindset over inflated CVs.",
  "LinkedIn and GitHub should be up to date before applying.",
];

function CustomSelect({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  options: { id: string; label: string; dept: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.id === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-3 bg-white border border-white/20 rounded-xl px-4 py-3 text-sm text-left transition-all duration-150 focus:outline-none hover:bg-white/90"
        style={{ color: selected ? "#111827" : "#9ca3af" }}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <svg
          className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-white/[0.15] bg-[#0f1040] shadow-2xl shadow-black/60 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => { onChange(opt.id); setOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors duration-100 flex flex-col gap-0.5
                ${value === opt.id ? "bg-white/20 text-white font-medium" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
            >
              <span>{opt.label}</span>
              <span className="text-[11px] text-white/40">{opt.dept}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ApplyForm() {
  const [searchParams] = useSearchParams();
  const preselect = searchParams.get("role") ?? "";

  type FTFields = { name: string; email: string; linkedin: string; github: string; portfolio: string; experience: string; location: string; message: string };
  type FTErrors = Partial<Record<keyof FTFields | "role", string>>;

  const validateFT = (f: FTFields, r: string): FTErrors => {
    const e: FTErrors = {};
    if (!r) e.role = "Please select a role.";
    if (!f.name.trim()) e.name = "Full name is required.";
    else if (f.name.trim().length < 2) e.name = "Name must be at least 2 characters.";
    if (!f.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address.";
    if (!f.experience.trim()) e.experience = "Years of experience is required.";
    if (!f.location.trim()) e.location = "Location is required.";
    if (!f.linkedin.trim()) e.linkedin = "LinkedIn username is required.";
    if (!f.github.trim()) e.github = "GitHub username is required.";
    else if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/.test(f.github.trim()))
      e.github = "Enter a valid GitHub username.";
    if (f.portfolio.trim() && !/^https?:\/\/.+\..+/.test(f.portfolio.trim()))
      e.portfolio = "Enter a valid URL starting with http:// or https://";
    if (!f.message.trim()) e.message = "Cover letter / message is required.";
    else if (f.message.trim().length < 50) e.message = "Please write at least 50 characters.";
    return e;
  };

  const [role, setRole] = useState(preselect);
  const [submitted, setSubmitted] = useState(false);
  const [openPanel, setOpenPanel] = useState<"how" | "tips" | null>(null);
  const toggle = (panel: "how" | "tips") => setOpenPanel((p) => (p === panel ? null : panel));
  const [form, setForm] = useState<FTFields>({ name: "", email: "", linkedin: "", github: "", portfolio: "", experience: "", location: "", message: "" });
  const [errors, setErrors] = useState<FTErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FTFields | "role", boolean>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FTFields]) {
      const errs = validateFT({ ...form, [name]: value }, role);
      setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FTFields] }));
    }
  };

  const handleBlur = (name: keyof FTFields) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateFT(form, role)[name] }));
  };

  const handleRoleChange = (v: string) => {
    setRole(v);
    setTouched((prev) => ({ ...prev, role: true }));
    setErrors((prev) => ({ ...prev, role: v ? undefined : "Please select a role." }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateFT(form, role);
    setErrors(errs);
    setTouched({ name: true, email: true, linkedin: true, github: true, portfolio: true, experience: true, location: true, message: true, role: true });
    if (Object.keys(errs).length > 0) return;

    setSubmitted(true);
  };

  const inputClass = (field: keyof FTFields) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-150 ${
      errors[field] && touched[field] ? "border-red-400 focus:ring-red-300" : "border-white/20 focus:ring-white/40"
    }`;

  const labelClass = "block text-sm font-semibold text-white mb-1.5";
  const errClass = "mt-1.5 text-xs text-red-300 flex items-center gap-1";

  return (
    <>
      <SEO
        title="Full-time Application | Elyonware Careers"
        description="Submit your full-time job application to Elyonware. Shape the future of software, AI and connected systems with a mission-driven team."
        path="/careers/apply-fulltime"
        noindex
      />
      <Header />
      <main
        className="min-h-screen pt-24 pb-20"
        style={{ background: "radial-gradient(at left top, rgba(255,255,255,0.06) 0%, rgb(14,20,100) 55%)" }}
      >
        <div className="px-4 sm:px-6 md:px-18">

         
          {/* Main card */}
          <div
            className="rounded-3xl border border-white/15 backdrop-blur-2xl p-8 sm:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(10,10,35,0.88) 0%, rgba(30,40,140,0.78) 50%, rgba(60,20,110,0.72) 100%)",
            }}
          >
            <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">

              {/* ── Left: Info ── */}
              <div className="flex flex-col gap-8">
                <div>
                  <h1 className="text-4xl font-black text-white mb-3 leading-tight">
                    Apply for a<br />Full-time Role
                  </h1>
                  <p className="text-white/65 text-sm leading-relaxed">
                    We&apos;re a small, senior-leaning team. Every hire shapes the culture — we take that seriously, and so should you.
                  </p>
                </div>

                {/* How it works — toggle */}
                <div
                  className="rounded-2xl border border-white/20 backdrop-blur-xl overflow-hidden"
                  style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.35) 0%, rgba(168,85,247,0.20) 100%)" }}
                >
                  <button
                    type="button"
                    onClick={() => toggle("how")}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-white font-semibold text-sm tracking-wide">How it works?</span>
                    <svg
                      className={`w-4 h-4 text-white/60 transition-transform duration-200 ${openPanel === "how" ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openPanel === "how" && (
                    <div className="px-5 pb-5 flex flex-col gap-4 border-t border-white/10 pt-4">
                      {STEPS.map((step) => (
                        <div key={step.num} className="flex gap-3">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-[11px] font-bold text-white/70">
                            {step.num}
                          </span>
                          <div>
                            <p className="text-white font-semibold text-sm mb-0.5">{step.title}</p>
                            <p className="text-white/55 text-xs leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tips — toggle */}
                <div
                  className="rounded-2xl border border-white/20 backdrop-blur-xl overflow-hidden"
                  style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.25) 0%, rgba(99,102,241,0.30) 100%)" }}
                >
                  <button
                    type="button"
                    onClick={() => toggle("tips")}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-white font-semibold text-sm tracking-wide">Tips for a strong application</span>
                    <svg
                      className={`w-4 h-4 text-white/60 transition-transform duration-200 ${openPanel === "tips" ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openPanel === "tips" && (
                    <div className="px-5 pb-5 flex flex-col gap-2.5 border-t border-white/10 pt-4">
                      {TIPS.map((tip) => (
                        <div key={tip} className="flex items-start gap-2.5">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                          <p className="text-white/55 text-xs leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* ── Right: Form ── */}
              <div>
                {submitted ? (
                  <div className="p-8 rounded-2xl border border-white/20 bg-white/10 text-center backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h2 className="text-white font-bold text-xl mb-2">Application sent!</h2>
                    <p className="text-white/70 text-sm mb-6">We&apos;ll review your application and respond within 5–7 business days.</p>
                    <Link to="/careers" className="text-sm text-white hover:text-white/80 transition-colors font-medium underline underline-offset-4">
                      Back to Careers
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    {/* Role */}
                    <div>
                      <label className={labelClass}>Role <span className="text-red-300">*</span></label>
                      <CustomSelect value={role} onChange={handleRoleChange} placeholder="Select a role…" options={ROLES} />
                      {errors.role && touched.role && <p className={errClass}><span>⚠</span>{errors.role}</p>}
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name <span className="text-red-300">*</span></label>
                        <input name="name" value={form.name} onChange={handleChange} onBlur={() => handleBlur("name")} placeholder="Juan dela Cruz" className={inputClass("name")} />
                        {errors.name && touched.name && <p className={errClass}><span>⚠</span>{errors.name}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Email Address <span className="text-red-300">*</span></label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={() => handleBlur("email")} placeholder="you@email.com" className={inputClass("email")} />
                        {errors.email && touched.email && <p className={errClass}><span>⚠</span>{errors.email}</p>}
                      </div>
                    </div>

                    {/* Experience & Location */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Years of Experience <span className="text-red-300">*</span></label>
                        <input name="experience" value={form.experience} onChange={handleChange} onBlur={() => handleBlur("experience")} placeholder="e.g. 3 years" className={inputClass("experience")} />
                        {errors.experience && touched.experience && <p className={errClass}><span>⚠</span>{errors.experience}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Location <span className="text-red-300">*</span></label>
                        <input name="location" value={form.location} onChange={handleChange} onBlur={() => handleBlur("location")} placeholder="Manila, Philippines" className={inputClass("location")} />
                        {errors.location && touched.location && <p className={errClass}><span>⚠</span>{errors.location}</p>}
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div>
                      <label className={labelClass}>LinkedIn Profile <span className="text-red-300">*</span></label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none pointer-events-none">linkedin.com/in/</span>
                        <input name="linkedin" value={form.linkedin} onChange={handleChange} onBlur={() => handleBlur("linkedin")} placeholder="yourusername" className={inputClass("linkedin") + " pl-[136px]"} />
                      </div>
                      {errors.linkedin && touched.linkedin && <p className={errClass}><span>⚠</span>{errors.linkedin}</p>}
                    </div>

                    {/* GitHub */}
                    <div>
                      <label className={labelClass}>GitHub Profile <span className="text-red-300">*</span></label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none pointer-events-none">github.com/</span>
                        <input name="github" value={form.github} onChange={handleChange} onBlur={() => handleBlur("github")} placeholder="yourusername" className={inputClass("github") + " pl-[102px]"} />
                      </div>
                      {errors.github && touched.github && <p className={errClass}><span>⚠</span>{errors.github}</p>}
                    </div>

                    {/* Portfolio */}
                    <div>
                      <label className={labelClass}>Portfolio / Website <span className="text-white/60 text-xs font-normal">(optional)</span></label>
                      <input name="portfolio" value={form.portfolio} onChange={handleChange} onBlur={() => handleBlur("portfolio")} placeholder="https://yoursite.com" className={inputClass("portfolio")} />
                      {errors.portfolio && touched.portfolio && <p className={errClass}><span>⚠</span>{errors.portfolio}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass}>Cover Letter / Message <span className="text-red-300">*</span></label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={() => handleBlur("message")}
                        rows={5}
                        placeholder="Tell us about yourself, your experience, and why you want to join Elyonware…"
                        className={inputClass("message") + " resize-none"}
                      />
                      {errors.message && touched.message && <p className={errClass}><span>⚠</span>{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-end gap-4 pt-1">
                      <button
                        type="submit"
                        className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                      >
                        Submit Application
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>

                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function ApplyFulltimePage() {
  return <ApplyForm />;
}
