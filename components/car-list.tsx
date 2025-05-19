"use client"

import Link from "next/link"
import Image from "next/image"
import { User, Briefcase, Settings } from "lucide-react"
import { cars } from "@/data/cars"

export function CarList() {
  const totalDays = 7

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cars.map((car) => (
        <div key={car.id} className="card">
          <div className="flex flex-col">
            <div className="mb-2">
              <h3 className="text-lg font-black">{car.name}</h3>

              <div className="flex flex-wrap gap-x-2 gap-y-2 my-3 text-xs">
                <div className="flex items-center border-r pr-2">
                  <User className="h-4 w-4 mr-1" />
                  {car.people} people
                </div>
                <div className="flex items-center border-r pr-2">
                  <Briefcase className="h-4 w-4 mr-1" />
                  {car.luggage} luggage
                </div>
                <div className="flex items-center">
                  <Settings className="h-4 w-4 mr-1" />
                  {car.transmission}
                </div>
              </div>
            </div>

            <div className="relative flex-grow h-40 my-3">
              <Image src={car.imageUrl || "/placeholder.svg"} alt={car.name} fill style={{ objectFit: "contain" }} />
            </div>

            <div className="flex justify-between items-center border-t pt-5">
              <div>
                <span className="text-xl font-black">{car.price}€</span>
                <span className="text-sm text-gray-500"> / Day</span>
                <div className="text-xs text-gray-500">{car.price * totalDays}€ Total</div>
              </div>
              <Link href={`/car/${car.id}`} className="btn btn-secondary">
                Continue
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
