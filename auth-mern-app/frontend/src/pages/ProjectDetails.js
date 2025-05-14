import { useNavigate } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    // Navigate to the payment page
    navigate('/payments');
  };
    return (
      <div className="project-details">
        
        <h4>{projects.Project_title}</h4>
        <p>Carbon credits: {projects.Carbon_credits}</p>
        <p>Location: {projects.Location}</p>
        <p>{new Date(projects.createdAt).toLocaleDateString()}</p>
  
        <button onClick={handleBuyNowClick}>BUY NOW</button>
      </div>
    );
  };
  
  export default ProjectDetails;