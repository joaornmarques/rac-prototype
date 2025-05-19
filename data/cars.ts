export interface Car {
  id: string
  name: string
  category: string
  people: number
  luggage: number
  transmission: string
  imageUrl: string
  price: number
  totalPrice: number
}

export const cars: Car[] = [
  {
    id: "ford-focus",
    name: "Ford Focus",
    category: "All-In/WT or similar",
    people: 4,
    luggage: 2,
    transmission: "Manual",
    imageUrl: "/ford-focus.png",
    price: 22,
    totalPrice: 154,
  },
  {
    id: "renault-twingo-1",
    name: "Renault Twingo",
    category: "Economy or similar",
    people: 4,
    luggage: 2,
    transmission: "Manual",
    imageUrl: "/renault-twingo.png",
    price: 25,
    totalPrice: 175,
  },
  {
    id: "fiat-500e-1",
    name: "Fiat 500e",
    category: "Electric or similar",
    people: 4,
    luggage: 2,
    transmission: "Automatic",
    imageUrl: "/fiat-500.png",
    price: 27,
    totalPrice: 189,
  },
  {
    id: "renault-twingo-2",
    name: "Renault Twingo",
    category: "Economy or similar",
    people: 4,
    luggage: 2,
    transmission: "Manual",
    imageUrl: "/renault-twingo.png",
    price: 25,
    totalPrice: 175,
  },
  {
    id: "fiat-500e-2",
    name: "Fiat 500e",
    category: "Electric or similar",
    people: 4,
    luggage: 2,
    transmission: "Automatic",
    imageUrl: "/fiat-500.png",
    price: 27,
    totalPrice: 189,
  },
  {
    id: "fiat-500",
    name: "Fiat 500",
    category: "Economy or similar",
    people: 4,
    luggage: 2,
    transmission: "Manual",
    imageUrl: "/fiat-500.png",
    price: 22,
    totalPrice: 154,
  },
]
