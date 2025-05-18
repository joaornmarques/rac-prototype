"use client"

import type { ReactNode } from "react"

interface CollapsibleSectionProps {
  title: string
  children: ReactNode
  isOpen: boolean
  onToggle: () => void
}

export default function CollapsibleSection({ title, children, isOpen, onToggle }: CollapsibleSectionProps) {
  return (
    <div className="card mb-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
        <h3 className="font-semibold">{title}</h3>
        <button className="text-blue-500 text-sm font-medium flex items-center">
          {isOpen ? "Less info" : "More info"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  )
}
