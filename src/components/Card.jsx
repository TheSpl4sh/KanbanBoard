import './Styles/Card.css'
import { BiTrash } from "react-icons/bi";

const Card = (props) => {
    const { id, text } = props

    const drag = event => { 
        event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id)
    }
    
    return (
        <>
            <textarea 
                className="card-textarea" 
                value={text} draggable="true" 
                data-id={id} onDragStart={drag} 
                onChange={(e) => props.onChange(e.target.value)}  
                spellCheck="false"
                placeholder='Write something...'
            >
            </textarea>
               {/*  {<button className='delete-btn'>
                    <BiTrash className='bin-img'/>
                </button>} */}

            
        
        </>)
    }
    
    export default Card