let axios = require("axios")

let getTemp = async function (req, res) {
    try {
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let appId = req.query.appid
        let arrOfObj =[]
        for (let i = 0; i < cities.length; i++) {
            let data = {city : cities[i]}
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appId}`
            }
            let result = await axios(options)   
            data.Temp= result.data.main.temp
            arrOfObj.push(data)
        }
        let incTempData = arrOfObj.sort((a,b) => a.Temp - b.Temp)
        res.status(200).send({ msg: incTempData })

    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getTemp = getTemp