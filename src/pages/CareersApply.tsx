import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

type InternshipType = "paid" | "ojt" | "unpaid" | "";

const INTERNSHIP_TYPES = [
  {
    id: "paid" as const,
    label: "Paid Internship",
    desc: "You receive a monthly stipend from Elyonware for your work.",
  },
  {
    id: "ojt" as const,
    label: "OJT / Practicum",
    desc: "School-required on-the-job training for academic credit. No stipend — your university recognises this as part of your curriculum.",
  },
  {
    id: "unpaid" as const,
    label: "Unpaid / Volunteer Internship",
    desc: "Self-initiated internship with no compensation. You join purely for the experience, mentorship, and portfolio.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Fill out the form",
    desc: "Choose your internship type and provide your details. Be honest — we value authenticity over perfection.",
  },
  {
    num: "02",
    title: "Send your application",
    desc: "Submitting will open your email client with everything pre-filled. Just hit send.",
  },
  {
    num: "03",
    title: "We review & reach out",
    desc: "We personally review every application and get back to you within 3–5 business days.",
  },
  {
    num: "04",
    title: "Short interview",
    desc: "A casual conversation to get to know you better and align on expectations.",
  },
];

const TIPS = [
  "Be specific about what you want to learn or build.",
  "For paid internships, make sure your GitHub has recent, real projects.",
  "A genuine cover letter matters more than a polished one.",
  "OJT applicants: attach your endorsement letter from your school after we connect.",
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
  options: { id: string; label: string }[];
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
          className={`w-4 h-4 flex-shrink-0 text-white/70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-white/[0.15] bg-[#1e2260] shadow-2xl shadow-black/50 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => { onChange(opt.id); setOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors duration-100
                ${value === opt.id
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

type FormFields = { name: string; email: string; school: string; course: string; github: string; message: string };
type Errors = Partial<Record<keyof FormFields | "internshipType", string>>;

function validate(form: FormFields, internshipType: InternshipType): Errors {
  const e: Errors = {};
  if (!internshipType) e.internshipType = "Please select an internship type.";
  if (!form.name.trim()) e.name = "Full name is required.";
  else if (form.name.trim().length < 2) e.name = "Name must be at least 2 characters.";
  if (!form.email.trim()) e.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
  if (!form.school.trim()) e.school = "School / University is required.";
  if (!form.course.trim()) e.course = "Program / Course is required.";
  if (internshipType === "paid") {
    if (!form.github.trim()) e.github = "GitHub username is required for paid internships.";
    else if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/.test(form.github.trim()))
      e.github = "Enter a valid GitHub username (letters, numbers, hyphens only).";
  }
  if (!form.message.trim()) e.message = "Cover letter / message is required.";
  else if (form.message.trim().length < 50) e.message = "Please write at least 50 characters.";
  return e;
}

export default function ApplyPage() {
  const [internshipType, setInternshipType] = useState<InternshipType>("");
  const [submitted, setSubmitted] = useState(false);
  const [openPanel, setOpenPanel] = useState<"how" | "types" | "tips" | null>(null);
  const toggle = (panel: "how" | "types" | "tips") => setOpenPanel((p) => (p === panel ? null : panel));
  const [form, setForm] = useState<FormFields>({ name: "", email: "", school: "", course: "", github: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields | "internshipType", boolean>>>({});

  const selected = INTERNSHIP_TYPES.find((t) => t.id === internshipType);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormFields]) {
      const updated = { ...form, [name]: value };
      const errs = validate(updated, internshipType);
      setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormFields] }));
    }
  };

  const handleBlur = (name: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(form, internshipType);
    setErrors((prev) => ({ ...prev, [name]: errs[name] }));
  };

  const handleTypeChange = (v: string) => {
    setInternshipType(v as InternshipType);
    setTouched((prev) => ({ ...prev, internshipType: true }));
    setErrors((prev) => ({ ...prev, internshipType: v ? undefined : "Please select an internship type." }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form, internshipType);
    setErrors(errs);
    setTouched({ name: true, email: true, school: true, course: true, github: true, message: true, internshipType: true });
    if (Object.keys(errs).length > 0) return;

    setSubmitted(true);
  };

  const inputClass = (field: keyof FormFields) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-150 ${
      errors[field] && touched[field]
        ? "border-red-400 focus:ring-red-300"
        : "border-white/20 focus:ring-white/40"
    }`;

  const labelClass = "block text-sm font-semibold text-white mb-1.5";
  const errClass = "mt-1.5 text-xs text-red-300 flex items-center gap-1";

  return (
    <>
      <SEO
        title="Internship Application | Elyonware Careers"
        description="Submit your internship application to Elyonware. Join a team building transformative technology and gain hands-on experience across the full stack."
        path="/careers/apply"
        noindex
      />
      <Header />
      <main
        className="min-h-screen pt-24 pb-20"
        style={{
          background:
            "radial-gradient(at left top, rgba(255, 255, 255, 0.08) 0%, rgb(74, 82, 207) 55%)",
        }}
      >
        <div className="px-4 sm:px-6 md:px-18">

         
          {/* ── Main card ── */}
          <div
            className="rounded-3xl border border-white/15 backdrop-blur-2xl p-8 sm:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(15,15,40,0.85) 0%, rgba(49,52,160,0.75) 50%, rgba(88,40,140,0.70) 100%)",
            }}
          >
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">

            {/* ── Left: Instructions ── */}
            <div className="flex flex-col gap-10">
              <div>
                <h1 className="text-4xl font-black text-white mb-3 leading-tight">Apply for an<br />Internship</h1>
                <p className="text-white text-sm leading-relaxed">
                  We review every application personally. Fill in the form honestly — that&apos;s what matters most to us.
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

              {/* Internship types — toggle */}
              <div
                className="rounded-2xl border border-white/20 backdrop-blur-xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.25) 0%, rgba(99,102,241,0.30) 100%)" }}
              >
                <button
                  type="button"
                  onClick={() => toggle("types")}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-white font-semibold text-sm tracking-wide">Types of Internship</span>
                  <svg
                    className={`w-4 h-4 text-white/60 transition-transform duration-200 ${openPanel === "types" ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openPanel === "types" && (
                  <div className="px-5 pb-5 flex flex-col gap-3 border-t border-white/10 pt-4">
                    {INTERNSHIP_TYPES.map((t) => (
                      <div key={t.id} className="p-3 rounded-xl bg-white/10 border border-white/10">
                        <p className="text-white font-semibold text-sm mb-1">{t.label}</p>
                        <p className="text-white/55 text-xs leading-relaxed">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tips — toggle */}
              <div
                className="rounded-2xl border border-white/20 backdrop-blur-xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.20) 0%, rgba(99,102,241,0.25) 100%)" }}
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
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white/60 flex-shrink-0" />
                        <p className="text-white text-xs leading-relaxed">{tip}</p>
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
                  <p className="text-white/70 text-sm mb-6">We&apos;ll review your application and get back to you within 3–5 business days.</p>
                  <Link to="/careers" className="text-sm text-white hover:text-white/80 transition-colors font-medium underline underline-offset-4">
                    Back to Careers
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Internship Type */}
                  <div>
                    <label className={labelClass}>Internship Type <span className="text-red-300">*</span></label>
                    <CustomSelect
                      value={internshipType}
                      onChange={handleTypeChange}
                      placeholder="Select internship type…"
                      options={INTERNSHIP_TYPES}
                    />
                    {selected && <p className="text-white/70 text-xs mt-2 leading-relaxed pl-1">{selected.desc}</p>}
                    {errors.internshipType && touched.internshipType && (
                      <p className={errClass}><span>⚠</span>{errors.internshipType}</p>
                    )}
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

                  {/* School & Course */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>School / University <span className="text-red-300">*</span></label>
                      <input name="school" value={form.school} onChange={handleChange} onBlur={() => handleBlur("school")} placeholder="University of Santo Tomas" className={inputClass("school")} />
                      {errors.school && touched.school && <p className={errClass}><span>⚠</span>{errors.school}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Program / Course <span className="text-red-300">*</span></label>
                      <input name="course" value={form.course} onChange={handleChange} onBlur={() => handleBlur("course")} placeholder="BS Computer Science" className={inputClass("course")} />
                      {errors.course && touched.course && <p className={errClass}><span>⚠</span>{errors.course}</p>}
                    </div>
                  </div>

                  {/* GitHub — paid only */}
                  {internshipType === "paid" && (
                    <div>
                      <label className={labelClass}>
                        GitHub Profile <span className="text-red-300">*</span>
                        <span className="ml-2 text-xs text-white/70 font-normal">Required for paid internships</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none pointer-events-none">
                          github.com/
                        </span>
                        <input
                          name="github"
                          value={form.github}
                          onChange={handleChange}
                          onBlur={() => handleBlur("github")}
                          placeholder="yourusername"
                          className={inputClass("github") + " pl-[102px]"}
                        />
                      </div>
                      {errors.github && touched.github
                        ? <p className={errClass}><span>⚠</span>{errors.github}</p>
                        : <p className="text-white/70 text-xs mt-1.5 pl-1">We review your public repositories as part of the evaluation.</p>
                      }
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label className={labelClass}>Cover Letter / Message <span className="text-red-300">*</span></label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur("message")}
                      rows={5}
                      placeholder="Tell us about yourself, your goals, and why you want to intern at Elyonware…"
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
          </div>{/* end card */}
        </div>
      </main>
      <Footer />
    </>
  );
}
