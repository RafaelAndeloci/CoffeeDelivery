export function RadioLabel(props: any) {
  return (
    <label
      className="inline-flex grow cursor-pointer select-none items-center gap-3 rounded-md border-2 border-base-button bg-base-button fill-purple p-4 text-xs uppercase text-base-text transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-yellow [&:has(input:checked)]:border-purple [&:has(input:checked)]:bg-purple-light"
      {...props}
    />
  )
}

export function RadioInput(props: any) {
  return <input type="radio" className="sr-only" {...props} />
}
