"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Question = {
  question: string
  options: string[]
  answer: string
}

const questions: Question[] = [
  {
    question: "What is my favorite food?",
    options: ["Mie", "Pizza", "Katsu Chicken", "Egg"],
    answer: "Pizza",
  },
  {
    question: "What is my favorit movie genre?",
    options: ["Romance", "Comedy", "Action", "Horror"],
    answer: "Action",
  },
  {
    question: "Which series do I love?",
    options: ["Breaking Bad", "Game of Thrones", "Friends", "Stranger Things"],
    answer: "Game of Thrones",
  },
  {
    question: "Where was I born?",
    options: ["Kendal", "Temanggung", "Boja", "Semarang"],
    answer: "Temanggung",
  },
  {
    question: "What bands do I love?",
    options: ["Antrax", "Slayer", "Metallica", "Megadeath"],
    answer: "Metallica",
  },
  {
    question: "What is my favorite color?",
    options: ["Blue", "Black", "Red", "Green"],
    answer: "Red",
  },
  {
    question: "What guitar brand do I use?",
    options: ["Fender", "Ibanez", "Artrock", "Gibson"],
    answer: "Artrock",
  },
  {
    question: "What is my band name besides \"Grendo Tukang\"?",
    options: ["O'NER", "The Rebels", "Whiskey Wish", "Black Rascall"],
    answer: "O'NER",
  },
  {
    question: "What is my biggest dream?",
    options: ["Buy Hurley Davidson", "Be rich", "Merry you", "Buy 100 Guitar"],
    answer: "Merry you",
  },
  {
    question: "What is my favorit music genre?",
    options: [
      "Progresive Metal",
      "Heavy Metal",
      "Trash Metal",
      "Doom Metal",
    ],
    answer: "Heavy Metal",
  },
]

export default function QuizSection() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [showHeart, setShowHeart] = useState(false)

  const progress = (current / questions.length) * 100

  const handleAnswer = (option: string) => {
    const isCorrect = option === questions[current].answer

    if (isCorrect) {
      setScore((prev) => prev + 1)
      setShowHeart(true)

      setTimeout(() => {
        setShowHeart(false)
      }, 700)
    }

    if (current + 1 < questions.length) {
      setTimeout(() => {
        setCurrent((prev) => prev + 1)
      }, 450)
    } else {
      setTimeout(() => {
        setFinished(true)
      }, 450)
    }
  }

  return (
    <section
      id="quiz"
      className="min-h-screen flex items-center justify-center px-5 md:px-10"
    >
      <div className="max-w-xl mx-auto text-center w-full">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
        >
          I Have A Few Question For You
        </motion.h1>

        <motion.h2
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-rose-900"
        >
          Dont worry its just for fun
        </motion.h2>

        {/* GIF */}
        <motion.img
          src="https://media.tenor.com/n4IJmAXgRHwAAAAj/peach-and.gif"
          alt="Dudu Hug"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-2 mt-6 w-28 sm:w-32 md:w-36 xl:w-40 rounded-xl"

        />

        {!finished ? (
          <>
            


            <motion.h2
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-semibold text-rose-900"
            >
              {questions[current].question}
            </motion.h2>

            <div className="mt-6 grid gap-3">
              {questions[current].options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleAnswer(option)}
                  className="
                    px-5 py-3 
                    rounded-xl 
                    bg-rose-50/70 
                    backdrop-blur-sm
                    border border-rose-200 
                    text-rose-900 
                    shadow-sm
                    hover:bg-rose-100 
                    hover:shadow-md 
                    transition-all duration-300
                  "
                >
                  {option}
                </motion.button>
              ))}
            </div>

            <p className="mt-5 text-xs text-rose-700">
              Question {current + 1} of {questions.length}
            </p>
            {/* Progress Bar */}
            <div className="w-1/2 mx-auto bg-rose-100 rounded-full h-1 mt-2 overflow-hidden">
              <motion.div
                className="bg-rose-500 h-1 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <AnimatePresence>
              {showHeart && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 flex items-center justify-center text-5xl pointer-events-none"
                >
                  ❤️
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-5"
          >
            <h2 className="text-2xl font-bold text-rose-900">
              You scored {score} / {questions.length}
            </h2>

            <p className="text-base text-rose-800 leading-relaxed">
              {score === 10
                ? "10/10?! 😭❤️ That’s soulmate behavior. You know me inside and out. At this point… I should probably just marry you."
                : score >= 8
                ? "Wowww 😳✨ Almost perfect! You really pay attention to me. That’s dangerously attractive."
                : score >= 6
                ? "Okay okay 👀💕 I’m impressed. You’ve been listening, huh? I like that."
                : score >= 4
                ? "Not bad at all 😌 We’re getting there. A few more dates and you’ll master the 'Me' exam."
                : score >= 1
                ? "Hmmmm 😆 Looks like we need more late-night talks and random deep conversations. I volunteer as your study material."
                : "0?! 😭 Okay this is a crime. We need emergency bonding time immediately. I refuse to accept this result."}
            </p>

            <motion.a
              href="#ending"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block mt-3 px-7 py-2.5 rounded-full bg-rose-500 text-white text-sm font-medium shadow-md hover:bg-rose-600 transition"
            >
              Continue ❤️
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
