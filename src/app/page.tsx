"use client";

import { useState } from "react";

type Theme = {
  name: string;
  badge: string;
  gradient: string;
  card: string;
  accent: string;
  glow: string;
};

const themes: Theme[] = [
  {
    name: "Aurora",
    badge: "Fresh release",
    gradient: "from-fuchsia-600 via-indigo-600 to-cyan-500",
    card: "bg-white/10 border-white/30",
    accent: "text-cyan-200",
    glow: "shadow-cyan-500/30",
  },
  {
    name: "Sunset",
    badge: "Limited early access",
    gradient: "from-rose-600 via-orange-500 to-amber-400",
    card: "bg-black/20 border-white/20",
    accent: "text-amber-200",
    glow: "shadow-orange-500/30",
  },
  {
    name: "Emerald",
    badge: "Built for creators",
    gradient: "from-emerald-700 via-teal-600 to-sky-500",
    card: "bg-white/10 border-emerald-200/30",
    accent: "text-emerald-100",
    glow: "shadow-emerald-500/30",
  },
];

const highlights = [
  { title: "Fast setup", text: "Go from idea to live page in minutes." },
  { title: "Adaptive design", text: "Looks premium on mobile and desktop." },
  { title: "Launch ready", text: "Built with modern performance defaults." },
];

export default function Home() {
  const [theme] = useState<Theme>(
    () => themes[Math.floor(Math.random() * themes.length)],
  );

  return (
    <main
      className={`min-h-screen bg-gradient-to-br ${theme.gradient} text-white`}
    >
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10">
        <div
          className={`mb-8 inline-flex w-fit rounded-full border px-4 py-2 text-xs font-semibold tracking-widest uppercase backdrop-blur ${theme.card}`}
        >
          {theme.badge}
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Randomly Beautiful Landing Pages for Your Next Big Idea.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
          Every refresh brings a different style. Keep the energy fresh while
          your product message stays clear and conversion-focused.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            className={`rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-xl transition hover:scale-[1.02] ${theme.glow}`}
            type="button"
          >
            Start Building
          </button>
          <button
            className={`rounded-full border px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 ${theme.card}`}
            type="button"
          >
            View Demo
          </button>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl border p-5 backdrop-blur ${theme.card}`}
            >
              <p className={`text-sm font-semibold ${theme.accent}`}>
                {item.title}
              </p>
              <p className="mt-2 text-sm text-white/80">{item.text}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs tracking-widest uppercase text-white/65">
          Current theme: {theme.name}
        </p>
      </section>
    </main>
  );
}
