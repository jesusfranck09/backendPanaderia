const client  = require ('../database')
const { json } = require('express')

const InsertPanes = data =>{
    console.log("esta es la data " , data)
}

const GetPanes  = data  =>{ 
    console.log("esta es la data " , data)
}


const Login  = data  =>{ 
    return new Promise((resolve,reject) =>{
        console.log("esta es la data del login" , data)
        client.query(`select* from administrador where correo = '${data[0]}' and contraseña = '${data[1]}'`,function(err,results,field){
         if(err) {
             reject(err)
         }
         var string  = JSON.stringify(results)
         var resultados= JSON.parse(string)
         if(resultados[0]){
             resolve({
            nombre:resultados[0].nombre,
            apellidoP:resultados[0].apellidoP,
            apellidoM:resultados[0].apellidoM,
            id:resultados[0].id,
            message:"login exitoso"

        })
         }else{
             resolve({message:"error"})
         }   
    
        })
    
    })
  
}
const Ventas  = data  =>{ 
    return new Promise((resolve,reject) =>{
        console.log("estos son los datos de las ventas" , data)
        const piezaBolillo = data[4]
        const piezaRoles= data[5]
        const piezaConcha = data[6]
        const piezaCuernito= data[7]
        const totalPrecioBolillo = data[0]
        const totalPrecioRoles = data[1]
        const totalPrecioConcha = data[2]
        const totalPrecioCuernito = data[3]

         client.query(`insert into ventas (producto,cantidad,total) values('${"Bolillo"}','${piezaBolillo}','${totalPrecioBolillo}')`)   
         client.query(`insert into ventas (producto,cantidad,total) values('${"Roles"}','${piezaRoles}','${totalPrecioRoles}')`)   
         client.query(`insert into ventas (producto,cantidad,total) values('${"Concha"}','${piezaConcha}','${totalPrecioConcha}')`)   
         client.query(`insert into ventas (producto,cantidad,total) values('${"Cuernito"}','${piezaCuernito}','${totalPrecioCuernito}')`)   
         resolve({message:"registro Exitoso"})
    })
  
}

const GetVentas = data=>{
    return new Promise((resolve,reject)=>{
    client.query(`select * from ventas` , function(err,results,fields ){
       var string = JSON.stringify(results)
       var resultados = JSON.parse(string)
       if(resultados[0]){
           resolve(resultados)
       }else{
           resolve({id:"no hay datos",
            producto:"no hay datos",
            Cantidad:"no hay datos",
            Total:"no hay datos"})
       } 
    })    
    })
}
const Signup = data=>{
    return new Promise((resolve,reject)=>{
        // console.log(`select * from administrador where correo= '${data[3]}' adns contraseña='${data[4]}'`)
        client.query(`select * from administrador where correo= '${data[3]}' and contraseña='${data[4]}'`,function(err,results,fields){
            var string = JSON.stringify(results)
            var resultados = JSON.parse(string)
            if(resultados[0]){
                resolve({message:"el usuario ya existe"})
            }else {
                client.query(`insert into administrador(nombre,apellidoP,apellidoM,correo,contraseña) values('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}')`)
                resolve({message:"registro exitoso"})
            }
         }
      
        )  
    })
}
module.exports = {
    Signup,
    GetVentas,
    InsertPanes,
    GetPanes,
    Login,
    Ventas
}