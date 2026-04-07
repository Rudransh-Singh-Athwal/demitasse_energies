interface ContentSectionProps {
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
}

export default function ContentSection({
  reverse = false,
  imageSrc,
  imageAlt,
  description,
}: ContentSectionProps) {
  return (
    <section className="py-12 max-w-6xl mx-auto px-6">
      <div className="flex flex-col-reverse md:flow-root">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full h-48 mt-6 rounded-lg object-cover bg-gray-100 dark:bg-gray-800 md:w-80 md:h-56 md:mt-0 md:mb-6 ${reverse ? "md:float-left md:mr-8" : "md:float-right md:ml-8"}`}
        />
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
