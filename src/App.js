import { useState } from "react"
import Attendance from "./components/Attendance";
import Main from "./components/Main";


function App() {
 // eslint-disable-next-line
  const [attendance, setAttendance]= useState([
    {name: "Atif", 
    course: "Web Dev" , 
    phone:"0243578776",},

    {name: "Hafiz", 
    course: "Coding ", 
    phone:"0240000000",},
  ])
  return(
    <main>
      <Main/>
      <Attendance attendance={attendance}/>
    </main>
    
  )
  
}
export default App;