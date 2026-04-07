import image1 from "../assets/image1.webp";

interface ContentSectionProps {
  reverse?: boolean;
}

export default function ContentSection({
  reverse = false,
}: ContentSectionProps) {
  return (
    <section className="py-12 max-w-6xl mx-auto px-6">
      <div className="flex flex-col-reverse md:flow-root">
        <img
          src={image1}
          alt="deMITasse Energies zero-emission engine technology"
          className={`w-full h-48 mt-6 rounded-lg object-cover bg-gray-100 dark:bg-gray-800 md:w-80 md:h-56 md:mt-0 md:mb-6 ${reverse ? "md:float-left md:mr-8" : "md:float-right md:ml-8"}`}
        />
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          At deMITasse Energies, we are pioneering the future of clean
          technology by building efficient, reliable, and inexpensive
          zero-emission power plants. Our core innovation lies in an in-house
          developed, closed-loop, non-combusting thermodynamic cycle that
          operates using proprietary working fluids and catalytic processes.
          This advanced engine design generates power with exceptional thermal
          efficiency while maintaining absolute zero emissions. Furthermore, our
          technology uniquely solves the challenge of renewable energy
          volatility by enabling long-duration, grid-scale energy storage. By
          storing energy thermochemically, we overcome the brief storage
          capacity of standard lithium-ion batteries, allowing energy to be
          retained for months with negligible losses and at a fraction of
          current costs. From capturing industrial waste heat to powering
          advanced marine propulsion and submarine systems, we provide the
          essential infrastructure required to make the global transition to
          renewable energy both sustainable and economical.
        </p>
      </div>
    </section>
  );
}
