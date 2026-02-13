"use client"

import { motion } from "framer-motion"

export default function LoveLetterSection() {
  return (
    <section
      id="love-letter"
      className="min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">

        {/* GIF */}
        <motion.img
          src="https://media.tenor.com/LF3tjgQwQPEAAAAi/kiss.gif"
          alt="Dudu Hug"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 w-48 md:w-64 rounded-2xl"
        />


        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-semibold text-rose-900"
        >
          There’s something I want to tell you 💌
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-rose-800"
        >
          From the very first moment I saw you in front of the PKM building ✨,
          I didn’t know that one day you would become this important to me ❤️
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-rose-800"
        >
          You make ordinary days feel special 🌷  
          You make silence feel comfortable 🤍  
          And somehow, you make my world softer 🌸
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-rose-800"
        >
          I may not always say it perfectly 🥺,
          but I hope you know how much you mean to me 💖
        </motion.p>


        {/* Button */}
            <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            href="#quiz"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-10 px-8 py-3 rounded-full bg-red-800 text-white font-medium shadow-lg hover:bg-rose-600 transition"
            >
            Next
        </motion.a>

      </div>
    </section>
  )
}
