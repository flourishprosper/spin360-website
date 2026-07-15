import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Wellness Services | Spin 360 Core Fitness | Glendora",
  description:
    "Beyond the gym — Spin 360 partners with ATP Health to offer medical-grade wellness services including IV therapy, hormone optimization, peptide therapy, medical weight loss, PRP, and more in Glendora, CA.",
};

const services = [
  {
    number: "01",
    title: "Medical Weight Loss",
    body: "Clinically supervised weight loss programs using the latest GLP-1 medications (Semaglutide & Tirzepatide). Real results, real support — not just a diet plan.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop",
  },
  {
    number: "02",
    title: "IV Therapy",
    body: "Replenish, recover, and recharge with customized IV drip formulas. From hydration and energy to immunity and anti-aging — delivered directly to your cells.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80&fit=crop",
  },
  {
    number: "03",
    title: "Peptide Therapy",
    body: "Targeted peptide protocols to support fat loss, muscle recovery, anti-aging, and overall vitality. Advanced science meets personalized care.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80&fit=crop",
  },
  {
    number: "04",
    title: "Hormone Optimization",
    body: "Feel like yourself again. Our hormone balancing programs are designed specifically for women navigating perimenopause, menopause, and hormonal imbalance.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fit=crop",
  },
  {
    number: "05",
    title: "Shockwave Therapy",
    body: "Non-invasive acoustic wave therapy to accelerate tissue healing, reduce chronic pain, and improve mobility. Trusted by professional athletes.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80&fit=crop",
  },
  {
    number: "06",
    title: "PRP Therapy",
    body: "Platelet-Rich Plasma therapy harnesses your body's own healing power to rejuvenate joints, skin, and hair. Natural. Powerful. Proven.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80&fit=crop",
  },
  {
    number: "07",
    title: "Golfer Performance",
    body: "A specialized recovery and performance program built for golfers — addressing mobility, joint health, inflammation, and stamina so you play your best every round.",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80&fit=crop",
  },
  {
    number: "08",
    title: "First Responder Recovery",
    body: "Dedicated wellness and recovery protocols for first responders dealing with physical stress, fatigue, and the long-term demands of the job. You show up for everyone else — let us show up for you.",
    image:
      "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80&fit=crop",
  },
  {
    number: "09",
    title: "NAD+ Therapy",
    body: "Restore cellular energy, sharpen mental clarity, and slow the aging process with NAD+ infusion therapy. One of the most powerful tools in longevity medicine.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&fit=crop",
  },
];

