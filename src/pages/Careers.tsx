import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const OPENINGS = [
  {
    id: "ai-ml-engineer-senior",
    title: "Senior AI/ML Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Artificial Intelligence",
    accent: "#a855f7",
    tag: "AI & ML",
    posted: "2 days ago",
    desc: "Lead the design and deployment of machine learning pipelines, computer vision models, and real-time inference systems across our product suite.",
    requirements: [
      "5+ years experience in ML/AI engineering",
      "Proficient in Python, PyTorch or TensorFlow",
      "Experience with MLOps, model serving (TorchServe, Triton)",
      "Familiarity with computer vision and biometric systems",
      "Strong understanding of distributed training and GPU clusters",
    ],
    nice: ["Experience with edge AI / embedded inference", "Contributions to open-source ML projects"],
  },
  {
    id: "ai-ml-engineer-mid",
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Artificial Intelligence",
    accent: "#a855f7",
    tag: "AI & ML",
    posted: "5 days ago",
    desc: "Build and optimise machine learning models for NLP, image recognition and anomaly detection integrated into our cloud and IoT platforms.",
    requirements: [
      "3+ years experience in machine learning",
      "Strong Python skills; experience with scikit-learn, PyTorch or Keras",
      "Solid understanding of data pipelines and feature engineering",
      "Experience deploying models via REST APIs or gRPC",
    ],
    nice: ["Exposure to biometric or facial recognition systems", "Familiarity with AWS SageMaker or GCP Vertex AI"],
  },
  {
    id: "fullstack-engineer",
    title: "Full-Stack Software Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    accent: "#00d4ff",
    tag: "Engineering",
    posted: "1 week ago",
    desc: "Design and build scalable web and mobile applications using modern frameworks, working closely with product and design teams.",
    requirements: [
      "3+ years full-stack development experience",
      "Proficient in React / Next.js and Node.js or similar backend",
      "Experience with PostgreSQL or MongoDB",
      "Comfortable with CI/CD pipelines and cloud deployments",
    ],
    nice: ["Experience with React Native or Flutter", "Prior startup environment experience"],
  },
  {
    id: "iot-engineer",
    title: "IoT & Embedded Systems Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Hardware & IoT",
    accent: "#00d4ff",
    tag: "IoT",
    posted: "3 days ago",
    desc: "Design firmware and embedded software for connected IoT devices, sensors and edge computing systems integrated with our cloud platforms.",
    requirements: [
      "3+ years in embedded systems or IoT development",
      "Proficient in C/C++ for microcontrollers (ESP32, STM32, or similar)",
      "Experience with MQTT, BLE or LoRa communication protocols",
      "Ability to read schematics and collaborate with hardware teams",
    ],
    nice: ["Experience with RTOS (FreeRTOS, Zephyr)", "Familiarity with AWS IoT Core or Azure IoT Hub"],
  },
  {
    id: "intern-ai-ml",
    title: "AI/ML Engineering Intern",
    type: "Internship",
    location: "Remote",
    department: "Artificial Intelligence",
    accent: "#f472b6",
    tag: "Internship",
    posted: "Today",
    desc: "Work alongside senior ML engineers on real-world projects involving computer vision, biometrics and intelligent automation. Gain hands-on experience building and deploying models in production environments.",
    requirements: [
      "Pursuing a degree in CS, Data Science, AI or related field",
      "Basic Python programming and familiarity with ML libraries",
      "Understanding of core ML concepts (regression, classification, neural networks)",
      "Enthusiasm to learn and take ownership of tasks",
    ],
    nice: ["Personal projects or Kaggle competitions", "Experience with Jupyter notebooks and pandas"],
  },
  {
    id: "intern-software",
    title: "Software Development Intern",
    type: "Internship",
    location: "Remote",
    department: "Engineering",
    accent: "#f472b6",
    tag: "Internship",
    posted: "Today",
    desc: "Join our engineering team to build features for our web and mobile products, contributing to real production code from day one.",
    requirements: [
      "Pursuing a degree in Computer Science, Software Engineering or related",
      "Basic knowledge of HTML, CSS and JavaScript",
      "Familiarity with any backend language (Python, Node.js, PHP)",
      "Eagerness to learn modern development practices",
    ],
    nice: ["Any personal or university projects to showcase", "Exposure to React or Next.js"],
  },
];

/* ── Culture sections ─────────────────────────────────── */
const CULTURE_SECTIONS = [
  {
    title: "Work with people just as passionate as you.",
    body: "We come from different backgrounds — developers, engineers, designers, data scientists — but we all care about the same thing: building technology that actually matters. Our team is small, senior-leaning, and genuinely invested in each other's growth.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
    alt: "Team collaborating around a table",
    flip: false,
  },
  {
    title: "Remote-first. Async-friendly. Results-driven.",
    body: "We don't track hours. We track outcomes. Whether you're coding from a café in Cebu or a home office in Manila, what matters is the quality of your work and how you show up for the team. Flexible schedules, zero micromanagement.",
    img: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=900&q=80",
    alt: "Person working remotely on a laptop",
    flip: true,
  },
  {
    title: "Grow fast. Touch everything.",
    body: "At Elyonware, you're not siloed into one corner of the stack. You'll work across AI, cloud, IoT, and digital platforms — sometimes all in the same week. If you're the kind of person who gets excited by breadth, you'll thrive here.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80",
    alt: "Engineers working on hardware and software together",
    flip: false,
  },
];

