'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import { type ReactNode, useState } from 'react'

interface CopyButtonProps {
  texto: string
  children: ReactNode
}

export function BotonCopiar({ texto, children }: CopyButtonProps) {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(texto)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="flex items-center">
      {/* 
      <span className="text-sm font-medium inline-flex items-center px-4 my-[1px] whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border border-input bg-background hover:text-accent-foreground w-full h-10 rounded-2xl">
        {texto}
      </span> 
      */}
      {children}
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleCopy}
              variant="outline"
              size="icon"
              className="disabled:opacity-100 rounded-2xl h-10 w-10 m-[1px] flex-shrink-0 mr-0 ml-2"
              aria-label={copied ? 'Copiado' : 'Copiar al portapapeles'}
              disabled={copied}
            >
              <div
                className={cn(
                  'transition-all',
                  copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                )}
              >
                <Check
                  className="stroke-emerald-500"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
              <div
                className={cn(
                  'absolute transition-all',
                  copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                )}
              >
                <Copy size={16} strokeWidth={2} aria-hidden="true" />
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent
            align="center"
            className="px-2 py-1 text-xs rounded-2xl mx-4 [@media(pointer:coarse)]:hidden select-none"
          >
            Copiar al portapapeles
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
