import { User, Calendar } from "lucide-react"
import BackButton from "@/components/back-button"

interface RentalHeaderProps {
  title: string
  showBackButton?: boolean
  backButtonText?: string
}

export function RentalHeader({ title, showBackButton = true, backButtonText }: RentalHeaderProps) {
  return (
    <section className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto p-4">
        {showBackButton && <BackButton text={backButtonText || "Back"} />}
        <div className="mt-7 mb-2">
          <h1 className="text-2xl font-black">{title}</h1>
          <div className="flex flex-wrap text-sm mt-2 gap-x-4">
            <p className="border-r pr-4">Magical Santorini for 7 nights</p>
            <p className="flex items-center border-r pr-4">
              <User className="h-4 w-4 mr-1" />
              2 Adults
            </p>
            <p className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              15 July - 22 July 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 