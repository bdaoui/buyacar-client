import React from 'react'

const EditContact = ({contact, selectedId, handleCloseSecondSection, refresh, setRefresh}) => {
    const chosenMessage = contact.filter(message => message._id === selectedId)

    console.log(chosenMessage)
  return (
    <div>
        <section>Handle edit boxes to view on </section>

        <h1>{chosenMessage.name}</h1>
    </div>
  )
}

export default EditContact