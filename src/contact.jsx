import React from 'react'

export default function Contact({contact, changeState, removeContact}) {
  

  return (
    <tr>
        
            <th>
              {contact.nombre} 
            </th>
            
            <td>
                {contact.numero}
            </td>  
            
            <td>
                {contact.conectado? "Conectado":"Desconectado"}
            </td> 
            <td>
              {contact.conectado? (<i onClick={() => {changeState(contact)}} type="button" className="bi bi-circle-fill" style ={{color:"green", fontSize:"20px"}}></i>):(<i onClick={() => {changeState(contact)}} className="bi bi-circle-fill" style ={{color:"grey", fontSize:"20px"}}></i>)}
              <button onClick={()=> {removeContact(contact)}} type='button' className='btn btn-outline-danger'><i className='bi bi-trash3-fill'></i></button>
            </td>     
        
    </tr>
  )
}
