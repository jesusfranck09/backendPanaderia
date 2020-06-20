const actions = require('../actions/userActions')


const getPanes = (_,data)=>{

    return actions.GetPanes(data)

}
const getVentas = (_,data)=>{
    var cadena =  data.data[0]
    var variable =  cadena.split(",")
    return actions.GetVentas(variable)

}

module.exports = {
    getVentas,
    getPanes

}