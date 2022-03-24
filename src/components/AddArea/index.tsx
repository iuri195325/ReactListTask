import { useState, KeyboardEvent } from 'react'
import * as C from './style'

type Props = {

    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
    //função para encontrar a tecla
    //onkeyup chama essa função
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && input !== ''){
            onEnter(input);
        }
    }
    const [input, setInput] = useState('');
    return(
        <C.Container>
            <div className='image'>➕</div>
            <input 
                type="text"
                placeholder='Adicione uma tarefa'
                value={input}
                onChange = { e => setInput(e.target.value)}
                onKeyUp = {handleKeyUp}
            />
        </C.Container>
    )
}