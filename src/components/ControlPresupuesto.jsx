import { useEffect, useState } from 'react';
// Helpers
import {formatearCantidad} from '../helpers';
//Circular progressbar
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function ControlPresupuesto({ presupuesto, setPresupuesto, gastos, setGastos, setIsValidPresupuesto }) {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
        
        setGastado(totalGastado);
        setDisponible(totalDisponible);
        setTimeout(() => { // Le establecemos un delay para ver la animacion de la grafica
            setPorcentaje(nuevoPorcentaje);
        }, 500);
    }, [gastos]);

    const handleResetApp = () => {
        const resultado = confirm('Deseas reiniciar la app?')

        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }
    
    return ( 
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    value={porcentaje}
                    text={`${porcentaje}% gastado`}
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#D62626' : '#3B82F6',
                        trailColor:'#F5F5F5',
                        textColor: porcentaje > 100 ? '#D62626' : '#3B82F6'
                    })}
                />
            </div>
            <div className="contenido-presupuesto">
                <button 
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Resetear app
                </button>
                <p>
                    <span>Presupuesto:</span>{' '}{formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible:</span>{' '}{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado:</span>{' '}{formatearCantidad(gastado)}
                </p>
            </div>
        </div>
     );
}

export default ControlPresupuesto;