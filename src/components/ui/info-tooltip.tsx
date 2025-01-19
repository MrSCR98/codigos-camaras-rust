'use client'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'
import { useState } from 'react'

interface InfoTooltipProps {
  texto: string
  className?: string
}

export function InfoTooltip({ texto, className }: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild>
          <div
            onClick={() => setIsOpen(!isOpen)}
            // onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={cn(
              'inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 border border-input bg-background [@media(pointer:coarse)]:hover:bg-background hover:bg-accent hover:text-accent-foreground disabled:opacity-100 rounded-2xl h-5 w-5 m-[1px] flex-shrink-0 cursor-pointer',
              className
            )}
          >
            <Info width={16} height={16} strokeWidth={2} aria-hidden="true" />
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          align="center"
          className="px-4 py-3 text-sm rounded-2xl max-w-[380px] mx-4 text-left font-normal text-wrap"
        >
          {texto}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
