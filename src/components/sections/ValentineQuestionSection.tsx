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

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <section
      id="question"
      className="min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* GIF */}
        <motion.img
          src="https://i.pinimg.com/736x/99/04/06/9904061a7768c67ae2df86b10ad621de.jpg"
          alt="Dudu Hug"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 w-44 md:w-56 rounded-2xl"
        />

        {/* Question */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-3xl font-semibold text-rose-900"
        >
          Will you be my Forever and accept unlimited hugs from me?
        </motion.h2>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <Link href="/#love-letter">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-rose-500 text-white font-medium shadow-lg hover:bg-rose-600 transition"
            >
              YES 💖
            </motion.button>
          </Link>

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
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center"
              >
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg"
                >
                  ✕
                </button>

                <p className="text-lg font-semibold text-rose-900">
                  "NO" option not available 😌
                </p>

                <p className="mt-3 text-sm text-rose-700">
                  This user only accepts love and unlimited hugs.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closePopup}
                  className="mt-6 px-6 py-2.5 rounded-full bg-rose-500 text-white text-sm font-medium shadow-md hover:bg-rose-600 transition"
                >
                  Okay… I choose YES 💖
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
