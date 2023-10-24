import { useQuery } from '@tanstack/react-query'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  category: string[]
}

async function getProducts() {
  return fetch('http://localhost:3333/product').then(res => res.json())
}

export function useProducts() {
  const result = useQuery<Product[]>({
    queryKey: ['product'],
    queryFn: getProducts,
  })

  return result
}
