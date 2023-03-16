import React, {useRef} from 'react'
import PropTypes from "prop-types"

export default function CreateNewContactForm({add}) {

    const nombreRef = useRef("")
    const numeroRef = useRef("")
    

    const addContact = (e) => {
        e.preventDefault();
        console.log("apunto de crear el contacto")
        const newContact = {
            nombre:nombreRef.current.value,
            numero:numeroRef.current.value,
            conectado:true
        }
        add(newContact)
    }


  return (
    <div>
        <h2>
            ¿Nuevo contacto?
        </h2>
      <form onSubmit={addContact}>
            <input  ref={nombreRef} id="inputName" type="text" className='form-control-sm' required autoFocus placeholder='Nombre'></input>
            <input  ref={numeroRef} id="inputNumber" type="number" className='form-control-sm' required placeholder='Número'></input>
            <br/>
            <button type="submit" className="btn btn-outline-dark">Agregar</button>
      </form>

    </div>
  )
}

CreateNewContactForm.ProtoTypes ={
    add: PropTypes.func.isRequired
}