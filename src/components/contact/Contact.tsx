import Image from "next/image";
import ContactMethods from "./ContactMethods";
import Footer from "./Footer";
import Reveal from "@/components/anim/Reveal";

const inputClass =
  "w-full rounded-xl border border-white/12 bg-white/5 px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:border-violet/50 focus:outline-none";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      {/* Background */}
      <Image
        src="/photo/contact.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover object-left"
      />
      <div className="pointer-events-none absolute inset-0 bg-background/50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — heading + form */}
          <Reveal as="div" stagger>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-violet-bright">
                <path d="M7 1V13M1 7H13M2.8 2.8L11.2 11.2M11.2 2.8L2.8 11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85">
                Get in Touch
              </span>
            </div>

            <h2 className="mt-7 text-[44px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[50px]">
              Let&apos;s build the
              <br />
              future, <span className="text-violet-bright">together.</span>
            </h2>

            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/65">
              Have questions or want to learn more? Our team is here to help you
              succeed.
            </p>

            <form className="mt-10 flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="First name" className={inputClass} />
                <input type="text" placeholder="Last name" className={inputClass} />
              </div>
              <input type="email" placeholder="Work email" className={inputClass} />
              <textarea placeholder="Message" rows={5} className={`${inputClass} resize-none`} />
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-violet-bright to-violet px-6 py-4 text-[16px] font-medium text-white shadow-[0_8px_30px_-6px_rgba(124,92,255,0.7)] transition-all hover:shadow-[0_8px_40px_-4px_rgba(124,92,255,0.9)]"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </Reveal>

          {/* Right — contact methods */}
          <div className="lg:pt-20">
            <ContactMethods />
          </div>
        </div>

        {/* Footer */}
        <Reveal className="mt-24">
          <Footer />
        </Reveal>
      </div>
    </section>
  );
}
