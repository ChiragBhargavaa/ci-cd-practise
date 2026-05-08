import Link from "next/link";

export default function NewCodePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-700 via-indigo-700 to-sky-600 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-16 sm:px-10">
        <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hello i am the new code
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
