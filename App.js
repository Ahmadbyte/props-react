import './App.css';
import {useState} from 'react';
import Welcome from './Welcome';

function App() {
  const [name, setName]=useState("")
  const [regdNo, setRegNo]=useState("")
  const [submit, setSubmit]=useState(false)
  return (

    <div>
      <div class="container5">
      <h1>LPU Login</h1>
      <div class="container">
      <label>Name</label>
      <input 
      placeholder='Enter name'
      value={name}
      onChange={(event)=>{setName(event.target.value)}}></input>
      </div>
      <div class="container2"> 
      <label>Regd No.</label>
      <input placeholder='Regd no.'
      value={regdNo}
      onChange={(event)=>{setRegNo(event.target.value)}}></input>
      </div>
      <div class="container3"><button onClick ={()=>{setSubmit(!submit)}}onclick = "Redirect();">Submit</button>
      </div>
      </div>
      <div 
      class="container4">{(submit && name && regdNo) && <Welcome name={name}regdNo={regdNo}></Welcome>}
      </div>
      
      
    </div>
  );
}
export default App;
   