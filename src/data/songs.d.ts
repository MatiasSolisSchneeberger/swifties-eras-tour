export interface tarjetasCanciones {
    eras: Array<eras>
}

interface eras {
    "albums": string
    "logo": string
    "foto": string
    "emojie": string
    "fondo": string
    "disco": string
    "Spotify": string
    "anterior": string
    "siguiente": string
    "linkPage": string
    "canciones": Array<canciones>
    "extras": Array<extras>
    "notas": Array<notas>
}

interface canciones{
    title: string
    info: Array<info>
    cantado: boolean
    etiquetas: Array<etiquetas>
}
interface extras{
    title: string
    info: Array<info>
    fechas: Array<fechas>
    etiquetas: Array<etiquetas>
}

interface notas{
    nota: string
}

interface etiquetas{
    principal: string
    segundo: string
    tercero: string
    cuarto: string
    quinto: string
    sexto: string
}

interface info{
    tipo: string | null
    fecha: Array<fecha>
    cantSorp: string | null
    instrumento: string | null
    lugar: string | null
}

interface fecha{
    dia: number | null
    mes: number | null
    año: number | null
}