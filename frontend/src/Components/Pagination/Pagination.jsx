import React, { useContext } from 'react'
import TodoContext from '../../Contexts/TaskContext'
import parse from 'html-react-parser'
import './Pagination.css'

function Pagination() {
  const {pages, currentPageInfo:{pageNo}, queries, setQueries} = useContext(TodoContext)

  const handleClick = (pageNumber) => {
    setQueries({...queries, page: pageNumber})
  }  
  return (
    <nav className='pagination__container'>
        <ul className="pagination">

            {
                pages.map((page, index)=>{
                    const pageLength = pages.length - 1;
                    const pageNumber = index === 0 ? pageNo-1 : index === pageLength ? pageNo+1 : index;
                    const link = (
                    <li 
                    key={index} 
                    className={`page-item ${page.active && `active`} ${page.url === null && `disabled`} `}
                    >
                        <button 
                        className="page-link" 
                        onClick={()=>handleClick( pageNumber )}>
                            {index=== 0 || index === pageLength ? parse(page.label) : index}
                        </button>
                    </li>
                    )

                    return link;
                })
            }

        </ul>
    </nav>
  )
}

export default Pagination
