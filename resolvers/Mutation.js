const actions =  require( '../actions/userActions')


const insertPanes  = (_,data)=>{

    return actions.InsertPanes(data)
}

const login  = (_,data)=>{
    var cadena =  data.data[0]
    var variable =  cadena.split(",")
    return actions.Login(variable)
    
}

const ventas  = (_,data)=>{
    var cadena =  data.data[0]
    var variable =  cadena.split(",")
    return actions.Ventas(variable)
    
}

const signup  = (_,data)=>{
    var cadena =  data.data[0]
    var variable =  cadena.split(",")
    return actions.Signup(variable)
    
}


module.exports ={ 
    signup,
    insertPanes,
    login,
    ventas

}