"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "../data/profile";
import { HeroIcon } from "../shared/HeroIcon";
import { SparkIcon } from "../shared/Icons";
import { RotatingRole } from "../shared/RotatingRole";

export function HeroSection() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <>
      {/* ── Navbar ───────────────────────────────────────────── */}
      <header className="w-full py-6">
        <div className="flex w-full items-center justify-between">
          <div className="text-[18px] font-medium tracking-[-0.03em] text-slate-100 sm:text-[22px]">
            {profile.name}{" "}
            <span className="mx-2 text-slate-500">-</span>
            <span className="font-normal text-[0.88em]">
              <RotatingRole roles={profile.role} />
            </span>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Theme switch"
            className="grid h-10 w-10 place-items-center rounded-full border border-transparent text-slate-100 transition hover:border-white/15 hover:bg-white/8"
          >
            {theme === "dark" ? (
              // Sun icon (click to go light)
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" />
              </svg>
            ) : (
              // Moon icon (click to go dark)
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── Hero Content ─────────────────────────────────────── */}
      <section className="w-full py-10 sm:py-14">
        <div className="w-full">
          <h1 className="text-2xl text-balance font-medium leading-[1.05] tracking-[-0.055em] sm:text-3xl md:text-4xl lg:text-5xl">
          Backend engineer focused on async systems, scalable APIs, and intelligent applications.
          </h1>

          {/* ── CTA buttons row ──────────────────────────────── */}
          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1A39CgvMXHFjbFYqREnpIlIiEA7okO-RI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn w-full text-center rounded-full border border-white/15 bg-white/6 px-6 py-4 text-[1.05rem] font-medium text-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
            >
              Resume
            </a>

            {/* Get in Touch Button */}
            <Link
              href="#connect"
              className="theme-btn relative w-full text-center rounded-full border border-white/15 bg-white/6 px-6 py-4 text-[1.05rem] font-medium text-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
            >
              Get in Touch
              <span className="absolute right-3 top-[-0.35rem] text-[#bdd6a5]">
                <SparkIcon className="h-7 w-7" />
              </span>
            </Link>

            {/* Availability */}
            <div className="flex items-center justify-center gap-3 text-[1rem] font-medium text-[#12b44b] sm:justify-start sm:text-[1.05rem]">
              <span className="h-2.5 w-2.5 rounded-full bg-current" />
              {profile.availability}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
