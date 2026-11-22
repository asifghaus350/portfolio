import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <Reveal className={`flex flex-col ${alignment} gap-3`}>
      <span className="eyebrow flex items-center gap-2">
        <span className="h-px w-6 bg-brand-2/70" />
        {eyebrow}
      </span>
      <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[15px] leading-relaxed text-slate-400">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
