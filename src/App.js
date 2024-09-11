// import logo from './logo.svg';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import './App.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function App() {
  
  let [todolist,setTodolist] = useState([])

  let saveToDoList=(event)=>{

    let toname=event.target.toname.value;
    // alert(toname);
    if(!todolist.includes(toname)){
      let finalToDolist=[...todolist,toname]
      setTodolist(finalToDolist)

    }
    else{
      // alert("toDo Name Allready Exists.. ");
      NotificationManager.warning('toDo Name Allready Exists..',3000);
    }


    event.preventDefault();
  }

  let list=todolist.map((value,i)=>{
    return(
      <ToDoListItems value={value} key={i} indexNumber={i} todolist={todolist} setTodolist={setTodolist}/>
    )
  })
  return (
    <div className="App">

      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='toname'/> <button>Save</button><NotificationContainer/>

      </form>

     <div className='outerDiv'>
     <ul>
       {list}
      </ul>
     </div>
    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setTodolist}){

  let deleteRow=()=>{
    let finalData =todolist.filter((v,i)=> i!==indexNumber)
    // console.log(finalData);
    setTodolist(finalData)
  }

  let [status,setStatus]=useState(false);
  let checkStatus=()=>{
 setStatus(!status);
  }

  return(
    <li className={(status)?'completetodo' : ''} onClick={checkStatus}>{indexNumber+1}{".  "}{value} <span onClick={deleteRow}>&times;</span></li>
  )
}
