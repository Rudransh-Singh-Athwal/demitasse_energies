export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50/80 py-12 dark:border-gray-800 dark:bg-[#020e31] sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 text-gray-600 dark:text-gray-300 md:grid-cols-[1.4fr_1fr_1fr] md:items-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
            deMITasse Energies
          </p>
          <p className="max-w-md text-base leading-7 text-gray-600 dark:text-gray-300">
            Building zero-emission, grid-scale power systems for a cleaner and
            more resilient energy future.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
            Contact
          </p>
          <a
            href="mailto:hello@demitasseenergies.com"
            className="block text-base text-gray-700 transition-colors hover:text-black dark:text-gray-200 dark:hover:text-white"
          >
            hello@demitasseenergies.com
          </a>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            Follow project updates and announcements on social media.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
            Social
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://twitter.com/demitasseenergies"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-black dark:border-gray-700 dark:bg-white/5 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/demitasseenergies"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-black dark:border-gray-700 dark:bg-white/5 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://in.linkedin.com/company/demitasse-energies"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-black dark:border-gray-700 dark:bg-white/5 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          &copy; 2026 Rudransh Singh Athwal ( 22BCS088 - NIT Hamirpur). All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
