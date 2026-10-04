import { useEffect, useState } from "react";

function Counter(){
    const [homeGoals,setHomeGoals]=useState(0);
    const [guestGoals,setGuestGoals]=useState(0);
    function incrementOne(param : string){
        if(param=="Home")setHomeGoals(h=>h+1);
        else setGuestGoals(g=>g+1)
    }
    function incrementTwo(param : string){
        if(param=="Home")setHomeGoals(h=>h+2);
        else setGuestGoals(g=>g+2)
    }
    function incrementThree(param : string){
        if(param=="Home")setHomeGoals(h=>h+3);
        else setGuestGoals(g=>g+3)
    }
    useEffect(()=>{
        if(homeGoals>guestGoals){
            document.getElementById("hg")?.classList.add("winner")
            document.getElementById("gg")?.classList.remove("winner")
            document.getElementById("gg")?.classList.remove("even")
            document.getElementById("hg")?.classList.remove("even")
        }
        else if(homeGoals<guestGoals){
            document.getElementById("hg")?.classList.remove("winner")
            document.getElementById("gg")?.classList.add("winner")
            document.getElementById("gg")?.classList.remove("even")
            document.getElementById("hg")?.classList.remove("even")
        }
        else{
            document.getElementById("hg")?.classList.add("even")
            document.getElementById("gg")?.classList.add("even")
            document.getElementById("gg")?.classList.remove("winner")
            document.getElementById("hg")?.classList.remove("winner")
        }
    },)
 return(
    <div className="box">
            <div className="res">
                <h1>HOME</h1>
                <div id="hg" className="goals ">
                    <p>{homeGoals}</p>
                </div>
                <div className="buttons">
                    <button onClick={()=>incrementOne("Home")}>+1</button>
                    <button onClick={()=>incrementTwo("Home")}>+2</button>
                    <button onClick={()=>incrementThree("Home")}>+3</button>
                </div>
            </div>
            <div  className="res">
                <h1>GUEST</h1>
                <div id="gg" className="goals">
                    <p>{guestGoals}</p>
                </div>
                <div className="buttons">
                    <button onClick={()=>incrementOne("Guest")}>+1</button>
                    <button onClick={()=>incrementTwo("Guest")}>+2</button>
                    <button onClick={()=>incrementThree("Guest")}>+3</button>
                </div>
            </div>
    </div>
 );
}
export default Counter