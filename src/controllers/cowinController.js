let axios = require("axios")


let getByDistrictId = async function (req,res){
    try {
        let district = req.query.district_id
        let date = req.query.date
        var options = {
            method: "get",
            url: `hhtp://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
        
    } catch (err) {
        res.status(500).send({msg: err.message})
        
    }
}


module.exports.getByDistrictId = getByDistrictId