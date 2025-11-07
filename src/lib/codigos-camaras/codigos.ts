/* 
type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}
*/
/* 
type Prettify<T> = {
  [K in keyof T]: T[K] extends object ? Prettify<T[K]> : T[K]
} 
*/
type Expand<T> = T extends infer O ? { [K in keyof O]: Expand<O[K]> } : never

// Interfaz para encapsular las propiedades de un monumento
interface PropiedadesMonumento {
  id: number
  titulo: string
  subRuta: string // Carpeta donde están las imágenes del monumento
  codigos: string[] // Nombres de los códigos asociados al monumento
}

// Tipo para los códigos de cada cámara
interface Codigo {
  codigo: string
  imagen: string
}

// Tipo para cada monumento
export interface Monumento {
  id: number
  titulo: string
  descripcion?: string // Campo opcional
  foto: string
  codigos: Codigo[]
}

// Rutas Imagenes public/
const RUTA_BASE_CODIGOS_CAMARAS = 'CODIGOS-CAMARAS/'

// Función para generar la ruta de la imagen del código
const generarRutaImagen = (subRuta: string, codigo: string): string =>
  `${RUTA_BASE_CODIGOS_CAMARAS}${subRuta}/${codigo}.webp`

// Función para generar la ruta de la imagen principal
const generarUrlImagenPrincipal = (subRuta: string): string =>
  `${RUTA_BASE_CODIGOS_CAMARAS}${subRuta}/PRINCIPAL.webp`

// Generar los códigos con sus rutas de imágenes
const generarCodigosConImagen = (
  subRuta: string,
  codigos: string[]
): Codigo[] =>
  codigos.map((codigo) => ({
    codigo,
    imagen: generarRutaImagen(subRuta, codigo),
  }))

// Función para construir un monumento automáticamente con la información proporcionada
const construirMonumento = ({
  id,
  titulo,
  subRuta,
  codigos,
  descripcion,
}: PropiedadesMonumento & { descripcion?: string }): Monumento => ({
  id: id,
  titulo,
  foto: generarUrlImagenPrincipal(subRuta),
  codigos: generarCodigosConImagen(subRuta, codigos),
  ...(descripcion ? { descripcion } : {}),
})

