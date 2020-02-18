// credits by https://desarrolloweb.com/articulos/2005.php
// functions to create hexadecimal number

const aleatorio = (inferior,superior) => {
    const numPosibilidades = superior - inferior
    let aleat = Math.random() * numPosibilidades
    aleat = Math.floor(aleat)
    return parseInt(inferior) + aleat
}

export const decimalToHex = () => {
    const hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
    let color_aleatorio = "#";
    for (let i=0;i<6;i++){
        const posarray = aleatorio(0,hexadecimal.length)
        color_aleatorio += hexadecimal[posarray]
    }
    return color_aleatorio
}