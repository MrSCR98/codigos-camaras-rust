# Códigos Cámaras Rust

### Todos los Códigos de las Cámaras CCTV / Terminal Informático de Rust

## Gran Plataforma Petrolífera / Large Oil Rig

- OILRIG2HELI
- OILRIG2DOCK
- OILRIG2EXHAUST
- OILRIG2L1
- OILRIG2L2
- OILRIG2L3A
- OILRIG2L3B
- OILRIG2L4
- OILRIG2L5
- OILRIG2L6A
- OILRIG2L6B
- OILRIG2L6C
- OILRIG2L6D

## Plataforma Petrolífera / Small Oil Rig

- OILRIG1HELI
- OILRIG1DOCK
- OILRIG1L1
- OILRIG1L2
- OILRIG1L3
- OILRIG1L4

## La Cúpula / Dome X

- DOME1
- DOMETOP

## Silo Misilístico / Nuclear Missile Silo

- SILOEXIT1
- SILOEXIT2
- SILOMISSILE
- SILOSHIPPING
- SILOTOWER

## Aeródromo / Airfield / AEROPUERTO

- AIRFIELDHELIPAD
- ~~AIRFIELDGARAGE~~ // no existe

## Radtown

- RADTOWNHOUSE
- RADTOWNSBL
- RADTOWNAPARTMENTS

## Terminal del Transbordador / Ferry Terminal

- FERRYDOCK
- FERRYPARKING
- FERRYUTILITIES
- FERRYLOGISTICS
- ~~COBALT1~~ // ID carama dentro del juego 5707

## Buque de carga / Cargo

- CARGODECK
- CARGOBRIDGE
- CARGOSTERN
- CARGOHOLD1
- CARGOHOLD2

---

**Creo que aquí están todos los id de las camaras.**

- 5708 assets/prefabs/deployable/cctvcamera/cctv.static.prefab
- 5709 assets/prefabs/deployable/cctvcamera/cctv.static.prefab
- 5710 assets/prefabs/deployable/cctvcamera/cctv.static.prefab

## Ruinas / Outpost

- COMPOUNDSTREET
- COMPOUNDMUSIC
- COMPOUNDCRUDE
- COMPOUNDCHILL

## Campamento de Bandoleros / Bandit Camp

- CASINO
- TOWNWEAPONS

## Base Militar Abandonada / Abandoned Military Base

- COMPOUND**\***
- OUTDOOR**\*** // no encontrado

## Laboratorio Submarino / Underwater Labs

- AUXPOWER\*\*\*\*
- BRIG\*\*\*\*
- CANTINA\*\*\*\*
- CAPTAINQUARTER\*\*\*\*
- CLASSIFIED\*\*\*\* // no encontrado
- CREWQUARTERS\*\*\*\*
- HALLWAY\*\*\*\* // no encontrado
- INFIRMARY\*\*\*\*
- LAB\*\*\*\*
- LOCKERROOM\*\*\*\*
- OPERATIONS\*\*\*\*
- SECURITYHALL\*\*\*\* // no encontrado
- SPECTRE
- TECHCABINET\*\*\*\* // no encontrado

## Metro

- OUTDOOR\*\*\*\*

Este repositorio contiene una recopilación de códigos para las cámaras CCTV de los diferentes monumentos en el juego **Rust**. Además, incluye instrucciones para contribuir y personalizar el proyecto.

## 🚀 Cómo comenzar

### Sigue estos pasos para configurar el proyecto localmente:

Primero, instala las dependencias necesarias:

```cmd
npm i
```

Luego, inicia el servidor de desarrollo:

```cmd
npm run dev
```

## 🌐 Accede al sitio web

Puedes visitar el sitio web en el siguiente enlace: **[https://codigos-camaras-rust.pages.dev](https://codigos-camaras-rust.pages.dev)**

---

## 🤝 ¿Quieres ayudar?

### Cómo contribuir

Si conoces más códigos que no estén en la lista o en la web, puedes ayudarnos contribuyendo con ellos.

Ejemplo de la estructura del archivo `codigos.ts`:

```ts
// src\lib\codigos-camaras\codigos.ts

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
    codigos: ['COBALT1'],
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
].map((monumentoInfo, index) =>
  construirMonumento({ ...monumentoInfo, id: index + 1 })
)
```

Una vez que hayas realizado tus cambios, envía un **Pull Request (PR)** con tus modificaciones.

---

## 🎨 ¿Quieres mejorar el diseño?

Si tienes ideas para mejorar el diseño del sitio web (por ejemplo, un fondo más atractivo o una interfaz más funcional), no dudes en contribuir. Recuerda que el enfoque principal es mantenerlo **simple**, **funcional** y **rápido de usar**.

---

## 💡 Créditos y agradecimientos

Este proyecto es una web diseñada para facilitar la búsqueda de códigos de las cámaras en Rust. Agradecemos cualquier contribución que ayude a mejorar su funcionalidad y diseño.

---

¡Gracias por contribuir y formar parte de esta comunidad! 🌟
