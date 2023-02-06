//Esta carpeta va a manejar los valores que se muestran en la tabla// 

//Importaciones//
import { useState, createContext } from 'react'
import clienteAxios from '../config/axios'
export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [newBalance, setNewBalance] = useState() //
  const [balance, setBalance] = useState()  
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const createBalance = async (dataForm) => {  //Funcion que guarda inf en la BD//
    const form = {
      descripcion: dataForm.descripcion,
      monto: dataForm.monto,
      tipo: dataForm.tipo,
    } //Recibe inf del formulario y mapea ese objeto dentro un objt form.//
      //Este form lo recibirà el try que se muestra abajo//

    try {
      await clienteAxios.post(`/balance/nuevo`, form)
      setSuccess(true)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  const getBalance = async () => { //Esta funciòn trae el balance y lo guarda con setBalance//
    try {
      const res = await clienteAxios.get(`/balance/obtener`)
      setBalance(res.data.balance)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteBalance = async (id) => {
    const data = { id }

    try {
      await clienteAxios.delete(`/balance/borrar`, { data })
      getBalance()
    } catch (error) {
      console.log(error)
    }
  }

  const data = {
    createBalance,
    getBalance,
    balance,
    setBalance,
    newBalance,
    setNewBalance,
    success,
    error,
    setSuccess,
    setError,
    deleteBalance,
  }
  console.log('CONTEXTO', data)
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}