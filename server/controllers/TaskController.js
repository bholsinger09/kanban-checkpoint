import TaskService from '../services/TaskService'
import express from 'express'
import { Authorize } from '../middlewear/authorize'

//import service and create an instance 
let _service = new TaskService()
let _repo = _service.repository
// let _taskRepo = new TaskService().repository

//PUBLIC
export default class TaskController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      // .get('/:id/task', this.getTasksByListId) //need to change to getTaskById?
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      .use(this.defaultRoute)
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await _repo.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _repo.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await _repo.findOneAndRemove({ _id: req.params.id, authorId: req.session.uid })
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }

} //close export