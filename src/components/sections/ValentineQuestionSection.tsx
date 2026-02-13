"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function QuestionSection() {
  const [noClicked, setNoClicked] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleNoClick = () => {
    setShowPopup(true)
    setNoClicked(true)
  }

  return (
    <section id="question" className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">

        {/* GIF */}
          <motion.img
            src="https://i.pinimg.com/736x/99/04/06/9904061a7768c67ae2df86b10ad621de.jpg"
            alt="Dudu Hug"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-6 w-48 md:w-64 rounded-2xl"
          />


        {/* Question */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-semibold text-rose-900"
        >
          Will you be my Forever and accept unlimited hugs from me?
        </motion.h2>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6">
        <Link href="/#love-letter">
          {/* YES BUTTON */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-rose-500 text-white font-medium shadow-lg hover:bg-rose-600 transition"
          >
            YES 💖
          </motion.button>
        </Link>

          {/* NO BUTTON */}
          <AnimatePresence>
            {!noClicked && (
              <motion.button
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={handleNoClick}
                className="px-8 py-3 rounded-full bg-gray-200 text-gray-700 font-medium shadow hover:bg-gray-300 transition"
              >
                NO
              </motion.button>
            )}
          </AnimatePresence>

        </div>

        {/* Popup */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 rounded-2xl bg-white shadow-xl text-rose-900"
            >
              <p className="text-lg font-medium">
                "NO" option not available for this user.
              </p>
              <p className="mt-2 text-sm text-rose-700">
                Please try choosing YES instead.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
