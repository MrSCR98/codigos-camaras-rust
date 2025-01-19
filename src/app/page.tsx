import TarjetaMonumento from '@/components/monumento/tajeta'
import { listaMonumentos } from '@/lib/codigos-camaras/codigos'

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid items-center min-h-screen my-4">
      <section
        /* className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-16" */
        className="columns-1 sm:columns-2 lg:columns-3 gap-16 space-y-4"
      >
        {listaMonumentos.map((monumento) => (
          <TarjetaMonumento key={monumento.id} monumento={monumento} />
        ))}
      </section>
    </main>
  )
}
