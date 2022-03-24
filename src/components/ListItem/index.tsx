import { type } from '@testing-library/user-event/dist/type'
import * as C from './sytle'
import { Item } from '../../types/Item'
import { useState } from 'react';


type Props = {
    item: Item;
}
// recebendo o done da lista
export const ListItem = ({item}: Props) =>{

    //varial que vai recebar verdade ou falso
    //ao clicar o evento salva se esta selecionado ao não na variavel
    const [checked, setChecked] = useState(item.done);

    return ( 
        <C.Container done = { checked } >
           <input 
           type="checkbox"
           checked={checked}
           onChange = {e => setChecked(e.target.checked)}
           />
           <label>{item.name}</label>
        </C.Container>
    )
}