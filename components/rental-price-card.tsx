import React from 'react'

interface RentalPriceCardProps {
  dailyPrice: number
  totalDays: number
  totalPrice: number
}

export default function RentalPriceCard({
  dailyPrice,
  totalDays,
  totalPrice,
}: RentalPriceCardProps) {
  return (
    <div className="card text-sm">
      <div className="font-black mb-4">Rental price</div>
      <div className="flex justify-between mb-4">
        <span>Daily hire charge</span>
        <span>{dailyPrice}€</span>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between font-semibold text-xl">
        <span>Total for {totalDays} days</span>
        <span>{totalPrice}€</span>
      </div>
    </div>
  )
} 