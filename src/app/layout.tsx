import { GridPattern } from '@/components/fondo/grid-pattern'
import Footer from '@/components/footer/footer'
import NavBar from '@/components/navbar/navbar'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Códigos Cámaras Rust',
  description:
    'Todos los Códigos de las Cámaras CCTV / Terminal Informático de Rust',

  // generator: 'Next.js',
  applicationName: 'Códigos Cámaras Rust',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Códigos',
    'Cámaras',
    'Rust',
    'CCTV',
    'Terminal Informático',
    'Codigos',
    'Camaras',
  ],
  authors: [{ name: 'SCR98', url: 'https://www.youtube.com/@SCR98' }],
  creator: 'SCR98',
  publisher: 'SCR98',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL('https://codigos-camaras-rust.pages.dev'),

  // alternates: {
  //   canonical: '/',
  //   languages: {
  //     'en-US': '/en-US',
  //     'de-DE': '/de-DE',
  //   },
  // },

  /*   
  alternates: {
    canonical: 'https://nextjs.org',
    languages: {
      'en-US': 'https://nextjs.org/en-US',
      'de-DE': 'https://nextjs.org/de-DE',
    },
    media: {
      'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
    },
    types: {
      'application/rss+xml': 'https://nextjs.org/rss',
    },
  }, 
  */

  openGraph: {
    title: 'Códigos Cámaras Rust',
    description:
      'Todos los Códigos de las Cámaras CCTV / Terminal Informático de Rust',
    url: 'https://codigos-camaras-rust.pages.dev',
    siteName: 'Códigos Cámaras Rust',
    images: [
      {
        url: 'https://codigos-camaras-rust.pages.dev/opengraph/og.jpg', // Must be an absolute URL
        width: 1200,
        height: 630,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: 'es_ES',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    // nocache: true,
    googleBot: {
      index: true,
      follow: true,
      // noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // manifest: 'https://nextjs.org/manifest.json',

  twitter: {
    card: 'summary_large_image',
    title: 'Códigos Cámaras Rust',
    description:
      'Todos los Códigos de las Cámaras CCTV / Terminal Informático de Rust',
    // siteId: '1467726470533754880',
    // creator: '@nextjs',
    // creatorId: '1467726470533754880',
    images: ['https://codigos-camaras-rust.pages.dev/opengraph/og.jpg'], // Must be an absolute URL
    /* 
    images: {
      url: 'https://nextjs.org/og.png',
      alt: 'Next.js Logo',
    }, 
    */
  },

  // verification: {
  //   google: 'google',
  //   yandex: 'yandex',
  //   yahoo: 'yahoo',
  //   other: {
  //     me: ['my-email', 'my-link'],
  //   },
  // },

  // assets: ['https://nextjs.org/assets'],
  // bookmarks: ['https://nextjs.org/13'],
  category: 'rust-cctv-codes',

  icons: {
    icon: [
      // { url: '/favicon_16x16.ico', type: 'image/x-icon', sizes: '16x16' },
      // { url: '/favicon_32x32.ico', type: 'image/x-icon', sizes: '32x32' },
      // { url: '/favicon_48x48.ico', type: 'image/x-icon', sizes: '48x48' },
      // { url: '/favicon_64x64.ico', type: 'image/x-icon', sizes: '64x64' },
      // { url: '/favicon_128x128.ico', type: 'image/x-icon', sizes: '128x128' },
      { url: '/favicon_256x256.ico', type: 'image/x-icon', sizes: '256x256' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f5f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
        {/*         <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className="fixed top-0 -z-10 fill-orange-400/30"
        /> */}
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={'4 2'}
          className="fixed top-0 -z-10 [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
        />
      </body>
    </html>
  )
}
