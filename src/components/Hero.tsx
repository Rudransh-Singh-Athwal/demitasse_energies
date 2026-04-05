import hero_image from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center">
      <img
        src={hero_image}
        alt="deMITasse Energies thermodynamic engine facility"
        className="w-full h-64 md:h-96 object-cover bg-gray-200 dark:bg-gray-800 rounded-xl mb-8"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Pioneering Zero-Emission Grid-Scale Power
      </h1>
    </section>
  );
}
