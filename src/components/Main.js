import { useState } from "react"
import EventInputs from "./EventInputs";
import NavBar from "./NavBar";
function Main() {
    const [show, setShow] = useState(false)
   
    const toggle= () => {
        setShow(!show)
    }
    return(
        <main className="contain">
       <NavBar show={show} toggle={toggle}/>
      {show && <EventInputs />}
        </main>
    )
    
}
export default Main;