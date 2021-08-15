import {Router} from 'express'
import contracts from './routes/contracts'
import teams from './routes/teams'
import employees from './routes/employees'

const router = Router()

router.use('/contracts', contracts)
router.use('/teams', teams)
router.use('/employees', employees)

export default router
