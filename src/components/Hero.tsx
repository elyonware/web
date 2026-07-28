import HeroBg from "@/components/HeroBg";

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden px-4 sm:px-6 md:px-18 py-20 text-center flex flex-col items-center">
      <HeroBg />
      <h1 className="relative z-10 text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] max-w-3xl">
        Build the future.{" "}
        <span className="">
          Define{" "}
        </span>
        <span className="bg-gradient-to-r from-[#00d4ff] via-[#5865f2] to-[#a855f7] bg-clip-text text-transparent">
          What's Next.
        </span>
      </h1>
      <p className="relative z-10 text-white/90 text-lg max-w-xl leading-relaxed">
        Enterprise AI, cloud, IoT, and software engineered to help businesses
        lead with confidence.
      </p>
    </section>
  );
}
