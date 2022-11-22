import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import TodoContext from '../../Contexts/TaskContext'
import './Modal.css'

function ModalRemove(props) {
  const {showModal, setShowModal, removeId} = props
  const {removeTask, 
        getAllTask, 
        showToastAlert, 
        dismissAlert} = useContext(TodoContext)

  const handleRemove = () => {
    setShowModal(false)
    dismissAlert()
    removeTask(removeId)
    .then((response)=>{
      getAllTask()
      showToastAlert(response.data, 'success')
    })
    .catch((err)=>{

    })
  }

  return (
    <>
    <Modal show={showModal} onHide={()=>setShowModal(false)} className='modal__container'>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to remove the task?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Once you delete a task, there is no going back.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Okay
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default ModalRemove
