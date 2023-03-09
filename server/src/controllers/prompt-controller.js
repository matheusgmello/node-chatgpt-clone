const InputPrompt = require("../model/input-model")
const openai = require("../config/openai")

module.exports = {
    async sendText(req, res){
        const openaiAI = openai.configuration()
        const inputModel = new InputPrompt(req.body)

        try {
            const response = await openaiAI.createCompletion(
                openai.textCompletion(inputModel)
            )

            return response.status(200).json(
                {
                    sucess:true,
                    data: res.data.choices[0].text
                }
            )
        } catch (error) {

            return res.status(400).json({
                sucess: false,
                error: error.response ?
                error.response.data : 'tem erro no servidor'
            })
        }
    }
}
