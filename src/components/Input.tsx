import { cn } from '../utils/cn'

export function Input({ optional, error, className, ...props }: any) {
  return (
    <div className={cn('relative inline', className)}>
      <input
        className="w-full rounded border border-base-button bg-base-input p-3 text-sm text-base-text placeholder:text-base-label"
        {...props}
        aria-invalid={error ? 'true' : 'false'}
      />
      {optional && (
        <span className="pointer-events-none absolute bottom-0 right-3 top-1/2 -translate-y-1/2 text-xs italic leading-6 text-base-label">
          Opcional
        </span>
      )}
      {error && (
        <p className="mt-2 pl-[0.125rem] text-xs text-yellow-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export const CepInput = Input
