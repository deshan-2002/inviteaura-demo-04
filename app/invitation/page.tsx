"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import OrnamentalDivider from "@/components/OrnamentalDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const events = [
  {
    time: "9:30 AM",
    title: "Poruwa Ceremony",
    desc: "Traditional Sri Lankan wedding ceremony with the blessing of our families.",
  },
  {
    time: "12:00 PM",
    title: "Wedding Breakfast",
    desc: "A celebratory breakfast hosted in honour of the newlyweds.",
  },
  {
    time: "6:30 PM",
    title: "Evening Reception",
    desc: "Dinner, dancing and celebrations with the people we love most.",
  },
];

const venues = [
  {
    name: "Earl's Regency Hotel",
    place: "Ceremony & Breakfast",
    address: "10 Rajapihilla Mawatha, Kandy, Sri Lanka",
  },
  {
    name: "The Grand Kandyan",
    place: "Evening Reception",
    address: "88/2 Srimath Kobbekaduwa Mawatha, Kandy, Sri Lanka",
  },
];

function useCountdown(target: string) {
  const [left, setLeft] = useState(() => Math.max(0, new Date(target).getTime() - Date.now()));

  useEffect(() => {
    const id = setInterval(
      () => setLeft(Math.max(0, new Date(target).getTime() - Date.now())),
      1000
    );
    return () => clearInterval(id);
  }, [target]);

  const days = Math.floor(left / 86400000);
  const hours = Math.floor((left % 86400000) / 3600000);
  const minutes = Math.floor((left % 3600000) / 60000);
  const seconds = Math.floor((left % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function InvitationPage() {
  const { days, hours, minutes, seconds } = useCountdown("2026-12-12T09:30:00+05:30");

  return (
    <div className="min-h-screen w-full bg-ivory text-ink">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 border-b border-gold/25 bg-ivory/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase text-maroon transition-colors hover:text-gold"
          >
            &larr; Back
          </Link>
          <span className="font-display text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold">
            A &amp; N
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/BackgroundImage.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/60 via-maroon-deep/40 to-ivory" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[11px] sm:text-sm tracking-[0.4em] uppercase text-gold-light"
          >
            We are getting married
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-3xl sm:text-5xl md:text-6xl tracking-[0.18em] text-ivory font-bold uppercase drop-shadow-[0_4px_14px_rgba(74,14,24,0.45)]"
          >
            Ashen <span className="text-gold-light font-normal">&amp;</span> Nethmi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-body text-base sm:text-xl italic text-ivory/90"
          >
            12th December 2026 &middot; Kandy, Sri Lanka
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid grid-cols-4 gap-2 sm:gap-4"
          >
            {[
              { value: days, label: "Days" },
              { value: hours, label: "Hours" },
              { value: minutes, label: "Minutes" },
              { value: seconds, label: "Seconds" },
            ].map((unit) => (
              <div
                key={unit.label}
                className="flex w-16 flex-col items-center rounded-2xl border border-gold-light/40 bg-ivory/10 px-2 py-3 backdrop-blur-sm sm:w-24 sm:py-4"
              >
                <span className="font-display text-xl font-semibold text-ivory tabular-nums sm:text-3xl">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="mt-1 font-display text-[8px] tracking-[0.25em] uppercase text-gold-light sm:text-[10px]">
                  {unit.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="font-display text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold">
            Schedule
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.12em] uppercase text-maroon font-bold">
            Celebrations of the Day
          </h2>
          <div className="mt-5">
            <OrnamentalDivider />
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col gap-3 rounded-3xl border border-gold/25 bg-white/70 p-5 shadow-[0_10px_35px_-12px_rgba(74,14,24,0.2)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_45px_-12px_rgba(74,14,24,0.3)] sm:flex-row sm:items-center sm:gap-6 sm:p-7"
            >
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full border border-gold/40 bg-maroon text-ivory sm:h-20 sm:w-20">
                <span className="font-display text-[10px] tracking-[0.15em] uppercase sm:text-xs">
                  {event.time.split(" ")[0]}
                </span>
                <span className="font-display text-[8px] tracking-[0.2em] uppercase text-gold-light sm:text-[9px]">
                  {event.time.split(" ")[1]}
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-display text-lg sm:text-xl tracking-[0.08em] uppercase text-maroon font-semibold">
                  {event.title}
                </h3>
                <p className="mt-1.5 font-body text-sm sm:text-base italic text-ink/70">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Venues */}
      <section className="border-y border-gold/20 bg-champagne/50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="font-display text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold">
              Venues
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.12em] uppercase text-maroon font-bold">
              Where We Celebrate
            </h2>
            <div className="mt-5">
              <OrnamentalDivider />
            </div>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            {venues.map((venue, i) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col rounded-3xl border border-gold/25 bg-white/80 p-6 text-center shadow-[0_10px_35px_-12px_rgba(74,14,24,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 sm:p-7"
              >
                <span className="mx-auto font-display text-2xl text-gold">&#10022;</span>
                <h3 className="mt-3 font-display text-lg sm:text-xl tracking-[0.08em] uppercase text-maroon font-semibold">
                  {venue.name}
                </h3>
                <p className="mt-1 font-display text-[10px] tracking-[0.3em] uppercase text-gold">
                  {venue.place}
                </p>
                <p className="mt-3 font-body text-sm italic text-ink/70">{venue.address}</p>
              </motion.div>
            ))}
          </div>

          {/* Dress code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 rounded-3xl border border-gold/25 bg-white/80 px-6 py-6 text-center shadow-[0_10px_35px_-12px_rgba(74,14,24,0.2)] sm:mt-12 sm:px-10 sm:py-8"
          >
            <span className="font-display text-2xl text-gold">&#9874;</span>
            <h3 className="mt-3 font-display text-lg sm:text-xl tracking-[0.12em] uppercase text-maroon font-semibold">
              Dress Code
            </h3>
            <p className="mt-2 font-body text-sm sm:text-base italic text-ink/70">
              Formal attire &middot; Traditional sarees and national dress warmly welcomed
            </p>
          </motion.div>
        </div>
      </section>

      {/* RSVP */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/BackgroundImage.png"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-maroon-deep/75" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="font-display text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold-light">
              Kindly Respond
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl tracking-[0.14em] uppercase text-ivory font-bold">
              We Would Love To See You
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-body text-sm sm:text-base italic text-ivory/85">
              Please confirm your attendance so we can save a place for you at our table of joy.
            </p>

            <button
              type="button"
              className="mt-8 cursor-pointer rounded-full border border-gold-light/70 bg-gradient-to-r from-gold via-gold-light to-gold px-9 py-3 font-display text-[11px] sm:text-xs tracking-[0.26em] uppercase text-maroon-deep font-semibold shadow-[0_10px_30px_-6px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_-6px_rgba(0,0,0,0.5)]"
            >
              RSVP Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-maroon-deep py-10 text-center">
        <p className="font-display text-xl sm:text-2xl tracking-[0.2em] uppercase text-gold-light">
          Ashen <span className="text-ivory">&amp;</span> Nethmi
        </p>
        <p className="mt-3 font-body text-sm italic text-ivory/70">
          With love and gratitude for celebrating our day with us
        </p>
        <p className="mt-4 font-display text-[9px] tracking-[0.35em] uppercase text-ivory/50">
          12 &middot; 12 &middot; 2026 &mdash; Kandy, Sri Lanka
        </p>
      </footer>
    </div>
  );
}
