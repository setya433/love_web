"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type Countdown = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateCountdown(targetDate: Date): Countdown {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  const totalSeconds = Math.max(Math.floor(diff / 1000), 0)

  const days = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

export default function ImportantDatesSection() {
  const [bigboyCountdown, setBigboyCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [herCountdown, setHerCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const year = now.getFullYear()

      let bigboyBirthday = new Date(`${year}-03-09T00:00:00`)
      let herBirthday = new Date(`${year}-04-26T00:00:00`)

      if (bigboyBirthday < now) {
        bigboyBirthday = new Date(`${year + 1}-03-09T00:00:00`)
      }

      if (herBirthday < now) {
        herBirthday = new Date(`${year + 1}-04-26T00:00:00`)
      }

      setBigboyCountdown(calculateCountdown(bigboyBirthday))
      setHerCountdown(calculateCountdown(herBirthday))
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const CountdownCard = ({
    title,
    image,
    data,
  }: {
    title: string
    image: string
    data: Countdown
  }) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-2xl bg-white shadow-lg space-y-4"
    >
      <div className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold text-rose-900">
        {title}
      </h3>

      <div className="grid grid-cols-4 gap-3 text-center mt-4">
        {[
          { label: "Days", value: data.days },
          { label: "Hours", value: data.hours },
          { label: "Minutes", value: data.minutes },
          { label: "Seconds", value: data.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-rose-100 rounded-xl p-3"
          >
            <p className="text-lg font-bold text-rose-900">
              {item.value}
            </p>
            <p className="text-xs text-rose-700">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section
      id="important-dates"
      className="min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto text-center space-y-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-rose-900"
        >
          Our Next Important Dates 🎂
        </motion.h2>

        <div className="space-y-8">

          <CountdownCard
            title="Your BigBoy Birthday – March 9 🎸"
            image="/Bigboy.jpeg"
            data={bigboyCountdown}
          />

          <CountdownCard
            title="Her Birthday – April 26 📸"
            image="/Her2.jpeg"
            data={herCountdown}
          />

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-rose-800"
        >
          More memories loading...
        </motion.p>

      </div>
    </section>
  )
}
