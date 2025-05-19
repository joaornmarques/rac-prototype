import React from 'react'

export default function PickupDropoffCard() {
  return (
    <div className="card text-sm">
      <div className="mb-4 border-b pb-4">
        <div className="flex justify-between mb-4">
          <div>
            <div className="font-black mb-1">Pick up</div>
            <div className="mb-1">15 July 2024 at 9 pm</div>
            <div className="font-semibold">Athens (ATH)</div>
          </div>
          <a href="#" className="text-blue-500 text-xs">Show on map</a>
        </div>
        <div className="font-semibold">Pick up station</div>
        <div className="font-medium">Address Line 1</div>
        <div>Address Line 2</div>
      </div>
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <div className="font-black mb-1">Drop off</div>
            <div className="mb-1">22 July 2024 at 9 pm</div>
            <div className="font-semibold">Athens (ATH)</div>
          </div>
          <a href="#" className="text-blue-500 text-xs">Show on map</a>
        </div>
        <div className="font-semibold">Drop off station</div>
        <div className="font-medium">Address Line 1</div>
        <div>Address Line 2</div>
      </div>
    </div>
  )
} 