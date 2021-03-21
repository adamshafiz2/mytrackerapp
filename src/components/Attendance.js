function Attendance({attendance}) {
    return(
        <div>
            <h1>ALL ATTENDANCE</h1>
            {attendance.map((e) =>(
                <div className="card">
                    <h4>{e.name}</h4>
                    <p>{e.course}</p>
                    <p>{e.phone}</p>
                    
                </div>
            ))}
        </div>
    )
}
export default Attendance;