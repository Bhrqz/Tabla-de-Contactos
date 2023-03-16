import React, {useState} from 'react'
import Contact from './contact'
import CreateNewContactForm from './createNewContactForm'

function ContactList() {
  
    const contacts = [
        {nombre:"Jose", numero:4159534878, conectado:true},
        {nombre:"David", numero:4156234878, conectado:false},
        {nombre:"Maria", numero:5152658948, conectado:true}]

      const [contactos, setContactos] = useState(contacts);


  const createContact = (contacto) => {
    console.log(contacto)
    const tempContacts = [...contactos]
    tempContacts.push(contacto)
    setContactos(tempContacts)
  }

  const changeState = (contacto) =>{
    const index = contactos.indexOf(contacto)
    const temptask = [...contactos]
    temptask[index].conectado = !temptask[index].conectado
    setContactos(temptask)
  }



  
  return (
    <div>
        <h1>
            Lista de contactos
        </h1>
      <div className='card-body' data-mbd--perfect-scrollbar="true" style={{position:"relative", height:"400px"}}>
        <table>
            <thead>
                <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Numero</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'>Acciones</th>
                    
                    

                </tr>

            </thead>

        
          <tbody>
            {contactos.map((contact,index)=>{
              
              return(                    
                    <Contact 
                    key={index} 
                    contact={contact} 
                    changeState={changeState}
                    ></Contact>
                  
            )})}
          </tbody>
        </table>
        <CreateNewContactForm add={createContact}></CreateNewContactForm>
      </div>
    </div>
  )
}

export default ContactList