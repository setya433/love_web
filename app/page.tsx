import OpeningSection from "@/src/components/sections/OpeningSection"
import ValentineQuestionSection from "@/src/components/sections/ValentineQuestionSection"
import LoveLetterSection from "@/src/components/sections/LoveLetterSection"
import QuizSection from "@/src/components/sections/QuizSection"
import EndingSection from "@/src/components/sections/EndingSection"
import ImportantDatesSection from "@/src/components/sections/ImportantDatesSection"

export default function Home() {
  return (
    <main>
      <OpeningSection />
      <ValentineQuestionSection />
      <LoveLetterSection />
      <QuizSection />
      <EndingSection />
      <ImportantDatesSection />   
    </main>
  )
}
