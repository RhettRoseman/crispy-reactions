import "./styles/portfolio.css"
export function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>

      <div className="project">
        <h3>Project 1</h3>
        <h6>Version Control (Git)</h6>
        <a href="#">View Project</a>
      </div>

      <div className="project">
        <h3>Project 2</h3>
        <h6>Backend Project</h6>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h3>Project 3</h3>
       <h6>Full stack App</h6>
        <a href="#">View Project</a>
      </div>

      {/* Add more project sections as needed */}
    </div>
  );
};

export default Portfolio;
