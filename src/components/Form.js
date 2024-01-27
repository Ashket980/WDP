import {useState,useEffect} from 'react';
import "./Formstyles.css"
import Cards from "./Cards"

function Form(){


    const [first,setFirst]=useState(true);
    const [second,setSecond]=useState(true);
    const [third,setThird]=useState(true);
    const [fourth,setFourth]=useState(true);
    const [fifth,setFifth]=useState(true);
    const [sixth,setSixth]=useState(true);
    const [seventh,setSeventh]=useState(true);
    
    const [eighth,setEighth]=useState(true);
    const [but,setBut]=useState(true);
    
    
    var x=0;


    const handleChange = (data)=>{
        
        if(data=="first"){
            
            if(first==true){
            console.log(x= x+10)
            }
            // setFirst(!first)


        }
        if(data=="second"){
            if(second==true){
            console.log(x=x+12)
            }
            // setSecond(!second)
        }
        if(data=="third"){
            if(third==true){
            console.log(x=x+12)
            }
            // setThird(!third)
        }
        if(data=="fourth"){
            if(fourth==true){
            console.log(x=x+6)
            }
            // setFourth(!fourth)
        }
        if(data=="fifth"){
            if(fifth==true){
            console.log(x=x+160)
            }
            // setFifth(!fifth)
        }
        if(data=="sixth"){
            if(sixth==true){
            console.log(x=x+100)
            }
            // setSixth(!sixth)
        }
        if(data=="seventh"){
            if(seventh==true){
            console.log(x=x+30)
            }
            // setSeventh(!seventh)
        }
        if(data=="eighth"){
            if(eighth==true){
            console.log((x=x+15))
            }
            // setEighth(!eighth)
        }
    }

    const[consoleLogs,setConsoleLogs]=useState([]);
    const [sum,setSum]=useState(null);

    useEffect(()=>{
        const originalConsoleLog=console.log;
        console.log=(...args)=>{
            setConsoleLogs((prevLogs)=>[...prevLogs,args.join(' ')]);
            originalConsoleLog.apply(console,args);
            
        };
        return()=>{
            console.log=originalConsoleLog;
        };
    },[]);
    

    return(<>
        <div className='formbox'>
      <h3>SELECT FROM THE BELOW DAY-TO-DAY ACTIVITIES</h3>
      <form className="form" >
          <div class="close-btn"></div>
            <label>Electricity : <input type="checkbox" value={first}  onChange={()=>handleChange("first")}></input> </label>
  
            <label>Gas Bill :
            <input type="checkbox"  value={second} onChange={()=>handleChange("second")}></input> </label>

            <label>Monthly mileage on your vehicles : 
            <input type="checkbox"  value={third} onChange={()=>handleChange("third")}></input> </label>

            <label>Household : 
            <input type="checkbox"  value={fourth} onChange={()=>handleChange("fourth")}></input> </label>

            <label>Waste Production : 
            <input type="checkbox" value={fifth} onChange={()=>handleChange("fifth")} ></input> </label>

            <label>Water Consumption : 
            <input type="checkbox" value={eighth} onChange={()=>handleChange("eighth")} ></input> </label>

            <label>Agricultural Waste : 
            <input type="checkbox"  value={sixth} onChange={()=>handleChange("sixth")}></input> </label>

            <label>Construction Waste ( if any)  : 
            <input type="checkbox"  value={seventh} onChange={()=>handleChange("seventh")}></input> </label>


            <button class="btn"  value={but} onClick={()=><Cards/>}>submit</button>
          </form>

    </div>

    <div>
            <ul>
                {consoleLogs.map((log,index)=>(
                    <li key={index}>{log}</li>
                )
                )}
            </ul>
        </div>
    
    </>
    )

    
}

export default Form;