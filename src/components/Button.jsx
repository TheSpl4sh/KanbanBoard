import { BiPlus } from "react-icons/bi";

const Button = (props) => {
    const { onClick } = props
    
    return(
        <button className="card-adding" onClick={onClick}>
            <BiPlus className="plus-img"/>
            <h3>Add card</h3>
        </button>
    )
}

export default Button