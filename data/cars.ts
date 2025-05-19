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
    id: "renault-twingo",
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
    id: "fiat-500e",
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
    id: "peugeot-208",
    name: "Peugeot 208",
    category: "Economy sedan or similar",
    people: 4,
    luggage: 2,
    transmission: "Manual",
    imageUrl: "/peugeot-208.png",
    price: 25,
    totalPrice: 175,
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
  {
    id: "citroen-c3",
    name: "Citroen C3",
    category: "Compact SUV or similar",
    people: 4,
    luggage: 2,
    transmission: "Automatic",
    imageUrl: "/citroen-c3.png",
    price: 27,
    totalPrice: 189,
  },
]
