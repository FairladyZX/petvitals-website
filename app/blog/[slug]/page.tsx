import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function imageSlots(paragraphCount: number, imageCount: number) {
  if (!paragraphCount || !imageCount) return new Map<number, number[]>();

  const slots = new Map<number, number[]>();
  for (let index = 0; index < imageCount; index += 1) {
    const paragraphIndex = Math.max(
      0,
      Math.min(
        paragraphCount - 1,
        Math.round(((index + 1) * paragraphCount) / (imageCount + 1)) - 1,
      ),
    );

    const current = slots.get(paragraphIndex) ?? [];
    current.push(index);
    slots.set(paragraphIndex, current);
  }

  return slots;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const distributedImages = imageSlots(
    post.content.length,
    post.inlineImages?.length ?? 0,
  );

  return (
    <main>
      <article>
        <header className="container-px bg-gradient-to-b from-white to-[var(--brand-sky)] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--brand-orange)]">
              {formatDate(post.date)} · {post.minutesToRead} min read
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {post.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              {post.excerpt}
            </p>
          </div>
        </header>

        <section className="container-px py-12">
          <div className="mx-auto max-w-4xl">
            <Image
              src={post.image || "/assets/8b2d48d6-a62a-4ad0-a543-444579bc9933.png"}
              width={post.imageWidth ?? 1200}
              height={post.imageHeight ?? 675}
              alt={post.imageAlt || post.title}
              className="mx-auto max-h-[520px] max-w-full rounded-lg object-contain shadow-sm"
              priority
              unoptimized
            />
          </div>
        </section>

        <section className="container-px pb-20">
          <div className="mx-auto max-w-3xl rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm sm:p-10">
            {post.content.map((paragraph, paragraphIndex) => (
              <div key={`${paragraphIndex}-${paragraph.slice(0, 24)}`}>
                <p className="mb-6 text-base leading-8 text-[var(--muted)]">
                  {paragraph}
                </p>
                {distributedImages.get(paragraphIndex)?.map((imageIndex) => {
                  const image = post.inlineImages?.[imageIndex];
                  if (!image) return null;

                  return (
                    <figure
                      key={image.src}
                      className="my-8 overflow-hidden rounded-lg bg-[var(--brand-sky)]"
                    >
                      <Image
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                        className="mx-auto h-auto max-w-full object-contain"
                        unoptimized
                      />
                    </figure>
                  );
                })}
              </div>
            ))}
            <div className="mt-10 rounded-lg bg-[var(--brand-sky)] p-6">
              <h2 className="text-2xl font-extrabold">Try PetVitals</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Keep your pet's routines, reminders, records, and notes in one
                organized place.
              </p>
              <AppStoreButtons className="mt-5" />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
