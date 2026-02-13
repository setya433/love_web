"use client"

import { motion } from "framer-motion"

export default function LoveLetterSection() {
  return (
    <section
      id="love-letter"
      className="min-h-screen flex items-center justify-center px-5 md:px-10"
    >
      <div className="max-w-xl mx-auto text-center space-y-5">

        {/* GIF */}
        <motion.img
          src="https://media.tenor.com/LF3tjgQwQPEAAAAi/kiss.gif"
          alt="Dudu Hug"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-2 mt-6 w-28 sm:w-32 md:w-36 xl:w-40 rounded-xl"

        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-3xl font-semibold text-rose-900"
        >
          There’s something I want to tell you 💌
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base text-rose-800"
        >
          From the very first moment I saw you in front of the PKM building ✨,
          I didn’t know that one day you would become this important to me ❤️
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base text-rose-800"
        >
          You make ordinary days feel special 🌷  
          You make silence feel comfortable 🤍  
          And somehow, you make my world softer 🌸
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base text-rose-800"
        >
          I may not always say it perfectly 🥺,
          but I hope you know how much you mean to me 💖
        </motion.p>

        {/* Button */}
        <motion.a
          href="#quiz"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block mt-5 px-7 py-2.5 rounded-full bg-rose-500 text-white text-sm font-medium shadow-md hover:bg-rose-600 transition"
        >
          A Little Challenge for You
        </motion.a>

      </div>
    </section>
  )
}
