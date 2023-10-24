import { Minus, Plus } from '@phosphor-icons/react'

export function Quantity() {
  return (
    <div className="inline-flex items-center gap-1 rounded-md bg-base-button p-1">
      <button
        type="button"
        className="bg-transparent rounded p-1 leading-none text-purple disabled:opacity-30"
        aria-label="Diminuir quantidade"
      >
        <Minus size={14} />
      </button>

      <span className="text-base tabular-nums leading-none text-base-title">
        1
      </span>

      <button
        type="button"
        className="bg-transparent rounded p-1 leading-none text-purple disabled:opacity-30"
        aria-label="Aumentar quantidade"
      >
        <Plus size={14} />
      </button>

      <input type="hidden" name="quantity" defaultValue={1} />
    </div>
  )
}
