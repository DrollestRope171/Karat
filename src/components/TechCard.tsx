interface TechCardProps {
  imageSrc: string
  title: string
  description: string
  imgClass?: string
}

export function TechCard({ imageSrc, title, description, imgClass }: TechCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-radius-card bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8">
      <div className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-radius-card-sm bg-bg-secondary p-5 md:p-6">
        <img
          src={imageSrc}
          alt={title}
          className={`max-h-full max-w-full object-contain ${imgClass ?? ''}`}
          loading="lazy"
        />
      </div>
      <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </article>
  )
}
