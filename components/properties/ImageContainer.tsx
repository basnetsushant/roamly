import Image from "next/image";

function ImageContainer({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) {
  return (
    <section className="h-75 md:h-125 relative mt-8">
      <Image
        src={mainImage}
        fill
        sizes="100vw"
        alt={name}
        className="rounded-md object-cover"
        priority
      />
    </section>
  );
}

export default ImageContainer;
