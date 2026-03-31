export default function Loading() {
  return (
    <main className="bg-background flex-1">
      <section className="relative min-h-[540px] overflow-hidden lg:min-h-[716px]">
        <div className="absolute inset-0 animate-pulse bg-black/5" />
      </section>
      <div className="layout-shell section-space space-y-10">
        <div className="mx-auto h-10 w-56 animate-pulse rounded-full bg-black/5" />
        <div className="grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-[381/480] animate-pulse rounded-[10px] bg-black/5" />
              <div className="mx-auto h-5 w-20 animate-pulse rounded-full bg-black/5" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="overflow-hidden">
              <div className="aspect-[285/301] animate-pulse bg-black/5" />
              <div className="bg-surface space-y-3 p-4">
                <div className="h-6 w-2/3 animate-pulse rounded-full bg-black/5" />
                <div className="h-4 w-full animate-pulse rounded-full bg-black/5" />
                <div className="h-5 w-1/2 animate-pulse rounded-full bg-black/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
