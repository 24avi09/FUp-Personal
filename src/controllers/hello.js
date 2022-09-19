

let hello = async function (req,res){
    res.status(200).send({msg:"Hello World"})
}

module.exports.hello = hello