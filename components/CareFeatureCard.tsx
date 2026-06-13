import Image from "next/image";

type CareFeatureCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export function CareFeatureCard({
  title,
  description,
  image,
  alt,
}: CareFeatureCardProps) {
  return (
    <article className="group rounded-lg border border-white/80 bg-white/95 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[var(--brand-sky)] ring-1 ring-[var(--line)] sm:size-24">
        <Image
          src={image}
          width={96}
          height={96}
          alt={alt}
          className="size-14 object-contain mix-blend-multiply transition duration-200 group-hover:scale-105 sm:size-16"
        />
      </div>
      <div className="mx-auto mt-5 h-0.5 w-12 rounded-full bg-[var(--brand-orange)]" />
      <h3 className="mt-5 text-center text-lg font-extrabold text-[var(--foreground)]">
        {title}
      </h3>
      <p className="mt-3 text-center text-sm leading-6 text-[var(--muted)]">
        {description}
      </p>
    </article>
  );
}
