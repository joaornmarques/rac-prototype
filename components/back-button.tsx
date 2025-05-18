import Link from "next/link"

interface BackButtonProps {
  text: string
}

export default function BackButton({ text }: BackButtonProps) {
  return (
    <Link href="/" className="back-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {text}
    </Link>
  )
}
