"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import OrnamentalDivider from "./OrnamentalDivider";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 1.7 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const sparkle = [
  { top: "18%", left: "22%", delay: 0.4, size: 5 },
  { top: "30%", left: "72%", delay: 1.3, size: 4 },
  { top: "10%", left: "55%", delay: 2.2, size: 6 },
  { top: "45%", left: "10%", delay: 0.9, size: 4 },
  { top: "55%", left: "86%", delay: 1.8, size: 5 },
];

function Letters({
  text,
  start,
  className,
}: {
  text: string;
  start: number;
  className?: string;
}) {
  return (
    <span className={className}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.55,
            delay: start + i * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroInvite() {
  const [showIntro, setShowIntro] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-full relative flex w-full items-center justify-center overflow-hidden bg-ivory px-3 py-3 sm:px-5 sm:py-5 md:px-8 md:py-6">
      {/* Elegant intro overlay - lifts away to reveal the invitation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ clipPath: "inset(0 0 0% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ivory"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center px-6 text-center"
            >
              <p className="font-display text-[10px] tracking-[0.4em] text-gold uppercase">
                The Wedding Of
              </p>
              <h1 className="mt-4 whitespace-nowrap font-display text-[clamp(16px,4.8vw,20px)] sm:text-3xl tracking-[0.2em] sm:tracking-[0.25em] text-navy font-bold uppercase">
                <Letters text="Ashen" start={0.35} />{" "}
                <span className="text-gold font-normal">
                  <Letters text="&" start={0.65} />
                </span>{" "}
                <Letters text="Nethmi" start={0.85} />
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="mt-4 opacity-70"
              >
                <OrnamentalDivider />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background: silk drape photo with slow Ken Burns drift */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/BackgroundImage.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
        {/* soft shimmer overlay */}
        <div
          className="absolute inset-0 animate-shimmer opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(120deg, transparent 30%, rgba(212,185,124,0.35) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
        />
        {/* subtle vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(27,37,80,0.12)_100%)]" />
        <div className="absolute inset-0 bg-ivory/20" />
      </div>

      {/* Content Wrapper - centered as one balanced group */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full w-full max-w-md flex-col items-center justify-center text-center gap-2.5 sm:gap-3.5 md:gap-4 py-2 sm:py-4"
      >
        {/* TOP SECTION: Divider + Invitation Header */}
        <motion.div variants={fadeUp} className="flex w-full flex-col items-center pt-0.5 sm:pt-1">
          <div className="scale-90 sm:scale-100">
            <OrnamentalDivider />
          </div>

          <h2 className="mt-1.5 sm:mt-2.5 font-display text-[10px] sm:text-xs md:text-sm tracking-[0.22em] sm:tracking-[0.28em] text-navy font-semibold uppercase drop-shadow-[0_1px_2px_rgba(246,238,224,0.9)]">
            Together With Their Families
          </h2>

          <p className="mt-1 max-w-lg font-display text-[9px] sm:text-[11px] md:text-xs tracking-[0.18em] sm:tracking-[0.22em] text-gold font-medium uppercase">
            Request The Honour Of Your Presence
          </p>
        </motion.div>

        {/* MIDDLE SECTION: Center Couple Portrait - balanced responsive scale */}
        <motion.div
          variants={fadeUp}
          className="relative flex w-full min-h-0 items-center justify-center my-0.5 sm:my-1"
        >
          {/* Soft Golden Radiance Aura behind couple */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] max-w-[260px] max-h-[260px] sm:max-w-[340px] sm:max-h-[340px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/60 via-gold/15 to-transparent blur-2xl sm:blur-3xl animate-pulse pointer-events-none"
            style={{ animationDuration: '6s' }}
          />

          {/* Expanding golden halo rings */}
          <motion.div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] max-w-[220px] aspect-square rounded-full border border-gold/30 pointer-events-none"
            initial={{ scale: 0.55, opacity: 0 }}
            animate={{ scale: 1.3, opacity: [0, 0.55, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
          <motion.div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] max-w-[220px] aspect-square rounded-full border border-gold/25 pointer-events-none"
            initial={{ scale: 0.55, opacity: 0 }}
            animate={{ scale: 1.3, opacity: [0, 0.45, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeOut", delay: 2.3 }}
          />

          {/* Floating golden sparkles */}
          {sparkle.map((s, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute rounded-full bg-gold-light pointer-events-none"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                filter: "blur(0.5px)",
              }}
              animate={{ y: [0, -12, 0], opacity: [0.1, 0.85, 0.1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: s.delay,
              }}
            />
          ))}

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[33vh] max-h-[260px] min-h-[180px] w-full max-w-[210px] sm:h-[40vh] sm:max-h-[340px] sm:max-w-[280px] md:h-[45vh] md:max-h-[400px] md:max-w-[320px] lg:h-[48vh] lg:max-w-[360px] landscape:h-[38vh] landscape:max-h-[220px]"
          >
            <Image
              src="/images/couple.png"
              alt="The couple"
              fill
              priority
              className="object-contain drop-shadow-[0_14px_28px_rgba(27,37,80,0.2)]"
            />
          </motion.div>
        </motion.div>

        {/* BOTTOM SECTION: Couple Names, Date & Button */}
        <motion.div variants={fadeUp} className="flex w-full flex-col items-center pb-0.5 sm:pb-1">
          <h1 className="whitespace-nowrap font-display text-[clamp(15px,4.2vw,20px)] tracking-[0.14em] sm:text-2xl sm:tracking-[0.22em] md:text-3xl lg:text-4xl text-navy font-bold uppercase drop-shadow-[0_1px_2px_rgba(27,37,80,0.12)]">
            <Letters text="Ashen" start={3.0} />{" "}
            <span className="text-gold font-normal px-0.5 sm:px-1">
              <Letters text="&" start={3.25} />
            </span>{" "}
            <Letters text="Nethmi" start={3.5} />
          </h1>

          <p className="mt-1 font-body text-xs sm:text-sm md:text-base italic text-[#2D3748] font-medium tracking-wide">
            12th December 2026 &middot; Colombo, Sri Lanka
          </p>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={() => router.push("/invitation")}
            className="relative mt-2.5 sm:mt-3.5 cursor-pointer overflow-hidden rounded-full bg-[#1B2550] px-7 py-2.5 sm:px-9 sm:py-3 font-sans text-[11px] sm:text-xs md:text-sm tracking-[0.22em] sm:tracking-[0.26em] text-white font-semibold uppercase shadow-[0_8px_24px_-4px_rgba(27,37,80,0.5)] transition-all duration-300 hover:bg-[#141C3D] hover:shadow-[0_12px_28px_-4px_rgba(27,37,80,0.65)]"
          >
            <span className="relative z-10">Open Invitation</span>
            {/* flowing shine sweep */}
            <motion.span
              aria-hidden
              className="absolute top-0 bottom-0 w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-160%" }}
              animate={{ x: "360%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
