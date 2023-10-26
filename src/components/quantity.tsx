import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

export function Quantity({ defaultValue = 1 }: { defaultValue?: number }) {
  const [quantity, useQuantity] = useState(defaultValue)
  return (
    <div className="inline-flex items-center gap-1 rounded-md bg-base-button p-1">
      <button
        type="button"
        className="bg-transparent rounded p-1 leading-none text-purple disabled:opacity-30"
        aria-label="Diminuir quantidade"
        onClick={() => useQuantity(quantity - 1)}
      >
        <Minus size={14} />
      </button>

      <span className="text-base tabular-nums leading-none text-base-title">
        {quantity}
      </span>

      <button
        type="button"
        className="bg-transparent rounded p-1 leading-none text-purple disabled:opacity-30"
        aria-label="Aumentar quantidade"
        onClick={() => useQuantity(quantity + 1)}
      >
        <Plus size={14} />
      </button>

      <input type="hidden" name="quantity" defaultValue={quantity} />
    </div>
  )
}
