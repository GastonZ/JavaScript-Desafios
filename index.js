



let entrenoPlan1 = "Musculacion"
let costoAdd1 = 3000
let costoPlan1 = 3000

let entrenoPlan2 = "Calistenia"
let costoAdd2 = 0
let costoPlan2 = 2000 

let entrenoPlan3 = "Deportes"
let costoAdd3 = 10000
let costoPlan3 = 5000

let Plan = (prompt("Ingrese el plan de entrenamiento que desea comprar y descubre sus beneficios : \n Musculacion \n Calistenia \n Deportes"))

function calculoGastoPlan (){
    if(Plan == entrenoPlan1){
        alert("Costo del curso : $" + costoPlan1)
        alert("Costos adicionales de : $" + costoAdd1)
        alert("El total es de : $" + (costoPlan1 + costoAdd1))
    }
    else if(Plan == entrenoPlan2){
        alert("Costo del curso : $" + costoPlan2)
        alert("Costos adicionales de : $" + costoAdd2)
        alert("El total es de : $" + (costoPlan2 + costoAdd2))
    }
    else if(Plan == entrenoPlan3){
        alert("Costo del curso : $" + costoPlan3)
        alert("Costos adicionales de : $" + costoAdd3)
        alert("El total es de : $" + (costoPlan3 + costoAdd3))
    }
    else{
        alert("Ese plan no existe >:(")
    }
        
    
}

calculoGastoPlan()