export default function WellnessPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A]">
      {/* Vertical Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-6 flex justify-between">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-px h-full bg-[#1A1A1A]/[0.06]" />
          ))}
        </div>
      </div>

      {/* ── Page Header — Dark ── */}
      <section className="pt-32 pb-24 bg-[#1A1A1A] relative overflow-hidden">
        {/* Decorative cross */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-0 left-1/2 w-px h-full bg-[#F9F8F6]" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#F9F8F6]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-1">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[#F9F8F6]/30"
                style={{ writingMode: "vertical-rl" }}
              >
                ATP Health
              </span>
            </div>
            <div className="col-span-12 md:col-span-9 md:col-start-3">
              <span className="inline-block text-[13px] font-bold tracking-[0.25em] uppercase text-[#1A1A1A] bg-[#D4AF37] px-4 py-1.5 mb-8">
                Advanced Wellness &nbsp;·&nbsp; In Partnership with ATP Health
              </span>
              <h1
                className="font-[family-name:var(--font-playfair)] font-bold leading-[0.88] text-[#F9F8F6] mb-8"
                style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
              >
                Wellness<br />
                <span className="text-[#F9F8F6]/35 italic">Beyond</span><br />
                The Gym
              </h1>
              <p className="text-base text-[#F9F8F6]/55 max-w-md leading-relaxed">
                Spin 360 partners with ATP Health to bring you medical-grade wellness services — right here in Glendora. Optimize your hormones, accelerate recovery, and unlock the next level of your health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-32 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section label */}
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-1">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A]/30"
                style={{ writingMode: "vertical-rl" }}
              >
                Services
              </span>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-3">
              <span className="block text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
                ATP Health Services
              </span>
              <h2
                className="font-[family-name:var(--font-playfair)] font-bold text-[#1A1A1A] leading-[0.92]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Medical-Grade<br />
                <span className="text-[#1A1A1A]/35 italic">Wellness</span>
              </h2>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-12 gap-6">
            {services.map((service) => (
              <div
                key={service.number}
                className="col-span-12 md:col-span-4 group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="border-t border-[#1A1A1A] pt-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A]/35 mb-3 block">
                    {service.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A1A1A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">
                    {service.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote — Dark ── */}
      <section className="py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2 text-center">
              <div className="w-8 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-8 block">
                Total Wellness
              </span>
              <blockquote
                className="font-[family-name:var(--font-playfair)] font-bold text-[#F9F8F6] leading-[1.1] italic"
                style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
              >
                &ldquo;Fitness is just one piece.<br className="hidden md:block" />
                True health is the whole picture.&rdquo;
              </blockquote>
              <div className="w-8 h-px bg-[#D4AF37] mx-auto mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-6">
              <span className="block text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
                Get Started
              </span>
              <h2
                className="font-[family-name:var(--font-playfair)] font-bold text-[#1A1A1A] leading-[0.92] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Ready To<br />
                <span className="text-[#1A1A1A]/35 italic">Optimize</span><br />
                Your Health?
              </h2>
              <p className="text-base text-[#1A1A1A]/55 leading-relaxed max-w-sm mb-10">
                Contact us to learn more about ATP Health services at Spin 360, book a consultation, or ask which program is right for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center h-14 px-10 bg-[#1A1A1A] text-[#F9F8F6] text-[11px] tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500"
                >
                  Book a Consultation
                </a>
                <a
                  href="/"
                  className="inline-flex items-center h-14 px-10 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-[#F9F8F6] transition-all duration-500"
                >
                  Back to Studio
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="grid grid-cols-2 gap-0 border border-[#1A1A1A]/10">
                {[
                  { number: "9", label: "Wellness Services" },
                  { number: "1", label: "Convenient Location" },
                  { number: "100%", label: "Medically Supervised" },
                  { number: "∞", label: "Possibilities" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="border-b border-r border-[#1A1A1A]/10 p-8 last:border-b-0"
                  >
                    <div className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A1A1A] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/35">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1A1A1A] border-t border-[#F9F8F6]/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-4">
              <div className="font-[family-name:var(--font-playfair)] font-bold text-base tracking-[0.08em] text-[#F9F8F6] mb-5">
                SPIN 360 CORE FITNESS
              </div>
              <p className="text-xs text-[#F9F8F6]/40 leading-relaxed max-w-xs">
                Glendora&apos;s premier boutique studio for women who want to feel strong, energetic, and vibrant. Strength training, spin classes, and advanced wellness — since 1998.
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 md:col-start-7">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#F9F8F6]/35 mb-5 block">
                Studio
              </span>
              <ul className="space-y-3">
                {["Spin Classes", "Personal Training", "Strength Training", "Wellness"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={item === "Wellness" ? "/wellness" : "#"}
                        className="text-xs text-[#F9F8F6]/55 hover:text-[#D4AF37] transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="col-span-6 md:col-span-2 md:col-start-10">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#F9F8F6]/35 mb-5 block">
                Visit
              </span>
              <ul className="space-y-3">
                {["Schedule", "About Us", "Contact", "Membership"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-[#F9F8F6]/55 hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#F9F8F6]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] tracking-[0.15em] text-[#F9F8F6]/30">
              © {new Date().getFullYear()} Spin 360 Core Fitness. Glendora, CA.
            </span>
            <div className="flex gap-6">
              {["Instagram", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[10px] tracking-[0.2em] uppercase text-[#F9F8F6]/30 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
