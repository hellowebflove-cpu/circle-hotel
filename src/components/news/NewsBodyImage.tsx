import Image from "next/image";

export default function NewsBodyImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm tracking-[0.48px] text-black/55">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
