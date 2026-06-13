import Image from "next/image";
import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
};

export function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-sm">
      <div className="aspect-square bg-[var(--brand-sky)]">
        <Image
          src={image}
          width={472}
          height={472}
          alt={`${title} screen in PetVitals`}
          className="h-full w-full object-contain p-6"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-extrabold text-[var(--foreground)]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          {description}
        </p>
        <Link
          href="/features"
          className="mt-5 inline-flex rounded-lg bg-[var(--brand-orange)] px-4 py-2 text-sm font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
