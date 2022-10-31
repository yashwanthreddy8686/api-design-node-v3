import { Router } from 'express'

const router = Router()

router.route('/')
    .get((req, res) => {
        res.send({ message: "hello" })
    })
    .post((req, res) => {
        res.send({ message: "hello" })
    })
router.route('/:id')
    .get((req, res) => {
        res.send({ message: "hello" })
    })
    .put((req, res) => {
        res.send({ message: "hello" })
    })
    .delete((req, res) => {
        res.send({ message: "hello" })
    })

export default router