// Lista de monumentos con códigos
export const listaMonumentos: Expand<Monumento[]> = [
  {
    titulo: 'Gran Plataforma Petrolífera',
    subRuta: 'PETRO-GRANDE',
    codigos: [
      'OILRIG2HELI',
      'OILRIG2DOCK',
      'OILRIG2EXHAUST',
      'OILRIG2L1',
      'OILRIG2L2',
      'OILRIG2L3A',
      'OILRIG2L3B',
      'OILRIG2L4',
      'OILRIG2L5',
      'OILRIG2L6A',
      'OILRIG2L6B',
      'OILRIG2L6C',
      'OILRIG2L6D',
    ],
  },
  {
    titulo: 'Plataforma Petrolífera',
    subRuta: 'PETRO-PEQUENYA',
    codigos: [
      'OILRIG1HELI',
      'OILRIG1DOCK',
      'OILRIG1L1',
      'OILRIG1L2',
      'OILRIG1L3',
      'OILRIG1L4',
    ],
  },
  {
    titulo: 'La Cúpula',
    subRuta: 'LA-CUPULA',
    codigos: ['DOME1', 'DOMETOP'],
  },
  {
    titulo: 'Silo Misilístico',
    subRuta: 'SILO-MISILISTICO',
    codigos: [
      'SILOEXIT1',
      'SILOEXIT2',
      'SILOMISSILE',
      'SILOSHIPPING',
      'SILOTOWER',
    ],
  },
  {
    titulo: 'Aeródromo',
    subRuta: 'AEROPUERTO',
    codigos: ['AIRFIELDHELIPAD'],
  },
  {
    titulo: 'Radtown',
    subRuta: 'RADTOWN',
    codigos: ['RADTOWNHOUSE', 'RADTOWNSBL', 'RADTOWNAPARTMENTS'],
  },
  {
    titulo: 'Terminal del Transbordador',
    subRuta: 'TERMINAL-DEL-TRANSBORDADOR',
    // codigos: ['COBALT1'],
    codigos: ['FERRYDOCK', 'FERRYPARKING', 'FERRYUTILITIES', 'FERRYLOGISTICS'],
  },
  {
    titulo: 'Ruinas',
    subRuta: 'OUTPOST',
    codigos: [
      'COMPOUNDSTREET',
      'COMPOUNDMUSIC',
      'COMPOUNDCRUDE',
      'COMPOUNDCHILL',
    ],
  },
  {
    titulo: 'Campamento de Bandoleros',
    subRuta: 'BANDIT',
    codigos: ['CASINO', 'TOWNWEAPONS'],
  },
  {
    titulo: 'Buque de carga',
    subRuta: 'CARGO',
    codigos: [
      'CARGODECK',
      'CARGOBRIDGE',
      'CARGOSTERN',
      'CARGOHOLD1',
      'CARGOHOLD2',
    ],
  },
  {
    titulo: 'Base Militar Abandonada',
    descripcion:
      'Estos códigos son diferentes, pero siempre comienzan con los mismos patrones. Deberás encontrar el terminal informático si está y revisar los códigos, allí verás una versión completa, donde al patrón inicial se le añaden números al final, como "COMPOUND187956" o "OUTDOOR72624".',
    subRuta: 'BASE-MILITAR-ABANDONADA',
    codigos: ['COMPOUND', 'OUTDOOR'],
  },
  {
    titulo: 'Laboratorio Submarino',
    descripcion:
      'Estos códigos son diferentes, pero siempre comienzan con los mismos patrones. Deberás encontrar el terminal informático si está y revisar los códigos, allí verás una versión completa, donde al patrón inicial se le añaden números al final, como "LAB1231" o "LOCKERROOM1246".',
    subRuta: 'LABORATORIO-SUBMARINO',
    codigos: [
      'AUXPOWER',
      'BRIG',
      'CANTINA',
      'CAPTAINQUARTER',
      'CLASSIFIED',
      'CREWQUARTERS',
      'HALLWAY',
      'INFIRMARY',
      'LAB',
      'LOCKERROOM',
      'OPERATIONS',
      'SECURITYHALL',
      'SPECTRE',
      'TECHCABINET',
    ],
  },
  {
    titulo: 'Metro',
    descripcion:
      'Estos códigos son diferentes, pero siempre comienzan con los mismos patrones. Deberás encontrar el terminal informático si está y revisar los códigos, allí verás una versión completa, donde al patrón inicial se le añaden números al final, como "OUTDOOR1231".',
    subRuta: 'METRO',
    codigos: ['OUTDOOR'],
  },
].map((monumentoInfo, index) =>
  construirMonumento({ ...monumentoInfo, id: index + 1 })
)
// ].map(monumentoInfo => construirMonumento(monumentoInfo)) // Añadir el id manualmente a cada objeto

/* 
Gran Plataforma Petrolífera / Large Oil Rig x
OILRIG2HELI
OILRIG2DOCK
OILRIG2EXHAUST
OILRIG2L1
OILRIG2L2
OILRIG2L3A
OILRIG2L3B
OILRIG2L4
OILRIG2L5
OILRIG2L6A
OILRIG2L6B
OILRIG2L6C
OILRIG2L6D 

Plataforma Petrolífera / Small Oil Rig x
OILRIG1HELI
OILRIG1DOCK
OILRIG1L1
OILRIG1L2
OILRIG1L3
OILRIG1L4 

La Cúpula / Dome X
DOME1
DOMETOP

Silo Misilístico / Nuclear Missile Silo x
SILOEXIT1
SILOEXIT2
SILOMISSILE
SILOSHIPPING
SILOTOWER

Aeródromo / Airfield / AEROPUERTO
AIRFIELDHELIPAD
AIRFIELDGARAGE X

Radtown x
RADTOWNHOUSE
RADTOWNSBL
RADTOWNAPARTMENTS

Terminal del Transbordador / Ferry Terminal x
COBALT1 5707

5710 assets/prefabs/deployable/cctvcamera/cctv.static.prefab 
5708 assets/prefabs/deployable/cctvcamera/cctv.static.prefab 
5709 assets/prefabs/deployable/cctvcamera/cctv.static.prefab 

Ruinas / Outpost x
COMPOUNDSTREET
COMPOUNDMUSIC
COMPOUNDCRUDE
COMPOUNDCHILL

Campamento de Bandoleros / Bandit Camp x
CASINO
TOWNWEAPONS

Base Militar Abandonada / Abandoned Military Base
x COMPOUND*****
- OUTDOOR*****

Laboratorio Submarino / Underwater Labs
x AUXPOWER****
x BRIG****
x CANTINA****
x CAPTAINQUARTER****
- CLASSIFIED**** 
x CREWQUARTERS****
- HALLWAY****
x INFIRMARY****
x LAB****
x LOCKERROOM****
x OPERATIONS****
- SECURITYHALL****
- TECHCABINET****
+ SPECTRE
*/
