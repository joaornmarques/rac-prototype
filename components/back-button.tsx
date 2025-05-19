import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface BackButtonProps {
  text: string
}

export default function BackButton({ text }: BackButtonProps) {
  return (
    <Link href="/" className="back-link">
      <ChevronLeft className="h-4 w-4 mr-1" />
      {text}
    </Link>
  )
}
