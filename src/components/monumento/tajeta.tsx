import { BotonCopiar } from '@/components/ui/copiar-al-portapapeles'
import { InfoTooltip } from '@/components/ui/info-tooltip'
import { MostrarImagenCamara } from '@/components/ui/mostrar-imagen-camara'
import { type Monumento } from '@/lib/codigos-camaras/codigos'

interface TarjetaMonumentoProps {
  monumento: Monumento
}

export default function TarjetaMonumento({ monumento }: TarjetaMonumentoProps) {
  return (
    <article className="space-y-4 break-inside-avoid">
      <header className="space-y-4">
        {monumento.descripcion === undefined ? (
          <h2 className="text-center text-xl font-semibold">
            {monumento.titulo}
          </h2>
        ) : (
          <h2 className="text-center text-xl font-semibold space-x-2 text-balance">
            <span>{monumento.titulo}</span>
            <InfoTooltip
              className="translate-y-1"
              texto={monumento.descripcion}
            />
          </h2>
        )}
        <img
          src={monumento.foto}
          alt={monumento.titulo}
          loading="lazy"
          decoding="async"
          className="select-none aspect-[16/9] w-full h-full rounded-2xl shadow-lg border border-input outline-dashed outline-2 outline-offset-[-8px] outline-[hsl(var(--input))] saturate-150"
          draggable="false"
        />
      </header>
      <main className="space-y-4">
        {monumento.codigos.map((codigo) => (
          <div key={codigo.codigo} className="flex flex-col space-y-4">
            <BotonCopiar texto={codigo.codigo}>
              <MostrarImagenCamara
                codigo={codigo.codigo}
                urlImagen={codigo.imagen}
              >
                <span className="text-sm font-medium inline-flex items-center px-4 my-[1px] whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border border-input bg-background hover:text-accent-foreground w-full h-10 rounded-2xl">
                  {codigo.codigo}
                </span>

                {/* <span className="select-text text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:text-accent-foreground">
                  {codigo.codigo}
                </span> */}
              </MostrarImagenCamara>
            </BotonCopiar>
          </div>
        ))}
      </main>
    </article>
  )
}
