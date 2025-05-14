import { useState } from 'react'

const ProjectForm = () => {
  const [Project_title, setProject_title] = useState('')
  const [Location, setLocation] = useState('')
  const [Carbon_credits, setCarbon_credits] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const project = {Project_title, Location,Carbon_credits}
    
    const response = await fetch('http://localhost:8080/api/projects', {
      method: 'POST',
      body: JSON.stringify(project),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setProject_title('')
      setLocation('')
      setCarbon_credits('')
      console.log('new project added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Project</h3>

      <label>Project Title:</label>
      <input 
        type="text" 
        onChange={(e) => setProject_title(e.target.value)} 
        value={Project_title}
      /><br></br>

      <label>Location:</label>
      <input 
        type="text" 
        onChange={(e) => setLocation(e.target.value)} 
        value={Location}
      /><br></br>

      <label>Price Per Tonee (Rs.):</label>
      <input 
        type="number" 
        onChange={(e) => setCarbon_credits(e.target.value)} 
        value={Carbon_credits} 
      /><br></br>

      <button>Add Project</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ProjectForm