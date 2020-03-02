const { Router } = require('express')

const { Question } = require('../../../models')

const router = new Router({mergeParams: true})

router.get('/', (req, res) => {
  try {
    res.status(200).json(Question.get())
  } catch (err) {
    res.status(500).json(err)
  }
})

/*router.get('/:quizId/', (req, res) => {
  try {
    const quizId = req.params.quizId;
    res.status(200).json(Question.get().filter(question => question.quizId == quizId))
  } catch (err) {
    res.status(500).json(err)
  }
})*/

/*router.get('/:quizId/:questionId', (req, res) => {
  try{
    res.status(200).json(Question.getById(req.params.questionId));
  } catch(err){
    res.status(500).json(err);
  }
})*/

module.exports = router

//return router