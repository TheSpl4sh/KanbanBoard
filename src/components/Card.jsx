import './Styles/Card.css'
import { BiTrash } from "react-icons/bi";

const Card = (props) => {
    const { id, text, buttonClick } = props

    const drag = event => { 
        event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id)
    }
    
    return (
        <article 
        className='card-container'
        draggable="true" 
        data-id={id} onDragStart={drag}
        >
            <textarea 
                className="card-textarea" 
                value={text}  
                onChange={(e) => props.onChange(e.target.value)}  
                spellCheck="false"
                placeholder='Write something...'
            >
            </textarea>

            <button className='delete-btn' onClick={buttonClick}>
                <BiTrash className='bin-img'/>
            </button>
        </article>)
    }
    
    export default Card