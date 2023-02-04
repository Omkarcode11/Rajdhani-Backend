module.exports = (connection,datatypes)=>{

 let Category = connection.define("category",{
    id:{
        type:datatypes.BIGINT,
        primaryKey:true,
        autoIncrement: true
    },
    category:{
        type:datatypes.STRING,
        allowNull:false
    }
 })
 return Category
}