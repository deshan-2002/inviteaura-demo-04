"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import OrnamentalDivider from "./OrnamentalDivider";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroInvite() {
  return (
    <section className="hero-full relative flex w-full flex-col items-center justify-between overflow-hidden bg-ivory px-4 py-4 sm:px-8 sm:py-6 md:py-8">
      {/* Background: silk drape photo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/BackgroundImage.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* soft shimmer overlay */}
        <div
          className="absolute inset-0 animate-shimmer opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(120deg, transparent 30%, rgba(212,185,124,0.35) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
        />
        <div className="absolute inset-0 bg-ivory/20" />
      </div>

      {/* Content Wrapper - fills height, top/bottom pinned, image flexes */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full w-full max-w-3xl flex-col items-center text-center"
      >
        {/* TOP SECTION: Divider + Invitation Header */}
        <motion.div variants={fadeUp} className="flex flex-col items-center w-full px-2">
          <OrnamentalDivider />

          <h2 className="mt-3 sm:mt-4 font-display text-[11px] sm:text-sm md:text-base tracking-[0.26em] sm:tracking-[0.32em] text-maroon font-semibold uppercase drop-shadow-[0_1px_2px_rgba(246,238,224,0.9)]">
            Together With Their Families
          </h2>

          <p className="mt-1 sm:mt-2 max-w-lg font-display text-[10px] sm:text-xs md:text-sm tracking-[0.20em] sm:tracking-[0.26em] text-gold font-medium uppercase">
            Request The Honour Of Your Presence
          </p>
        </motion.div>

        {/* MIDDLE SECTION: Center Couple Portrait - flexes to available space */}
        <motion.div
          variants={fadeUp}
          className="relative flex w-full min-h-0 flex-1 items-center justify-center my-1 sm:my-2"
        >
          {/* Soft Golden Radiance Aura behind couple */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/60 via-gold/15 to-transparent blur-2xl sm:blur-3xl animate-pulse pointer-events-none"
            style={{ animationDuration: '6s' }}
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full max-h-[58vh] sm:max-h-[62vh] md:max-h-[65vh] lg:max-h-[68vh] landscape:max-h-[42vh] max-w-[320px] xs:max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[600px]"
          >
            <Image
              src="/images/couple.png"
              alt="The couple"
              fill
              priority
              className="object-contain drop-shadow-[0_18px_35px_rgba(74,14,24,0.28)]"
            />
          </motion.div>
        </motion.div>

        {/* BOTTOM SECTION: Couple Names, Date & Elevating Button */}
        <motion.div variants={fadeUp} className="flex flex-col items-center w-full px-2 pb-2 sm:pb-4">
          <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.20em] sm:tracking-[0.25em] text-maroon font-bold uppercase drop-shadow-[0_1px_2px_rgba(74,14,24,0.12)]">
            Ashen <span className="text-gold font-normal px-0.5 sm:px-1">&</span> Nethmi
          </h1>

          <p className="mt-1 sm:mt-2 font-body text-xs sm:text-base md:text-lg italic text-ink/80 font-medium tracking-wide">
            12th December 2026 &middot; Kandy, Sri Lanka
          </p>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            className="mt-4 sm:mt-6 cursor-pointer rounded-full border border-gold-light/70 bg-gradient-to-r from-maroon via-maroon-deep to-maroon px-7 py-2.5 sm:px-9 sm:py-3 font-display text-[11px] sm:text-xs md:text-sm tracking-[0.22em] sm:tracking-[0.28em] text-ivory font-medium uppercase shadow-[0_8px_22px_-3px_rgba(74,14,24,0.4),0_0_15px_rgba(212,185,124,0.25)] transition-all duration-300 hover:border-gold hover:shadow-[0_12px_28px_-3px_rgba(74,14,24,0.5),0_0_22px_rgba(212,185,124,0.4)]"
          >
            Open Invitation
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
