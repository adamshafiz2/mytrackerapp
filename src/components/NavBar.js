
function NavBar( {show, toggle}) {
  
    
    return(
        <nav className="container">
            <div>
                <h1>CLASS ATTENDANCE APP</h1>
            </div>
            <button className="btn" onClick={toggle}>{ show ? "CLOSE" : "ADD" } </button>
        </nav>
    )
    }
    
    export default NavBar;