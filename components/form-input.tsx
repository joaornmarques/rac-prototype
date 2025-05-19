import { InputHTMLAttributes } from "react"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export default function FormInput({ label, id, ...props }: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-1 font-semibold">
        {label}
      </label>
      <input
        id={id}
        className="w-full p-2 border rounded"
        {...props}
      />
    </div>
  )
} 