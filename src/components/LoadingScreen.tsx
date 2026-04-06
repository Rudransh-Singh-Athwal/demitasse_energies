export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 px-6 transition-colors dark:bg-[#020e31]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-sky-700 md:text-5xl dark:text-[#5ea2ff]">
          deMITasse Energies
        </h1>
        <div className="mt-8 flex items-center justify-center gap-3 text-xl text-slate-500 md:text-2xl dark:text-slate-400">
          <span>Loading</span>
          <span
            className="inline-block h-7 w-7 animate-spin rounded-full border-[3px] border-slate-400 border-t-transparent dark:border-slate-500 dark:border-t-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
