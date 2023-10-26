import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Coffee } from '../@types/Coffee'
import { CartItem } from '../@types/CartItem'

//Get method to db
async function getCart() {
  return fetch('http://localhost:3333/cart').then(res => res.json())
}

//Post method to db
async function createCartItem(payload: { quantity: number; product: Coffee }) {
  return fetch('http://localhost:3333/cart/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(res => res.json())
}

//Patch method to db
async function updateCartItem(id: number, quantity: number) {
  return fetch('http://localhost:3333/cart/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ quantity }),
  }).then(res => res.json)
}

//Our hook
export function useCart() {
  const queryClient = useQueryClient()

  const result = useQuery<CartItem[]>({
    queryKey: ['cart'],
    queryFn: getCart,
  })

  //Our function that we will expose for adding Coffe to cart logic
  //Using useMutation
  const addToCart = useMutation({
    //Here we are defining a payload that will be what we want to send
    //So our payload have a quantity and the product object that is a coffee
    mutationFn: (payload: { quantity: number; product: Coffee }) => {
      //Verifiyng if the item we want to add already exists in cart
      const hasItem = result.data?.find(
        item => item.product.id === payload.product.id
      )

      //If we have we will use the updateCartItem adding the quantity to the item
      //If we dont have we will create
      return hasItem
        ? updateCartItem(hasItem.id, hasItem.quantity + payload.quantity)
        : createCartItem(payload)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })

  return { addToCart, ...result }
}
