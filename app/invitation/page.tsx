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

const WEDDING_DATE = "2026-12-12T09:30:00+05:30";

/* ---------------- Countdown ---------------- */
function useCountdown(target: string) {
  const [left, setLeft] = useState(() =>
    Math.max(0, new Date(target).getTime() - Date.now())
  );

  useEffect(() => {
    const id = setInterval(
      () => setLeft(Math.max(0, new Date(target).getTime() - Date.now())),
      1000
    );
    return () => clearInterval(id);
  }, [target]);

  return {
    days: Math.floor(left / 86400000),
    hours: Math.floor((left % 86400000) / 3600000),
    minutes: Math.floor((left % 3600000) / 60000),
    seconds: Math.floor((left % 60000) / 1000),
  };
}

/* ---------------- Shared section heading ---------------- */
function SectionHeading({
  label,
  title,
  light = false,
}: {
  label: string;
  title: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      className="text-center"
    >
      <p
        className={`font-display text-[10px] tracking-[0.35em] uppercase ${
          light ? "text-gold-light" : "text-gold"
        }`}
      >
        {label}
      </p>
      <h2
        className={`mt-2 font-display text-2xl tracking-[0.1em] uppercase font-bold sm:text-3xl md:text-4xl ${
          light ? "text-ivory" : "text-maroon"
        }`}
      >
        {title}
      </h2>
      <div className="mt-5">
        <OrnamentalDivider />
      </div>
    </motion.div>
  );
}

