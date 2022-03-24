import { useState } from 'react';
import *  as C from './App.style'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem/index'
import { AddArea } from './components/AddArea/index'
const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: "comprar", done: true},
    {id: 2, name: "limpar", done: false},
  ]);

  //clone para atualizar lista
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: '',
      done: false
    });
    //atualizando nova
    setList(newList);
  }
 
  return(
  <C.Container>
    <C.Area>
      <C.Title>Tarefas</C.Title>
      <AddArea onEnter={handleAddTask} />
      {list.map((item, index) => (
        <ListItem key={index} item={item}></ListItem>
      ))}
    </C.Area>
  </C.Container>
  )  
}

export default App;
