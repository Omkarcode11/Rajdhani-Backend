module.exports = (connection,dataTypes)=>{

    let Cart = connection.define("cart",{
        id:{
            type : dataTypes.BIGINT,
            primaryKey:true,
            autoIncrement:true
        },
    })
    return Cart
}