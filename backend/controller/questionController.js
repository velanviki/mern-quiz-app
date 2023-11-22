const questionModel = require("../model/question");

const getQuestions = async (req, res) => {
    try {
        //get data from db
        const questions = await questionModel.find({})

        if (questionModel) {
            res.json(questions)
        }
    } catch (error) {
        console.log(error)
    }
};


const getQuestion = async (req, res) => {
    try {
        //get data from db
        const questions = await questionModel.findById(req.params.id)

        if (questionModel) {
            res.json(questions)
        }
    } catch (error) {
        console.log(error)
    }
};

const createQuestion = async (req, res) => {
    try {
        const question = new questionModel({
            question: req.body.question,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            answer: req.body.answer,
        })
        const result = await question.save()
        if (result) {
            res.send(result)
        }
    } catch (error) {
        console.log(error)
    }
}


const updateQuestion = async (req, res) => {

    try {
        const update = await questionModel.findByIdAndUpdate(req.params.id, req.body)
        if (update) {
            res.send("Updated Successfuly")
        }

    } catch (error) {
        console.log(error)
    }

}


const deleteQuestion = async(req,res)=>{

try {
    const remove = await questionModel.findByIdAndDelete(req.params.id)
if(remove){
    res.send("Delete Successfuly")
}
} catch (error) {
    console.log(error)

}
}

module.exports = { createQuestion, getQuestions, updateQuestion ,deleteQuestion,getQuestion};
