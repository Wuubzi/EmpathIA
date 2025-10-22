'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        'border-b border-purple-100 last:border-b-0 dark:border-purple-900 transition-colors',
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          // Layout & interaction
          'flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium outline-none rounded-md transition-all',

          // Text colors
          'text-gray-800 dark:text-gray-100',

          // Hover & focus states (EmpathIA purple)
          'hover:text-[#631973] hover:underline focus-visible:ring-2 focus-visible:ring-[#631973]/40 focus-visible:ring-offset-2',

          // Disabled & open states
          'disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',

          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className="text-[#631973]/70 dark:text-[#b87be6] pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        'overflow-hidden text-sm text-gray-700 dark:text-gray-200 transition-all',
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
      )}
      {...props}
    >
      <div className={cn('pt-0 pb-4 pl-1', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
