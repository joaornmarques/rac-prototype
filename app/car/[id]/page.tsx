"use client"

import { useState, useEffect, use } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { cars } from "@/data/cars"
import BackButton from "@/components/back-button"
import CollapsibleSection from "@/components/collapsible-section"
import { User, Check, X, Settings, Briefcase } from "lucide-react"
import { RentalHeader } from "@/components/rental-header"
import PickupDropoffCard from "@/components/pickup-dropoff-card"
import RentalPriceCard from "@/components/rental-price-card"
import FormInput from "@/components/form-input"

export default function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const unwrappedParams = use(params)
  const carId = unwrappedParams.id
  const car = cars.find((c) => c.id === carId)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!car) {
      router.push("/")
    }
  }, [router, car])

  if (!car) {
    return null
  }

  // Hardcoded data for pick up/drop off and rental price
  const pickUpDate = "15 July 2024 at 9 pm"
  const dropOffDate = "22 July 2024 at 9 pm"
  const location = "Athens (ATH)"
  const addressLine1 = "Address Line 1"
  const addressLine2 = "Address Line 2"
  const totalDays = 7
  const totalPrice = car.price * totalDays

  return (
    <main>
      <RentalHeader title="Rent car – Add to booking" backButtonText="Change rental car" />
      {/* Main content and sticky sidebar layout */}
      <section className="max-w-5xl mx-auto p-4 mb-8">
        <div className="bg-gray-200 rounded-lg px-6 py-4 mb-6 flex justify-between items-center">
          <p className="text-sm">Rent car from <span className="font-bold">Tue, 15 July</span> to <span className="font-bold">Tue, 22 July</span> – 7 days</p>
          <button className="btn btn-secondary">Change dates</button>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            

            <div className="card mb-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-32">
                  <Image src={car.imageUrl} alt={car.name} fill style={{ objectFit: "contain" }} />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-black mb-2">{car.name}</h2>
                <p className="text-sm mb-2">{car.category}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 my-3">
                  <div className="flex items-center text-sm border-r pr-4">
                    <User className="h-4 w-4 mr-1" />
                    {car.people} people
                  </div>
                  <div className="flex items-center text-sm border-r pr-4">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {car.luggage} {car.luggage === 1 ? "luggage" : "luggages"}
                  </div>
                  <div className="flex items-center text-sm">
                    <Settings className="h-4 w-4 mr-1" />
                    {car.transmission}
                  </div>
                </div>

                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 mr-1" />
                  Fuel
                </div>
              </div>
            </div>

            <CollapsibleSection
              title="Inclusions & Insurance information"
              isOpen={isOpen}
              onToggle={() => setIsOpen(!isOpen)}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Unlimited mileage</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Use our digital travel assistant, which offers you a variety of useful features such as viewing your
                        travel information, access to support lounges in case of flight delays, real-time data or help with
                        finding a parking space during your holidays.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Full fuel policy - Return the car with the same amount of fuel as when you picked it up.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Local taxes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Airport service charge</span>
                    </li>
                  </ul>

                  <h3 className="font-semibold mb-2 mt-6">Selected items to be paid on destination</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Winter or all-weather tyres (depending on destination) are included in the rental price
                      </span>
                    </li>
                  </ul>

                  <h3 className="font-semibold mb-2 mt-6">Excluded</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Deposit: Credit Card EUR 950.00</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Pickup/dropoff out of hours fee</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Insurance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        CDW insurance with refund of the excess including damages to the paintwork such as dents and scratches
                        caused by external forces, theft.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Theft protection with refund of the excess</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Refund of damages to windows, tyres, roof rack, undercoverage, including oil pan and clutch, is
                        included.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Third-party liability insurance as stated in the specific rental conditions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Additional liability insurance of EUR 10 million</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Refund of costs caused by damage or loss of the car keys/papers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Refund of towing costs in case of an accident or technical issues</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Refund of processing fees for damages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CollapsibleSection>

            <div className="card mb-6">
              <h3 className="font-black mb-4">Driver information</h3>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                <FormInput
                  label="First name"
                  id="firstName"
                  type="text"
                  defaultValue="João"
                />
                <FormInput
                  label="Last name"
                  id="lastName"
                  type="text"
                  defaultValue="Marques"
                />
                <FormInput
                  label="ID"
                  id="id"
                  type="text"
                  defaultValue="123456789"
                />
                <FormInput
                  label="Country"
                  id="country"
                  type="text"
                  defaultValue="Portugal"
                />
                <FormInput
                  label="Email address"
                  id="email"
                  type="email"
                  defaultValue="joaommarques@gmail.com"
                />
                <FormInput
                  label="Contact"
                  id="phone"
                  type="tel"
                  defaultValue="+351 999999999"
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="block lg:hidden space-y-6 mb-6">
              <PickupDropoffCard />
              <RentalPriceCard
                dailyPrice={car.price}
                totalDays={totalDays}
                totalPrice={totalPrice}
              />
            </div>

            <div className="rounded-lg p-4 mb-6 bg-gray-200 text-sm">
              <p>
                By clicking 'Confirm and Add', you are confirming that you read and accepted the rental conditions stated
                above and our{" "}
                <a href="#" className="text-blue-500">
                  Terms of Service
                </a>
                .
              </p>
            </div>

            <div className="flex justify-between items-center">
              <BackButton text="Change rental car" />
              <div className="flex gap-2">
                <button className="btn btn-secondary">Cancel</button>
                <button className="btn btn-primary" onClick={() => router.push("/")}>
                  Confirm and Add
                </button>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <aside className="hidden lg:block lg:w-80 w-full flex-shrink-0 space-y-4">
            <PickupDropoffCard />
            <RentalPriceCard
              dailyPrice={car.price}
              totalDays={totalDays}
              totalPrice={totalPrice}
            />
          </aside>
        </div>
      </section>
    </main>
  )
}
