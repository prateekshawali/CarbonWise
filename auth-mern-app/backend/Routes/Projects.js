const express = require('express')

const {
  getProjects, 
  getProject, 
  createProject,
  deleteProject, 
  updateProject
} = require('../controllers/projectController')
 

const router = express.Router()

// GET all projects
router.get('/', getProjects)

// GET a single project
router.get('/:id',getProject)

// POST a new workout
router.post('/', createProject)

// DELETE a workout
router.delete('/:id',deleteProject)

// UPDATE a workout
router.patch('/:id',updateProject)

module.exports = router