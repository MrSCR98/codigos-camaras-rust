export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex h-14 items-center justify-center">
        <div className="text-balance text-center text-sm leading-loose text-muted-foreground text-neutral-700 md:text-left">
          Creado por{' '}
          <a
            href="https://www.youtube.com/@SCR98"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="font-medium underline underline-offset-4"
          >
            SCR98
          </a>
          . Si deseas mejorar la página, el código está disponible en{' '}
          <a
            href="https://github.com/MrSCR98/codigos-camaras-rust"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

// noopener: Evita que la página de destino pueda acceder a la ventana del origen a través de window.opener.
// noreferrer: Evita que se envíen los datos de la referencia (la URL de la página desde donde se hace clic) al sitio de destino.
// nofollow: Si no deseas que los motores de búsqueda sigan el enlace y lo consideren como parte de la estructura del sitio para fines de SEO, puedes usar rel="nofollow".
// Esto le indica a los motores de búsqueda que no sigan este enlace para asignar valor de autoridad al sitio vinculado.

/* "Creado por SCR98. Si deseas mejorar la página, el código está disponible en GitHub." */
/* "Creado por SCR98. Si tienes sugerencias para mejorar la página, el código está en GitHub." */
