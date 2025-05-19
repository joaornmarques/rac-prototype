"use client"

import type { ReactNode } from "react"
import { ChevronDown } from "lucide-react"

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
        <h3 className="font-black">{title}</h3>
        <button className="text-blue-500 text-sm font-medium flex items-center">
          {isOpen ? "Less info" : "More info"}
          <ChevronDown className={`h-5 w-5 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>
      {isOpen && <div className="mt-6 bg-gray-100 -mx-6 -mb-6 p-6 rounded-b-lg">{children}</div>}
    </div>
  )
}
