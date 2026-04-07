interface ContentSectionProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function ContentSection({
  title,
  content,
  imageSrc,
  imageAlt,
  reverse = false,
}: ContentSectionProps) {
  return (
    <section className="py-12 max-w-6xl mx-auto px-6">
      <div className="flex flex-col-reverse md:flow-root">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full h-48 mt-6 rounded-lg object-cover bg-gray-100 dark:bg-gray-800 md:w-80 md:h-56 md:mt-0 md:mb-6 ${reverse ? "md:float-left md:mr-8" : "md:float-right md:ml-8"}`}
        />
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}
