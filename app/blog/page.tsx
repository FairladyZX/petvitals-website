import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "PetVitals blog posts about pet care, health, reminders, and pet stories.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="PetVitals Blog"
        description="Helpful pet care notes, health reminders, and stories for pet owners who care."
      />
      <section className="container-px py-20">
        <div className="mx-auto max-w-6xl">
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              className="grid overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-sm md:grid-cols-2"
            >
              <Image
                src={featured.image || "/assets/8b2d48d6-a62a-4ad0-a543-444579bc9933.png"}
                width={featured.imageWidth ?? 900}
                height={featured.imageHeight ?? 520}
                alt={featured.imageAlt || featured.title}
                className="h-full min-h-80 w-full object-cover"
                unoptimized
              />
              <div className="p-8 sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand-orange)]">
                  Featured
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  {featured.excerpt}
                </p>
                <p className="mt-6 text-sm font-semibold text-[var(--brand-blue-dark)]">
                  {formatDate(featured.date)} · {featured.minutesToRead} min read
                </p>
              </div>
            </Link>
          ) : null}

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Image
                  src={post.image || "/assets/PetVitalsLogo-2.png"}
                  width={post.imageWidth ?? 600}
                  height={post.imageHeight ?? 360}
                  alt={post.imageAlt || post.title}
                  className="h-52 w-full object-cover"
                  unoptimized
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-orange)]">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="mt-3 text-xl font-extrabold leading-tight">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
