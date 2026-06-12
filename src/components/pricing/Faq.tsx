import Link from "next/link";

const faqs = [
  {
    q: "What is Quantum?",
    a: "Quantum is an AI-powered growth infrastructure platform that helps companies build, deploy, and scale without limits.",
  },
  {
    q: "How does the free trial work?",
    a: "Start with a 14-day free trial on any paid plan. No credit card required, and you can cancel anytime.",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes. You can change your plan at any time and the difference is prorated automatically.",
  },
  {
    q: "Is my data secure?",
    a: "Your data is protected with advanced encryption, isolation, and enterprise-grade compliance built in.",
  },
];

export default function Faq() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-md lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-violet-bright">
            FAQ
          </p>
          <h3 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight text-white">
            Everything you need to know.
          </h3>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/55">
            Find answers to common questions or reach out to our team.
          </p>
          <Link
            href="#faqs"
            className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-violet-bright transition-colors hover:text-white"
          >
            View all FAQs
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Right — accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-white/10 bg-white/[0.02] px-6 py-4 transition-colors open:bg-white/[0.04]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium text-white marker:hidden">
                {faq.q}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-white/60 transition-transform group-open:rotate-45">
                  <path d="M9 3.5V14.5M3.5 9H14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-white/55">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
