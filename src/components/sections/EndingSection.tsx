"use client"

import { motion } from "framer-motion"

export default function EndingSection() {
  return (
    <section
      id="ending"
      className="min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-rose-900"
        >
          Thank you for loving me 🤍
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-rose-800"
        >
          Please stay with me for a very, very long time 🫶
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-rose-800 leading-relaxed"
        >
          If you ever feel tired, sad, or unsure 🌧️  
          just remember you’ll always have me 🤍  
          No matter what. Always. 💞
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl font-semibold text-rose-900"
        >
          Forever yours, always and beyond ❤️✨
        </motion.p>


        <motion.a
        href="#important-dates"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-6 px-8 py-3 rounded-full bg-rose-500 text-white font-medium shadow-lg hover:bg-rose-600 transition"
        >
        Next Important Dates 🎉
        </motion.a>


      </div>
    </section>
  )
}
