const time=document.getElementById("time")
const mostrar=document.getElementById("mostrar")

function iniciar(time){
    
    if(time==0){
        mostrar.textContent='finish'
        return
    }else{
        setTimeout(iniciar,1000,time-1)
        mostrar.textContent=time
    }
}
