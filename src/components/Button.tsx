import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'

const buttonVariants = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 dark:hover:bg-white/5 shadow-none text-zinc-500 dark:text-zinc-700',
      outline:
        'border-zinc-300 border text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, asChild = false, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={buttonVariants({ className, variant })}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
