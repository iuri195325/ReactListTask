import * as C from './style'

export const AddArea = () => {
    return(
        <C.Container>
            <div className='image'>➕</div>
            <input 
                type="text"
                placeholder='Adicione uma tarefa'
            />
        </C.Container>
    )
}