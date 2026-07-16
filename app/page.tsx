export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          We build websites that feel premium.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          This is our reusable framework — the foundation every client site will be built from.
        </p>
        <button className="mt-10 rounded-full bg-accent px-6 py-3 text-white font-medium hover:opacity-90 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}