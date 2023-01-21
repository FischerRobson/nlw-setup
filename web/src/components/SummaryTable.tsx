import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S',];


const summaryDays = generateDatesFromYearBeginning();

const minSummaryDaysSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minSummaryDaysSize - weekDays.length;


export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => {
          return (
            <div key={index} className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">
              {day}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDays.map(day => {
          return (
            <HabitDay key={day.toISOString()} />
          )
        })}
        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => {
          return (
            <div key={index} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"/>
          )
        })}
      </div>

    </div>
  )
}