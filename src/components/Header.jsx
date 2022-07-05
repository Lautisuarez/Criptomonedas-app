// Componentes
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

function Header({   presupuesto, setPresupuesto, 
                    isValidPresupuesto, setIsValidPresupuesto,
                    gastos, setGastos
                }) {
    return ( 
        <header>
            <h1>Planificador de gastos</h1>
            {isValidPresupuesto ? (
                <ControlPresupuesto 
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ): (
                <NuevoPresupuesto 
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}
        </header>
    );
}

export default Header;