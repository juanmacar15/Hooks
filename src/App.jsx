import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');


  useEffect(() => {
    const URL = 'https://randomuser.me/api/'
    const peticion = fetch(URL);
    peticion
      .then(datos => datos.json())
      .then(lectura => {
        setNombre(`${lectura.results[0].name.first} ${lectura.results[0].name.last}`)
        setImagen(lectura.results[0].picture.medium)
      })
      .catch(() => console.log('Se ha producido un error'))
  }, [])




  return (
    <>
      <h1>Empleado del mes</h1>
      {nombre}
      <div>
        <img src={imagen} />
      </div>
    </>
  )
}

export default App
