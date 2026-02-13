"use client"

import { motion } from "framer-motion"

export default function OpeningSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Floating Heart */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-4xl mb-6"
        >
          ❤️
        </motion.div>

        {/* Main Text */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Hi, My Favorite Girl.
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-600"
        >
          I made something small for you.
        </motion.p>

        {/* Button */}
            <motion.a
            href="#question"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-10 px-8 py-3 rounded-full bg-rose-500 text-white font-medium shadow-lg hover:bg-rose-600 transition"
            >
            Please Tap here ❤️
            </motion.a>


      </div>
    </section>
  )
}
