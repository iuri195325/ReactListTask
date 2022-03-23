import { type } from '@testing-library/user-event/dist/type'
import * as C from './sytle'
import { Item } from '../../types/Item'
import { useState } from 'react';


type Props = {
    item: Item;
}

export const ListItem = ({item}: Props) =>{

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