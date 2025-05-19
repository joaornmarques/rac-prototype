import { CarList } from "@/components/car-list"
import { Check } from "lucide-react"
import { RentalHeader } from "@/components/rental-header"
import BackButton from "@/components/back-button"
export default function HomePage() {
  return (
    <main>
      <RentalHeader title="Rent car" backButtonText="Back to trip" />
      <section className="max-w-5xl mx-auto p-4 mb-8">
        <div className="mt-8 mb-12">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <h2 className="text-lg font-black">Recommended cars</h2>
            </div>
            <button className="text-blue-500 text-sm font-medium">Change preferences</button>
          </div>
          <CarList />
        </div>
        <BackButton text="Back to trip" />
      </section>
    </main>
  )
}
