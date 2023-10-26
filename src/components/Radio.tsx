import { cn } from '../utils/cn'

export function Radio({
  className,
  children,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <label
      className={cn(
        'inline-flex grow cursor-pointer select-none items-center gap-3 rounded-md border-2 border-base-button bg-base-button fill-purple p-4 text-xs uppercase text-base-text transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-yellow [&:has(input:checked)]:border-purple [&:has(input:checked)]:bg-purple-light',
        className
      )}
    >
      {children}
      <input type="radio" className="hidden" {...props} />
    </label>
  )
}
