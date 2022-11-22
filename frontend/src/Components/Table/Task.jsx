import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Status from '../Status/Status'
import { Link } from 'react-router-dom'
import ModalRemove from '../Modals/Modal'

function TaskRow(props) {
  const {todo, sl} = props
  const [showModal, setShowModal] = useState(false)

  return (
    <tr>
        <td>{`#${sl}`}</td>
        <td>{todo.title}</td>
        <td>{todo.start}</td>
        <td>{todo.end}</td>
        <td>{
        todo.is_completed ? <Status type={'success'} text='YES' /> : <Status type={'danger'} text='NO' />
        }
        </td>
        <td>
            <Link to={`/todos/edit/${todo.id}`} className="btn btn-sm me-1 mb-1 text-center">
              <FaEdit className="icon__table" />
            </Link>

            <button
            className="btn btn-sm me-1 mb-1 text-center"
            onClick={()=>setShowModal(true)}
            >
              <FaTrash className="icon__table" />
            </button>
            
            <ModalRemove 
            showModal={showModal} 
            setShowModal={setShowModal}
            deleteId={todo.id}
            />

        </td>
    </tr>
  )
}

export default TaskRow
