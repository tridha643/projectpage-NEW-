import { useState } from 'react';
import './index.css';

function App() {
  const [projects, setProjects] = useState([
    {
      title: 'Project 1',
      description: 'A brief description of project 1',
      image: 'https://via.placeholder.com/400',
      link: 'https://example.com/1',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2',
      image: 'https://via.placeholder.com/400',
      link: 'https://example.com/2',
      tech: ['Python', 'Django', 'PostgreSQL']
    },
    {
      title: 'Project 3',
      description: 'A brief description of project 3',
      image: 'https://via.placeholder.com/400',
      link: 'https://example.com/3',
      tech: ['Vue.js', 'Express', 'MySQL']
    }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    tech: []
  });

  const handleAddProject = (e) => {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setShowModal(false);
    setNewProject({ title: '', description: '', image: '', link: '', tech: [] });
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative" 
         style={{
           backgroundImage: `url('https://cdn.discordapp.com/attachments/1280695546591313961/1298849725478604811/MedXAI_GIF.gif?ex=6738b952&is=673767d2&hm=5ecdfca1b816048202211f6528cefdb209fcd72661884ba8224a26f2c6e2bc78&')`
         }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10">
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg w-72 overflow-hidden transform transition-transform hover:scale-105 border border-gray-800">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-green-500 mb-2 text-xl">{project.title}</h3>
                <p className="text-green-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-800 text-green-500 px-2 py-1 rounded-full text-xs border border-green-500">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="bg-gray-900 rounded-lg w-72 h-48 flex items-center justify-center border border-gray-800 cursor-pointer transform transition-transform hover:scale-105" onClick={() => setShowModal(true)}>
            <span className="text-green-500 text-6xl">+</span>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
              <h2 className="text-green-500 mb-4 text-2xl">Add New Project</h2>
              <form onSubmit={handleAddProject}>
                <input
                  type="text"
                  placeholder="Title"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  className="w-full p-2 mb-4 bg-gray-800 text-green-500 border border-green-500 rounded"
                />
                <textarea
                  placeholder="Description"
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  className="w-full p-2 mb-4 bg-gray-800 text-green-500 border border-green-500 rounded"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={newProject.image}
                  onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                  className="w-full p-2 mb-4 bg-gray-800 text-green-500 border border-green-500 rounded"
                />
                <input
                  type="text"
                  placeholder="Project Link"
                  value={newProject.link}
                  onChange={(e) => setNewProject({...newProject, link: e.target.value})}
                  className="w-full p-2 mb-4 bg-gray-800 text-green-500 border border-green-500 rounded"
                />
                <input
                  type="text"
                  placeholder="Technologies (comma-separated)"
                  onChange={(e) => setNewProject({...newProject, tech: e.target.value.split(',')})}
                  className="w-full p-2 mb-4 bg-gray-800 text-green-500 border border-green-500 rounded"
                />
                <div className="flex justify-end gap-4">
                  <button type="submit" className="bg-green-500 text-black px-4 py-2 rounded">Add Project</button>
                  <button type="button" onClick={() => setShowModal(false)} className="bg-gray-800 text-green-500 px-4 py-2 rounded border border-green-500">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