export default function CareersPage() {
  const fullTime = OPENINGS.filter((o) => o.type === "Full-time");
  const internships = OPENINGS.filter((o) => o.type === "Internship");

  return (
    <>
      <SEO
        title="Careers at Elyonware | Build the Future With Us"
        description="Explore open roles at Elyonware — a fast-moving team building software, AI, IoT and cloud platforms. Remote-friendly, mission-driven, growth-focused."
        path="/careers"
      />
      <Header />
      <main className="min-h-screen bg-[#04060f] pt-24">

        {/* ── Hero ── */}
        <section className="px-4 sm:px-6 md:px-18 py-20 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] max-w-3xl">
            Build the future{" "}
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#5865f2] to-[#a855f7] bg-clip-text text-transparent">
              with us.
            </span>
          </h1>
          <p className="text-white/90 text-lg max-w-xl leading-relaxed">
            We&apos;re a full-spectrum technology company building AI, IoT, cloud and digital platforms.
            Join a small, ambitious team shipping products that matter.
          </p>
        </section>

        {/* ── Culture image sections ── */}
        <section className="px-4 sm:px-6 md:px-18 flex flex-col gap-6 pb-10">
          {CULTURE_SECTIONS.map((s) => (
            <div
              key={s.title}
              className={`flex flex-col ${s.flip ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0 rounded-3xl overflow-hidden border border-white/[0.07] bg-white/[0.02]`}
            >
              {/* Image */}
              <div className="relative lg:w-[52%] h-72 lg:h-auto flex-shrink-0">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight uppercase">
                  {s.title}
                </h2>
                <p className="text-white/90 text-base leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ── Full-time Openings ── */}
        <section className="px-4 sm:px-6 md:px-18 py-16">
          <div className="mb-10">
            <p className="text-[#00d4ff] text-xs font-bold uppercase tracking-widest mb-2">Open Positions</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Full-time Roles</h2>
          </div>
          <div className="flex flex-col gap-5">
            {fullTime.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>

        {/* ── Internships ── */}
        <section className="px-4 sm:px-6 md:px-18 py-16">
          <div className="mb-10">
            <p className="text-[#f472b6] text-xs font-bold uppercase tracking-widest mb-2">Students & Graduates</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Internships</h2>
            <p className="text-white mt-3 text-base">Open to students and recent graduates. Duration: 3–6 months.</p>
          </div>
          <div className="flex flex-col gap-5">
            {internships.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Internship apply CTA */}
          <div className="mt-8 p-7 rounded-3xl border border-[#f472b6]/25 bg-[#f472b6]/5 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white font-bold text-lg">Interested in an internship?</p>
              <p className="text-white mt-1 text-sm">Send your CV and let us know what you&apos;d like to work on.</p>
            </div>
            <a
              href="mailto:contact@elyonware.com?subject=Internship Application"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "#f472b6", boxShadow: "0 0 24px #f472b640" }}
            >
              Apply here
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 sm:px-6 md:px-18 py-20">
          <div className="p-10 rounded-3xl border border-white/[0.08] bg-white/[0.02] text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">Don&apos;t see a fit?</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              We&apos;re always looking for exceptional people. Send us your CV and tell us what you&apos;d build here.
            </p>
            <a
              href="mailto:careers@elyonware.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#5865f2]/60 bg-[#5865f2]/10 text-white font-semibold hover:bg-[#5865f2]/20 transition-all duration-200"
            >
              careers@elyonware.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

function JobCard({ job }: { job: typeof OPENINGS[0] }) {
  return (
    <details
      className="group rounded-3xl overflow-hidden transition-all duration-200"
      style={{ border: `1px solid ${job.accent}22`, background: `${job.accent}08` }}
    >
      <summary className="flex items-center justify-between gap-4 px-7 py-6 cursor-pointer list-none select-none">
        <div className="flex items-center gap-5 min-w-0">
          {/* Accent bar */}
          <div className="flex-shrink-0 w-1 h-10 rounded-full" style={{ background: job.accent }} />
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <p className="text-white font-black text-lg leading-snug">{job.title}</p>
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                style={{ color: job.accent, borderColor: `${job.accent}50`, background: `${job.accent}18` }}
              >
                {job.tag}
              </span>
            </div>
            <p className="text-white text-sm">{job.department} · {job.location} · {job.posted}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <span
            className="hidden sm:block text-xs font-semibold px-3 py-1 rounded-full border"
            style={{ color: job.accent, borderColor: `${job.accent}40`, background: `${job.accent}12` }}
          >
            {job.type}
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-200"
            style={{ background: `${job.accent}20` }}
          >
            <svg className="w-4 h-4" style={{ color: job.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </summary>

      {/* Expanded */}
      <div className="px-7 pb-8 pt-6" style={{ borderTop: `1px solid ${job.accent}18` }}>
        <p className="text-white leading-relaxed mb-8 text-base max-w-3xl">{job.desc}</p>

        <div className="grid sm:grid-cols-2 gap-8 mb-8">
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: job.accent }}
            >
              Requirements
            </h4>
            <ul className="flex flex-col gap-3">
              {job.requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-white">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: job.accent }} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Nice to have</h4>
            <ul className="flex flex-col gap-3">
              {job.nice.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-white">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-40" style={{ background: job.accent }} />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl px-6 py-6" style={{ border: `1px solid ${job.accent}22`, background: `${job.accent}0d` }}>
          <h4 className="text-white font-bold text-base mb-3">How to apply?</h4>
          <p className="text-sm text-white leading-relaxed">
            If you are interested in this role, write to{" "}
            <a href={`mailto:contact@elyonware.com?subject=${job.title} Career`} className="font-bold underline underline-offset-2" style={{ color: job.accent }}>
              contact@elyonware.com
            </a>{" "}
            with a detailed CV highlighting your relevant experience. Please mark &ldquo;<strong>{job.title} Career</strong>&rdquo; in the subject line.
          </p>
        </div>
      </div>
    </details>
  );
}
