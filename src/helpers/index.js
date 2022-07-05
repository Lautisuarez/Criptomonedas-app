export const generarId = () => {
    /**
     * Genera un numero ID unico de longitud 19 y lo retorna
     */
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random+fecha;
}

export const formatearCantidad = cant => {
    /** 
     * Formatea el parametro @cant en un formato de moneda argentina
     * @cant -> Number
     */
    return cant.toLocaleString('en-EN',{
        style:'currency',
        currency:'USD'
    })
}

export const formatearFecha = fecha => {
    /**
     * Formatea la @fecha en un formato latinoamericano y lo retorna
     * @fecha -> Date
     */
    const nuevaFecha = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month:'long',
        day:'2-digit'
    }

    return nuevaFecha.toLocaleDateString('es-ES', opciones);
}