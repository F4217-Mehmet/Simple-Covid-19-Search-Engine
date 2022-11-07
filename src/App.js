import './App.css';
import { useState } from "react";

function App() {

  const [form, setForm]= useState({name:"", surname:"", age:""});
  const {name, surname, age} = form;

  const onChangeInput = (e)=> {setForm({...form, [e.target.name]: e.target.value})}

  return (
    <>
      Name: <br />
      <input name="name" value={name} onChange={onChangeInput} /> <br />
      Surname: <br />
      <input name="surname" value={surname} onChange={onChangeInput} /> <br /> 
      Age: <br />
      <input name="age" value= {age} onChange={onChangeInput} /> <br />  <br />
      <div>{name} {surname} is {age} years old.</div>
    </>
  );
}

export default App;
