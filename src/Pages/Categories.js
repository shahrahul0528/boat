import { useState } from "react";

const para = {"color":"tomato","font-size":"1.5rem"}
const cotanier = {"background-color":"lightgreen"}


function Categories() {
    const [firsttime,setfirsttime] = useState(true)
    const clickFun = () =>{
        setfirsttime(!firsttime)
    }

    return( 
        <div className="container col-4 mt-5 p-5 rounded" style={cotanier} >
            <>
            {/* <input className="input" onChange={e =>()}/> */}
            <div className="card border-danger rounded p-3">
                <p className="mt-3" style={para}>Counting is in processing </p>
            </div>
            
        {firsttime ? <div className="p-3 mt-5 mb-3 bg-light border rounded-3">
                         <p className='fs-4 p-5 border-danger rounded' style={para}> sucsess ho gaya lagta hai 😎</p> 
                     </div> : null}
            <button className="btn btn-primary mt-3" onClick={clickFun}> Click here to change</button>
            </>
        </div>
    )
}

export default Categories;