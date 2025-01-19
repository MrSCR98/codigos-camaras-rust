'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'
import { type ReactNode, useState } from 'react'

interface InfoTooltipProps {
  codigo: string
  urlImagen: string
  children: ReactNode
}

export function MostrarImagenCamara({
  codigo,
  urlImagen,
  children,
}: InfoTooltipProps) {
  const [open, setOpen] = useState(false)
  const [isLoadingImg, setIsLoadingImg] = useState(true)

  const handleImageLoad = () => {
    setIsLoadingImg(false) // Ocultar spinner cuando la imagen termine de cargar
  }

  const handleImageError = () => {
    setIsLoadingImg(false) // Ocultar spinner también si hay un error
  }

  /*   
    const handleTriggerClick = (event: React.MouseEvent) => {
      const selection = window.getSelection()
      if (selection && selection.toString().length > 0) {
        // Si hay texto seleccionado, no abrir el Popover
        event.preventDefault()
        return
      }
      setOpen((prev) => !prev)
    } 
    */

  const handleContentClick = () => {
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        // onClick={handleTriggerClick}
        // Enseñar y quitar imagen al hacer hover
        // onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
        asChild
      >
        {/* 
          <div className="cursor-pointer w-full select-none inline-flex items-center px-4 my-[1px] whitespace-nowrap ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-10 rounded-2xl">
            {children}
          </div> 
          */}
        <button className="w-full">{children}</button>
      </PopoverTrigger>
      <PopoverContent
        className="px-2 py-2 text-sm rounded-2xl w-full max-w-[380px] mx-4 cursor-pointer relative"
        onClick={handleContentClick}
      >
        {isLoadingImg && (
          <div className="absolute inset-0 m-2 flex items-center justify-center bg-neutral-50 rounded-[0.5rem]">
            {/* <Loader
                className="animate-spin-slow w-16 h-16 stroke-neutral-300"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              /> */}
            <LoaderCircle
              className="animate-spin-0.9 w-16 h-16 stroke-neutral-300"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>
        )}
        <img
          src={urlImagen}
          alt={codigo}
          loading="lazy"
          decoding="async"
          className={cn(
            'aspect-[16/9] w-[410px] h-full rounded-[0.5rem] saturate-150 transition-opacity',
            isLoadingImg ? 'opacity-0' : 'opacity-100'
          )}
          draggable="false"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        <div className="absolute inset-0 w-full h-full p-4">
          <div className="aspect-[16/9] w-full h-full rounded-[0.25rem] outline-dashed outline-2 outline-offset-0 outline-[hsl(var(--input))]"></div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
