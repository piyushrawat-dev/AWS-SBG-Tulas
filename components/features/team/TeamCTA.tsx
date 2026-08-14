"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
  Globe,
  Award,
  CheckCircle2,
  Terminal,
} from "lucide-react";

const PERKS = [
  {
    icon: Trophy,
    title: "Official Certificate & Badge",
    desc: "Recognized AWS student leader credentials",
    color: "text-amber-300",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Zap,
    title: "Free AWS Cloud Credits",
    desc: "Hands-on cloud sandbox & skill labs",
    color: "text-cyan-300",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Globe,
    title: "Priority Hackathon Passes",
    desc: "Exclusive access to regional cloud conferences",
    color: "text-purple-300",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Award,
    title: "Direct Expert Mentorship",
    desc: "Learn from certified AWS builders and alumni",
    color: "text-emerald-300",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

export function TeamCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
    layoutEffect: false,
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={ref} style={{ position: "relative" }} className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-content mx-auto relative">
      <motion.div
        style={{ y, opacity }}
        className="relative rounded-3xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/15 via-bg-card to-bg-surface backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(124,58,237,0.35)]"
      >
        {/* Ambient background glow orbs */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px]" />

        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(to right, rgba(167,139,250,1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Main Content Container */}
        <div className="relative z-10 p-6 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column — Text & Benefits */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/35 text-[11px] font-mono text-primary-light tracking-wide shadow-[0_0_15px_-3px_rgba(168,85,247,0.4)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIMITED SLOTS · COHORT 2026 RECRUITMENT</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-text-primary tracking-tight leading-[1.1]">
              Your seat on the{" "}
              <span className="bg-gradient-to-r from-primary-light via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                2026 Core Team
              </span>{" "}
              starts here.
            </h2>

            {/* Body Description */}
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join the student team driving cloud workshops, hackathons, and certifications at Tula&apos;s University. No prior cloud experience required — we build you from the ground up.
            </p>

            {/* Perks 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left">
              {PERKS.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all"
                  >
                    <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${perk.bg}`}>
                      <Icon className={`w-4 h-4 ${perk.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-text-primary">
                        {perk.title}
                      </h4>
                      <p className="text-[11px] text-text-secondary mt-0.5 leading-snug">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full">
              <Link
                href="/register"
                className="group relative px-8 py-4 rounded-2xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-[0_0_30px_-5px_rgba(124,58,237,0.7)] hover:shadow-[0_0_40px_-5px_rgba(124,58,237,0.9)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>Submit Builder Application</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#wings"
                className="px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.10] hover:border-white/[0.22] hover:bg-white/[0.06] text-text-secondary hover:text-text-primary font-semibold text-sm transition-all duration-200 text-center"
              >
                View 6 Builder Wings
              </a>
            </div>

          </div>

          {/* Right Column — Holographic Induction Boarding Pass Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-sm rounded-3xl border border-white/[0.14] bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7),0_0_35px_-10px_rgba(124,58,237,0.3)] overflow-hidden"
            >
              {/* Glowing top line accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-light to-transparent" />

              {/* Pass Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-primary/25 border border-primary/40 flex items-center justify-center text-primary-light">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-display font-bold tracking-wider text-white">
                      AWS STUDENT BUILDERS
                    </div>
                    <div className="text-[9px] font-mono text-muted">
                      COHORT 2026 PASS
                    </div>
                  </div>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold">
                  LIVE RECRUITMENT
                </span>
              </div>

              {/* Pass Body Content */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-purple-600/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-primary-light" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted">
                      Application Status
                    </p>
                    <p className="text-sm font-bold font-display text-text-primary tracking-tight mt-0.5">
                      All 6 Wings Hiring
                    </p>
                    <p className="text-[11px] text-text-secondary mt-0.5">
                      1st to 4th Year · All Branches
                    </p>
                  </div>
                </div>

                {/* Checklist Badges */}
                <div className="space-y-2 text-xs font-mono text-text-secondary">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Zero Prerequisites or Certs Required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>3–5 Hours / Week Event Sprints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Cloud Sandbox & Skill Labs</span>
                  </div>
                </div>

                {/* Pass ID strip */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-muted">
                  <span>SLOT: 2026-TULAS-SBG</span>
                  <span className="text-primary-light">FAST 1-MIN APPLY</span>
                </div>

                {/* Decorative barcode */}
                <div className="text-center pt-1 select-none">
                  <span className="font-mono tracking-[0.3em] text-white/20 text-xs">
                    ||||| || |||||| |||| |||||
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
