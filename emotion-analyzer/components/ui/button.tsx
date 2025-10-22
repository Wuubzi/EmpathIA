import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles comunes
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // 🟣 Primario: color morado principal EmpathIA
        default:
          'bg-[#631973] text-white hover:bg-[#7a1d8a] focus-visible:ring-[#631973]/40 active:bg-[#50155e]',

        // 🔴 Destructivo: para acciones de eliminación
        destructive:
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500/40 active:bg-red-800',

        // ⚪ Outline: fondo claro con borde morado
        outline:
          'border border-[#631973] text-[#631973] bg-transparent hover:bg-[#f8f1fb] dark:hover:bg-[#2b0a33] focus-visible:ring-[#631973]/40',

        // 🟣 Secundario: tonos lavanda más suaves
        secondary:
          'bg-[#e7d6ef] text-[#3b0e47] hover:bg-[#d8b9e7] focus-visible:ring-[#631973]/30 dark:bg-[#3b0e47] dark:text-[#e7d6ef] dark:hover:bg-[#4a145a]',

        // 👻 Ghost: minimalista, solo cambia con hover
        ghost:
          'text-[#631973] hover:bg-[#f8f1fb] hover:text-[#4a145a] dark:text-[#e7d6ef] dark:hover:bg-[#2b0a33]',

        // 🔗 Enlace: texto estilo link
        link: 'text-[#631973] underline-offset-4 hover:underline hover:text-[#4a145a]',
      },

      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
