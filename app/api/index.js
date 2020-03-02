const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
//const QuestionsRouter = require('./quizzes/questions')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
//router.use('/quizzes/:quizId/questions', QuestionsRouter)

module.exports = router
