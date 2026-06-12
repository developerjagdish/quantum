export default function Testimonial() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 px-8 py-8 backdrop-blur-md lg:px-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        {/* Quote */}
        <div className="flex flex-1 items-start gap-5">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="shrink-0 text-violet-bright">
            <path
              d="M0 32V18C0 8 5.5 1.5 15 0L17 4.5C11 6 8 9.5 8 14H15V32H0ZM23 32V18C23 8 28.5 1.5 38 0L40 4.5C34 6 31 9.5 31 14H38V32H23Z"
              fill="currentColor"
            />
          </svg>
          <p className="max-w-md text-[17px] leading-relaxed text-white/80">
            Quantum transformed the way we scale. The performance, reliability,
            and support are unmatched.
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-6 lg:border-l lg:border-white/10 lg:pl-10">
          <div>
            <div className="flex items-center gap-2.5 text-white">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M12 2.5L20.5 7.25V16.75L12 21.5L3.5 16.75V7.25L12 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M12 7L16 9.5V14.5L12 17L8 14.5V9.5L12 7Z" fill="currentColor" />
              </svg>
              <span className="text-[20px] font-semibold lowercase">vertex</span>
            </div>
            <p className="mt-2 text-[14px] text-white/50">CTO, Vertex</p>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-5 lg:ml-auto">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-violet-bright" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-violet text-white shadow-[0_0_20px_-6px_rgba(124,92,255,0.8)] transition-colors hover:bg-violet-bright"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
