import { CarList } from "@/components/car-list"
import BackToTrip from "@/components/back-to-trip"

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <BackToTrip />

      <div className="my-6">
        <h1 className="text-2xl font-bold">Rent car</h1>
        <div className="flex flex-wrap text-sm mt-2 gap-x-4">
          <p>Magical Santorini for 7 nights</p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            2 Adults
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            15 July - 22 July 2025
          </p>
        </div>
      </div>

      <div className="my-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-lg font-semibold">Recommended cars</h2>
          </div>
          <button className="text-blue-500 text-sm font-medium">Change preferences</button>
        </div>
        <CarList />
      </div>

      <BackToTrip />
    </main>
  )
}
