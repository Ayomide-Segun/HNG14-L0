const axios = require('axios');

exports.classifyData = async(req, res) => {
    const {name} = req.query;
    try {
        if(!name || name.trim() === ""){
            return res.status(400).json({
                status: "error",
                message: "Bad request"
            });
        }
        if(typeof name !== "string"){
            return res.status(422).json({
                status: "error",
                message: "Unprocessable Entity"
            })
        }

        const  response = await axios.get(`https://api.genderize.io?name=${name}`);
        const {gender, probability, count} = response.data;
        
        if(gender === null || count === 0){
            return res.status(422).json({
                status: "error",
                message: "No prediction available for the provided name"
            })
        }

        const sample_size = count;
        const is_confident = probability >= 0.7 && sample_size >= 100;
        const processed_at = new Date().toISOString();

        res.json({
            status: "success",
            data: {
                name,
                gender,
                probability,
                sample_size,
                is_confident,
                processed_at
            }
        })

    } catch (error) {
        console.error(error.message);

        if (error.response) {
            return res.status(502).json({
                status: "error",
                message: "Failed to fetch data from external API"
            });
        }

        return res.status(500).json({
            status: "error",
            message: error.message || "Internal server error"
        });
    }
    
} 