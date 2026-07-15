"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F6]/95 backdrop-blur-sm border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-playfair)] font-bold text-base tracking-[0.08em] text-[#1A1A1A]"
          >
            SPIN 360
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[("Classes"), ("Training"), ("Schedule"), ("About"), ("Contact")].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#D4AF37] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="/wellness"
              className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#D4AF37] transition-colors duration-300"
            >
              Wellness
            </a>
          </div>

          {/* CTA */}
          <a
            href="#"
            className="hidden md:inline-flex items-center h-10 px-8 bg-[#D4AF37] text-[#1A1A1A] text-[13px] font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-[#F9F8F6] transition-all duration-500"
          >
            Book Now
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          >
            <span
              className={`block w-full h-px bg-[#1A1A1A] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-[#1A1A1A] transition-all duration-300 ${
                menuOpen ? "opacity-0 w-full" : "w-3/4"
              }`}
            />
            <span
              className={`block w-full h-px bg-[#1A1A1A] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#1A1A1A]/10 bg-[#F9F8F6] px-6 py-8 flex flex-col gap-6">
            {["Classes", "Training", "Schedule", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="/wellness"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
            >
              Wellness
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#D4AF37] text-[#1A1A1A] text-[13px] font-bold tracking-[0.2em] uppercase mt-2"
            >
              Book Now
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end pb-24 pt-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.wixstatic.com/media/183ae4_395647fc60f149559817237b8b26bacb~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85/183ae4_395647fc60f149559817237b8b26bacb~mv2.jpg"
            alt="Spin 360 Core Fitness studio"
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-[#F9F8F6]/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-9">
              <span className="inline-block text-[13px] font-bold tracking-[0.25em] uppercase text-[#1A1A1A] bg-[#D4AF37] px-4 py-1.5 mb-8">
                Glendora&apos;s Premier Boutique Studio &nbsp;·&nbsp; Est. 1998
              </span>
              <h1
                className="font-[family-name:var(--font-playfair)] font-bold leading-[0.88] text-[#1A1A1A] mb-10"
                style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
              >
                Strong<br />
                <span className="text-[#1A1A1A]/40 italic">Confident</span><br />
                Vibrant
              </h1>
              <p className="text-base text-[#1A1A1A]/60 max-w-sm leading-relaxed mb-10">
                Strength training and spin classes designed for women 35+ who want to feel powerful, energetic, and unstoppable — for life.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center h-14 px-10 bg-[#1A1A1A] text-[#F9F8F6] text-[11px] tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500"
                >
                  Start Your Journey
                </a>
                <a
                  href="#"
                  className="inline-flex items-center h-14 px-10 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-[#F9F8F6] transition-all duration-500"
                >
                  View Schedule
                </a>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute right-6 bottom-0 hidden md:flex flex-col items-center gap-3">
            <div className="w-px h-16 bg-[#1A1A1A]/20" />
            <span
              className="text-[9px] tracking-[0.3em] uppercase text-[#1A1A1A]/30"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* ── Mission — Dark ── */}
      <section className="bg-[#1A1A1A] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-12 md:col-span-1">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[#F9F8F6]/30"
                style={{ writingMode: "vertical-rl" }}
              >
                01 / Mission
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <span className="block text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6">
                Strength &amp; Vitality
              </span>
              <h2
                className="font-[family-name:var(--font-playfair)] font-bold text-[#F9F8F6] leading-[0.92] mb-8"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                Fitness Built<br />
                For The <span className="text-[#F9F8F6]/40 italic">Life</span><br />
                You Deserve
              </h2>
              <p className="text-base text-[#F9F8F6]/55 max-w-lg leading-relaxed">
                At Spin 360 Core Fitness, we believe your best years are ahead of you. Our expert team specializes in helping women 35+ build real strength, increase energy, and reclaim their confidence — one class at a time. You belong here.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-12 gap-0 border-t border-[#F9F8F6]/10 pt-12">
            {[
              { number: "1998", label: "Founded" },
              { number: "25+", label: "Years of Excellence" },
              { number: "4×", label: "Voted Best Studio" },
              { number: "∞", label: "Transformations" },
            ].map((stat, i) => (
              <div
                key={i}
                className="col-span-6 md:col-span-3 border-l border-[#F9F8F6]/10 pl-8 py-6"
              >
                <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#F9F8F6] mb-2">
                  {stat.number}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#F9F8F6]/35">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The 360 Experience ── */}
      <section className="py-32 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-1">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A]/30"
                style={{ writingMode: "vertical-rl" }}
              >
                02 / Experience
              </span>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-3">
              <h2
                className="font-[family-name:var(--font-playfair)] font-bold text-[#1A1A1A] leading-[0.92] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                The 360<br />Experience
              </h2>
              <p className="text-base text-[#1A1A1A]/55 leading-relaxed max-w-md">
                The 360 Experience is built for women who are ready to invest in themselves. Whether you&apos;re stepping into your strength for the first time or leveling up, our community will meet you exactly where you are.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-12 gap-6">
            {[
              {
                number: "01",
                title: "Strength Training",
                body: "Purpose-built for women 35+. Our small-group strength classes help you build lean muscle, protect your bones, boost your metabolism, and feel powerful in your body — every single day.",
                image:
                  "https://images.unsplash.com/photo-1517963879433-6ad2a56b25b8?w=800&q=80&fit=crop",
              },
              {
                number: "02",
                title: "Spin Classes",
                body: "High-energy cardio that&apos;s actually fun. Our spin classes burn fat, boost heart health, and flood your body with endorphins. Ride to music that moves you and leave feeling like a force of nature.",
                image:
                  "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&q=80&fit=crop",
              },
              {
                number: "03",
                title: "Personal Training",
                body: "Your goals, your pace, your program. Our expert trainers design sessions around your body and your life — moving you closer to feeling your strongest, most energetic self.",
                image:
                  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&fit=crop",
              },
            ].map((service) => (
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

      {/* ── Motto — Dark ── */}
      <section className="py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2 text-center">
              <div className="w-8 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-8 block">
                Our Motto
              </span>
              <blockquote
                className="font-[family-name:var(--font-playfair)] font-bold text-[#F9F8F6] leading-[1.1] italic"
                style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
              >
                &ldquo;If it doesn&apos;t challenge you,<br className="hidden md:block" />
                it doesn&apos;t change you.&rdquo;
              </blockquote>
              <div className="w-8 h-px bg-[#D4AF37] mx-auto mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Commitment ── */}
      <section className="py-32 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Image */}
            <div className="col-span-12 md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80&fit=crop"
                  alt="Inner athlete"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Text */}
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A]/35 mb-6 block"
              >
                03 / Commitment
              </span>
              <h2
                className="font-[family-name:var(--font-playfair)] font-bold text-[#1A1A1A] leading-[0.92] mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Your Strongest<br />
                Self<br />
                <span className="text-[#1A1A1A]/35 italic">Starts Here</span>
              </h2>
              <p className="text-base text-[#1A1A1A]/55 leading-relaxed mb-10 max-w-sm">
                Spin 360 was built for women who refuse to let age define their limits. Our warm, supportive community will push you, celebrate you, and keep you coming back. This is where quality of life gets built.
              </p>

              {/* Awards */}
              <div className="space-y-0">
                {[
                  "Voted Best Boutique Studio — Spinning",
                  "Voted Best — Personal Training",
                  "Voted Best — Small Group Strength",
                  "Voted Best — Nutrition Programs",
                ].map((award, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 border-b border-[#1A1A1A]/10 py-4"
                  >
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] flex-shrink-0" />
                    <span className="text-[11px] tracking-[0.15em] uppercase text-[#1A1A1A]/65">
                      {award}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join CTA — Dark ── */}
      <section className="py-40 bg-[#1A1A1A] relative overflow-hidden">
        {/* Decorative cross */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-0 left-1/2 w-px h-full bg-[#F9F8F6]" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#F9F8F6]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="w-8 h-px bg-[#D4AF37] mx-auto mb-8" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6 block">
            04 / Join Us
          </span>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold text-[#F9F8F6] leading-[0.88] mb-8"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
          >
            Ready To<br />Feel Stronger?
          </h2>
          <p className="text-base text-[#F9F8F6]/55 max-w-sm mx-auto mb-12 leading-relaxed">
            Your community is waiting. Take the first step toward a stronger, more vibrant life — and we&apos;ll be right there with you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center h-14 px-12 bg-[#D4AF37] text-[#1A1A1A] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#F9F8F6] transition-all duration-500"
            >
              Start Your Journey
            </a>
            <a
              href="#"
              className="inline-flex items-center h-14 px-12 border border-[#F9F8F6]/25 text-[#F9F8F6] text-[11px] tracking-[0.2em] uppercase hover:border-[#F9F8F6] hover:bg-[#F9F8F6]/8 transition-all duration-500"
            >
              View Schedule
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1A1A1A] border-t border-[#F9F8F6]/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 mb-12">
            {/* Brand */}
            <div className="col-span-12 md:col-span-4">
              <div className="font-[family-name:var(--font-playfair)] font-bold text-base tracking-[0.08em] text-[#F9F8F6] mb-5">
                SPIN 360 CORE FITNESS
              </div>
              <p className="text-xs text-[#F9F8F6]/40 leading-relaxed max-w-xs">
                Glendora&apos;s premier boutique studio for women who want to feel strong, energetic, and vibrant. Strength training, spin classes, and personal training — since 1998.
              </p>
            </div>

            {/* Links — Studio */}
            <div className="col-span-6 md:col-span-2 md:col-start-7">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#F9F8F6]/35 mb-5 block">
                Studio
              </span>
              <ul className="space-y-3">
                {["Spin Classes", "Personal Training", "Strength Training", "Nutrition"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-xs text-[#F9F8F6]/55 hover:text-[#D4AF37] transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Links — Visit */}
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

          {/* Bottom Bar */}
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
