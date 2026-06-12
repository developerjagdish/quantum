type ReviewCardProps = {
  quote: string;
  name: string;
  role: string;
};

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-violet-bright text-[14px] font-semibold text-white ring-1 ring-white/15">
      {initials}
    </span>
  );
}

export default function ReviewCard({ quote, name, role }: ReviewCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
      {/* Quote mark */}
      <svg width="34" height="28" viewBox="0 0 40 32" fill="none" className="text-violet-bright">
        <path
          d="M0 32V18C0 8 5.5 1.5 15 0L17 4.5C11 6 8 9.5 8 14H15V32H0ZM23 32V18C23 8 28.5 1.5 38 0L40 4.5C34 6 31 9.5 31 14H38V32H23Z"
          fill="currentColor"
        />
      </svg>

      <p className="mt-6 flex-1 text-[16px] leading-relaxed text-white/75">
        {quote}
      </p>

      <div className="mt-7 flex items-center gap-3">
        <Avatar name={name} />
        <div>
          <p className="text-[15px] font-semibold text-white">{name}</p>
          <p className="text-[13px] text-white/50">{role}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-1 text-violet-bright">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1L10.06 5.36L14.8 6L11.3 9.26L12.18 14L8 11.66L3.82 14L4.7 9.26L1.2 6L5.94 5.36L8 1Z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
