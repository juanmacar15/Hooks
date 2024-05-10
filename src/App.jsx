import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [datos, setDatos] = useState([]);

  const cambiarEmpleado = () => {
    const URL = 'https://randomuser.me/api/?results=1'

    const peticion = fetch(URL);

    peticion
      .then( datos => datos.json() )

      .then( lectura => {
        lectura.results.map( (persona) => {
          setDatos( () =>
              /*se agrega el spread operatorm [...e] ('e' es el valor de setDatos que seria datos) para que copie el array que esta vacio y añada el resto de la info*/
            <div key={persona.email} className='card'>
              <div>
                <h4>{persona.name.first} {persona.name.last}</h4>
              </div>
              <div>
                <img src={persona.picture.large} />
              </div>
            </div>)
        })
      })
      .catch(() => console.log('Se ha producido un error'))
  }

  useEffect(() => {
    cambiarEmpleado();

  }, [])




  return (
    <>
      <h1>Empleados del mes</h1>
      <div className='caja'>
        {datos}
      </div>
      <div className='btn'>
      <button onClick={cambiarEmpleado}>Siguiente Empleado</button>
      </div>

    </>
  )
}

export default App
