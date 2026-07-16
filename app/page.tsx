import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

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
        <div className="mt-10">
          <Button variant="primary">Get Started</Button>
        </div>
      </section>

      <section className="px-6 pb-32 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card>
          <h3 className="text-lg font-semibold">Fast</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Every site is built for speed from the ground up.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Modern</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Clean, premium design inspired by the best in the industry.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Reusable</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Built once, deployed for every future client in hours.
          </p>
        </Card>
      </section>
    </main>
  );
}