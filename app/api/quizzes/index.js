const { Router } = require('express')
const router = Router()//new Router()

const { Quiz } = require('../../models')

const QuestionsRouter = require('./questions').Router()
//const questionsRouter = QuestionsRouter()

router.get('/', (req, res) => {
  try {
    res.status(200).json(Quiz.get())
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:quizId', (req, res) => {
  try{
    res.status(200).json(Quiz.getById(req.params.quizId));
  } catch(err){
    res.status(500).json(err);
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(Quiz.create({ ...req.body }))
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

router.put('/:quizId', (req, res) => {
  try{
    res.status(200).json(Quiz.update(req.params.quizId, req.body))
  } catch(err){
    res.status(500).json(err);
  }
})

router.delete('/:quizId', (req, res) => {
  try{
    res.status(200).json(Quiz.delete(req.params.quizId));
  } catch(err){
    res.status(500).json(err);
  }
})

router.use('/:quizId/questions', questionsRouter)

module.exports = router