/* ---------------- Card wrapper ---------------- */
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-3xl border border-gold/25 bg-white/80 p-6 shadow-[0_10px_35px_-12px_rgba(74,14,24,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 sm:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Data ---------------- */
const couple = {
  groom: {
    name: "Ashen Perera",
    parents: "Son of Mr. & Mrs. P. Perera",
    family: "Of the Perera Family, Kandy",
  },
  bride: {
    name: "Nethmi Silva",
    parents: "Daughter of Mr. & Mrs. R. Silva",
    family: "Of the Silva Family, Kandy",
  },
};

const schedule = [
  { time: "9.00 AM", event: "Guest Arrival" },
  { time: "10.00 AM", event: "Poruwa Ceremony" },
  { time: "11.30 AM", event: "Blessings" },
  { time: "12.00 PM", event: "Lunch" },
  { time: "6.30 PM", event: "Reception" },
  { time: "8.00 PM", event: "Dancing & Celebration" },
];

const loveStory = [
  { symbol: "\u2726", title: "First Met", desc: "A chance meeting over a cup of Ceylon tea in Kandy." },
  { symbol: "\u2661", title: "Became Friends", desc: "Long walks by the lake and countless shared sunsets." },
  { symbol: "\u2756", title: "Engagement", desc: "Under the stars, with our families by our side." },
  { symbol: "\u26AD", title: "Wedding Day", desc: "And now, our forever begins \u2014 we can't wait to share it with you." },
];

const venues = [
  {
    name: "Earl's Regency Hotel",
    event: "Ceremony & Lunch",
    address: "10 Rajapihilla Mawatha, Kandy, Sri Lanka",
    query: "Earl%27s%20Regency%20Hotel%2C%20Kandy",
  },
  {
    name: "The Grand Kandyan",
    event: "Evening Reception",
    address: "88/2 Srimath Kobbekaduwa Mawatha, Kandy, Sri Lanka",
    query: "The%20Grand%20Kandyan%2C%20Kandy",
  },
];

const hotels = [
  { name: "Amaya Hills Kandy", note: "5 min from ceremony venue" },
  { name: "Queen's Hotel Kandy", note: "City centre, 10 min away" },
  { name: "Ozo Kandy", note: "Boutique stay, 8 min away" },
];

export default function InvitationPage() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);

  /* Personalized guest from ?guest= query */
  const [guest, setGuest] = useState("Dear Guest");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const g = params.get("guest");
    if (g) setGuest(g);
  }, []);

  return (
    <div className="min-h-screen w-full bg-ivory text-ink">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 border-b border-gold/25 bg-ivory/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="font-display text-[10px] tracking-[0.3em] uppercase text-maroon transition-colors hover:text-gold sm:text-xs"
          >
            &larr; Back
          </Link>
          <span className="font-display text-[10px] tracking-[0.35em] uppercase text-gold sm:text-xs">
            A &amp; N
          </span>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/BackgroundImage.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/70 via-maroon-deep/45 to-ivory" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 pb-24 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[11px] tracking-[0.4em] uppercase text-gold-light sm:text-sm"
          >
            The Wedding Of
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-3xl tracking-[0.16em] text-ivory font-bold uppercase drop-shadow-[0_4px_14px_rgba(74,14,24,0.45)] sm:text-5xl md:text-6xl"
          >
            Ashen <span className="text-gold-light font-normal">&amp;</span> Nethmi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-body text-base italic text-ivory/90 sm:text-xl"
          >
            Saturday, 12th December 2026 &middot; Kandy, Sri Lanka
          </motion.p>

          {/* scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 flex flex-col items-center gap-2"
          >
            <span className="font-display text-[9px] tracking-[0.35em] uppercase text-ivory/70">
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="block h-8 w-px bg-gradient-to-b from-ivory/80 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. WELCOME MESSAGE */}
      <section className="mx-auto w-full max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="font-display text-[10px] tracking-[0.35em] uppercase text-gold">
            Welcome
          </p>
          <h2 className="mt-2 font-display text-2xl tracking-[0.1em] uppercase text-maroon font-bold sm:text-3xl">
            Together With Our Families
          </h2>
          <div className="mt-5">
            <OrnamentalDivider />
          </div>
          <p className="mx-auto mt-8 max-w-xl font-body text-base italic leading-relaxed text-ink/80 sm:text-lg">
            With hearts full of joy, together with our beloved families, we request the honour
            of your presence as we celebrate the beginning of our forever. Your blessings and
            presence will make our day truly complete.
          </p>
        </motion.div>
      </section>

      {/* 3. COUPLE INFORMATION */}
      <section className="border-y border-gold/20 bg-champagne/50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <SectionHeading label="The Happy Couple" title="Our Story Begins" />

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            <Card className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-maroon to-maroon-deep">
                <span className="font-display text-3xl text-gold-light">A</span>
              </div>
              <p className="mt-4 font-display text-[10px] tracking-[0.3em] uppercase text-gold sm:text-[11px]">
                The Groom
              </p>
              <h3 className="mt-2 font-display text-xl uppercase text-maroon font-bold sm:text-2xl">
                {couple.groom.name}
              </h3>
              <p className="mt-3 font-body text-sm italic text-ink/70 sm:text-base">
                {couple.groom.parents}
              </p>
              <p className="mt-1 font-display text-[10px] tracking-[0.2em] uppercase text-ink/60">
                {couple.groom.family}
              </p>
            </Card>

            <Card className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-maroon to-maroon-deep">
                <span className="font-display text-3xl text-gold-light">N</span>
              </div>
              <p className="mt-4 font-display text-[10px] tracking-[0.3em] uppercase text-gold sm:text-[11px]">
                The Bride
              </p>
              <h3 className="mt-2 font-display text-xl uppercase text-maroon font-bold sm:text-2xl">
                {couple.bride.name}
              </h3>
              <p className="mt-3 font-body text-sm italic text-ink/70 sm:text-base">
                {couple.bride.parents}
              </p>
              <p className="mt-1 font-display text-[10px] tracking-[0.2em] uppercase text-ink/60">
                {couple.bride.family}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. WEDDING DATE & TIME */}
      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading label="Save The Date" title="Wedding Date & Time" />

        <Card className="mt-10 text-center sm:mt-12">
          <p className="font-display text-sm tracking-[0.35em] uppercase text-gold">
            Saturday
          </p>
          <p className="mt-3 font-display text-4xl tracking-[0.08em] text-maroon font-bold sm:text-6xl">
            20
          </p>
          <p className="mt-2 font-display text-lg tracking-[0.25em] uppercase text-maroon sm:text-xl">
            December &middot; 2026
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-4">
            <div className="flex-1 rounded-2xl border border-gold/25 bg-ivory px-4 py-4">
              <p className="font-display text-[10px] tracking-[0.3em] uppercase text-gold">
                Ceremony
              </p>
              <p className="mt-1 font-display text-base text-maroon font-semibold sm:text-lg">
                10.00 AM
              </p>
            </div>
            <div className="flex-1 rounded-2xl border border-gold/25 bg-ivory px-4 py-4">
              <p className="font-display text-[10px] tracking-[0.3em] uppercase text-gold">
                Reception
              </p>
              <p className="mt-1 font-display text-base text-maroon font-semibold sm:text-lg">
                6.30 PM
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* 5. COUNTDOWN */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/BackgroundImage.png"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-maroon-deep/80" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6">
          <SectionHeading light label="Counting Every Moment" title="The Big Day Is Near" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
                className="flex flex-col items-center rounded-2xl border border-gold-light/40 bg-ivory/10 px-2 py-4 backdrop-blur-sm sm:py-6"
              >
                <span className="font-display text-2xl font-semibold text-ivory tabular-nums sm:text-4xl">
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

      {/* 6. WEDDING VENUE */}
      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading label="Locations" title="Wedding Venues" />

        <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-6">
          {venues.map((venue) => (
            <Card key={venue.name}>
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display text-[10px] tracking-[0.3em] uppercase text-gold sm:text-[11px]">
                    {venue.event}
                  </p>
                  <h3 className="mt-2 font-display text-xl uppercase text-maroon font-bold sm:text-2xl">
                    {venue.name}
                  </h3>
                  <p className="mt-3 font-body text-sm italic text-ink/70 sm:text-base">
                    {venue.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${venue.query}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block cursor-pointer rounded-full bg-gradient-to-r from-maroon via-maroon-deep to-maroon px-6 py-2.5 font-display text-[10px] tracking-[0.25em] uppercase text-ivory shadow-[0_8px_20px_-4px_rgba(74,14,24,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-4px_rgba(74,14,24,0.5)] sm:text-[11px]"
                  >
                    Get Directions
                  </a>
                </div>

                <div className="h-48 w-full overflow-hidden rounded-2xl border border-gold/25 sm:h-auto sm:min-h-[220px] sm:w-72">
                  <iframe
                    title={`Map - ${venue.name}`}
                    src={`https://maps.google.com/maps?q=${venue.query}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 7. WEDDING SCHEDULE */}
      <section className="border-y border-gold/20 bg-champagne/50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <SectionHeading label="Plan Your Day" title="Wedding Schedule" />

          <Card className="mt-10 overflow-hidden p-0 sm:mt-12">
            <div className="divide-y divide-gold/15">
              {schedule.map((row, i) => (
                <motion.div
                  key={row.event}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`flex items-center gap-4 px-6 py-4 sm:px-8 ${
                    i % 2 === 0 ? "bg-white/60" : "bg-transparent"
                  }`}
                >
                  <span className="w-24 shrink-0 font-display text-sm font-semibold tracking-[0.1em] text-gold sm:text-base">
                    {row.time}
                  </span>
                  <span className="h-px flex-1 bg-gold/20" />
                  <span className="font-body text-sm italic text-ink/70 sm:text-base">
                    {row.event}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* 8. LOVE STORY */}
      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading label="How It All Began" title="Our Love Story" />

        <div className="relative mt-12 flex flex-col">
          <span className="absolute bottom-4 left-[27px] top-4 w-px bg-gradient-to-b from-gold/60 via-gold/40 to-gold/60 sm:left-[35px]" />
          {loveStory.map((milestone, i) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7"
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ivory shadow-[0_6px_18px_-6px_rgba(74,14,24,0.3)] sm:h-[70px] sm:w-[70px]">
                <span className="font-display text-xl text-gold sm:text-2xl">
                  {milestone.symbol}
                </span>
              </div>
              <div className="pt-2 sm:pt-3">
                <h3 className="font-display text-base uppercase text-maroon font-semibold tracking-[0.12em] sm:text-lg">
                  {milestone.title}
                </h3>
                <p className="mt-1.5 max-w-md font-body text-sm italic text-ink/70 sm:text-base">
                  {milestone.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. COUPLE GALLERY */}
      <section className="border-y border-gold/20 bg-champagne/50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <SectionHeading label="Moments Together" title="Couple Gallery" />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-gold/25 shadow-[0_12px_35px_-12px_rgba(74,14,24,0.3)]"
            >
              <Image
                src="/images/couple.png"
                alt="The couple portrait"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-gold/25 shadow-[0_12px_35px_-12px_rgba(74,14,24,0.3)]"
            >
              <Image
                src="/images/couple.png"
                alt="The couple pre-shoot"
                fill
                className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-deep/70 to-transparent p-4 text-center">
                <span className="font-display text-[9px] tracking-[0.3em] uppercase text-ivory">
                  Pre-shoot
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-gold/25 shadow-[0_12px_35px_-12px_rgba(74,14,24,0.3)]"
            >
              <Image
                src="/images/couple.png"
                alt="The couple engagement"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-deep/70 to-transparent p-4 text-center">
                <span className="font-display text-[9px] tracking-[0.3em] uppercase text-ivory">
                  Engagement
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-gold/25 shadow-[0_12px_35px_-12px_rgba(74,14,24,0.3)]"
            >
              <Image
                src="/images/BackgroundImage.png"
                alt="Wedding day decor"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-deep/70 to-transparent p-4 text-center">
                <span className="font-display text-[9px] tracking-[0.3em] uppercase text-ivory">
                  Wedding Day
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. PERSONALIZED GUEST SECTION */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/BackgroundImage.png"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-maroon-deep/75" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="font-display text-[10px] tracking-[0.35em] uppercase text-gold-light">
              A Special Note For You
            </p>
            <h2 className="mt-4 font-display text-2xl tracking-[0.08em] uppercase text-ivory font-bold sm:text-3xl">
              {guest},
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-body text-base italic leading-relaxed text-ivory/90 sm:text-lg">
              We&rsquo;re delighted to invite you to share in our joy. Your presence at our wedding
              will mean the world to us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 11. CONTACT INFORMATION */}
      <section className="border-y border-gold/20 bg-champagne/50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <SectionHeading label="Reach Out To Us" title="Contact Information" />

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            <Card className="text-center">
              <p className="font-display text-[10px] tracking-[0.3em] uppercase text-gold sm:text-[11px]">
                The Bride
              </p>
              <h3 className="mt-2 font-display text-xl uppercase text-maroon font-bold sm:text-2xl">
                {couple.bride.name}
              </h3>
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href="tel:+94771234567"
                  className="flex-1 rounded-xl border border-gold/30 bg-ivory/70 px-4 py-3 font-display text-[10px] tracking-[0.2em] uppercase text-maroon transition-all duration-300 hover:border-gold hover:bg-ivory"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl border border-gold/30 bg-ivory/70 px-4 py-3 font-display text-[10px] tracking-[0.2em] uppercase text-maroon transition-all duration-300 hover:border-gold hover:bg-ivory"
                >
                  WhatsApp
                </a>
              </div>
            </Card>

            <Card className="text-center">
              <p className="font-display text-[10px] tracking-[0.3em] uppercase text-gold sm:text-[11px]">
                The Groom
              </p>
              <h3 className="mt-2 font-display text-xl uppercase text-maroon font-bold sm:text-2xl">
                {couple.groom.name}
              </h3>
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href="tel:+94779876543"
                  className="flex-1 rounded-xl border border-gold/30 bg-ivory/70 px-4 py-3 font-display text-[10px] tracking-[0.2em] uppercase text-maroon transition-all duration-300 hover:border-gold hover:bg-ivory"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/94779876543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl border border-gold/30 bg-ivory/70 px-4 py-3 font-display text-[10px] tracking-[0.2em] uppercase text-maroon transition-all duration-300 hover:border-gold hover:bg-ivory"
                >
                  WhatsApp
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 12. DRESS CODE */}
      <section className="border-y border-gold/20 bg-champagne/50 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <SectionHeading label="What To Wear" title="Dress Code" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4"
          >
            {["Traditional", "Formal", "White & Gold Theme"].map((code) => (
              <span
                key={code}
                className="rounded-full border border-gold/40 bg-white/80 px-7 py-3 font-display text-[10px] tracking-[0.25em] uppercase text-maroon shadow-[0_8px_22px_-8px_rgba(74,14,24,0.25)] sm:text-[11px]"
              >
                {code}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 13. ACCOMMODATION */}
      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading label="Stay With Us" title="Accommodation" />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {hotels.map((hotel) => (
            <Card key={hotel.name} className="text-center">
              <span className="font-display text-2xl text-gold">&#127968;</span>
              <h3 className="mt-3 font-display text-base uppercase text-maroon font-semibold tracking-[0.1em] sm:text-lg">
                {hotel.name}
              </h3>
              <p className="mt-2 font-body text-xs italic text-ink/70 sm:text-sm">{hotel.note}</p>
            </Card>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-center font-body text-sm italic text-ink/60"
        >
          Contact: Mrs. Kamala Perera &middot; +94 77 123 4567 (for room reservations)
        </motion.p>
      </section>

      {/* 14. FOOTER */}
      <footer className="relative overflow-hidden bg-maroon-deep py-14 text-center">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/BackgroundImage.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 px-4">
          <p className="font-display text-[10px] tracking-[0.4em] uppercase text-gold-light">
            Thank You
          </p>
          <h2 className="mt-3 font-display text-2xl tracking-[0.14em] uppercase text-ivory font-bold sm:text-3xl">
            We Can&rsquo;t Wait To Celebrate With You
          </h2>
          <div className="mx-auto mt-6 max-w-[220px]">
            <OrnamentalDivider />
          </div>
          <p className="mt-6 font-body text-base italic text-ivory/80">With Love,</p>
          <p className="mt-2 font-display text-xl tracking-[0.2em] uppercase text-gold-light sm:text-2xl">
            Ashen <span className="text-ivory">&amp;</span> Nethmi
          </p>
          <p className="mt-4 font-display text-[9px] tracking-[0.35em] uppercase text-ivory/50">
            12 &middot; 12 &middot; 2026 &mdash; Kandy, Sri Lanka
          </p>
        </div>
      </footer>
    </div>
  );
}
