const { Router } = require('express')

const { Question } = require('../../../models')

const router = Router({mergeParams: true})//new Router({mergeParams: true})
// new fait planter, 'const router : any'
// router.use('/:quizId/questions', QuestionsRouter) --> marche pas avec
// sans new, 'const router : Router'
// ok

router.get('/', (req, res) => {
  try {
    const quizId = req.params.quizId;
    res.status(200).json(Question.get().filter(question => question.quizId == quizId))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:questionId', (req, res) => {
  try{
    res.status(200).json(Question.getById(req.params.questionId));
  } catch(err){
    res.status(500).json(err);
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(Question.create({ ...req.body, answers: [], quizId: parseInt(req.params.quizId)}))
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

router.put('/:questionId', (req, res) => {
  try{
    res.status(200).json(Question.update(req.params.questionId, req.body));
  } catch(err){
    res.status(500).json(err);
  }
})

router.delete('/:questionId', (req, res) => {
  try{
    res.status(200).json(Question.delete(req.params.questionId));
  } catch(err){
    res.status(500).json(err);
  }
})

module.exports = router