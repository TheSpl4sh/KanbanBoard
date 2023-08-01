import './Styles/Tables.css'
import data from './Data/Data'
import Card from './Card'
import backgroundImage from '../images/background-img.jpg'
import { useEffect, useState } from 'react'
import Button from './Button'

const Tables = () => {
    const [cards, setCards] = useState(data)

    const dragEnter = event => {
        event.currentTarget.classList.add('drop')
    }
    
    const dragLeave = event => {
        event.currentTarget.classList.remove('drop')
    }

    const drop = event => {
        const column = event.currentTarget.dataset.column
        const id = Number(event.dataTransfer.getData('text/plain'))

        event.currentTarget.classList.remove('drop')

        event.preventDefault()

        const updatedState = cards.map(card => {
            if (card.id === id) {
                card.state = column
            }

            return card
        })

        setCards(updatedState)
    }

    const allowDrop = event => {
        event.preventDefault()
    }

    const dragStart = event => {
        if (event.target.className.includes('card-textarea')) {
            event.target.classList.add('dragging')
        }
    }
    
    const dragEnd = event => {
        if (event.target.className.includes('card-textarea')) {
            event.target.classList.remove('dragging')
        }
    }

    useEffect(() => {
        document.addEventListener('dragstart', dragStart)
        document.addEventListener('dragend', dragEnd)

        return () => {
            document.removeEventListener('dragstart', dragStart)
            document.removeEventListener('dragend', dragEnd)
        }
    }, [])

    const maxId = () => {
        return (Math.max(...cards.map(o => o.id + 1)))
    }

    const handleClickTodo = () => {
        setCards(current => [...current, {id: maxId(), state: 'todo', text: ''}])
    }

    const handleClickIp = () => {
        setCards(current => [...current, {id: maxId(), state: 'ip', text: ''}])
    }

    const handleClickDone = () => {
        setCards(current => [...current, {id: maxId(), state: 'done', text: ''}])
    }

    return (
        <>
            <div className="background-image" style={{backgroundImage:`url(${backgroundImage})`}}>

                <div className="tables-head">
                    <h1>Tables</h1>
                </div>

                <div className="tables-ground">
                    <div className="column column-todo"
                    data-column='todo'
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDragOver={allowDrop}
                    onDrop={drop}
                    >
                        <h2>Todo</h2>
                        {cards.filter(card => card.state === 'todo').map(todo=> ( 
                            <Card {...todo} key={todo.id} value={todo.text} onChange={(value)=> 
                                setCards(cards => {
                                    const newCards = [...cards];
                                    newCards.find(elem => elem.id === todo.id).text = value
                                    return newCards;
                                  })
                            } />
                        ))}

                        <Button onClick={ handleClickTodo }/>
                        
                    </div>

                    <div className="column column-ip"
                    data-column='ip'
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDragOver={allowDrop}
                    onDrop={drop}
                    >
                        <h2>In process</h2>
                        {cards.filter(card => card.state === 'ip').map(todo => (
                           <Card {...todo} key={todo.id} value={todo.text} onChange={(value)=> 
                            setCards(cards => {
                                const newCards = [...cards];
                                newCards.find(elem => elem.id === todo.id).text = value
                                return newCards;
                              })
                        } />
                        ))}

                        <Button onClick={handleClickIp} />

                    </div>
                        
                    <div className="column column-done"
                    data-column='done'
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDragOver={allowDrop}
                    onDrop={drop}
                    >
                        <h2>Done</h2>
                        {cards.filter(card => card.state === 'done').map(todo => (
                            <Card {...todo} key={todo.id} value={todo.text} onChange={(value)=> 
                                setCards(cards => {
                                    const newCards = [...cards];
                                    newCards.find(elem => elem.id === todo.id).text = value
                                    return newCards;
                                  })
                            } />
                        ))}

                        <Button onClick={handleClickDone}/>
                        
                    </div>

                </div>
            </div>
        </>
        
    )
}

export default Tables