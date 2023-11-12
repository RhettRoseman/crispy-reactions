import "./styles/portfolio.css"
export function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>

      <div className="project">
        <h3>Project 1</h3>
        <p>Description of Project 1.</p>
        <a href="#">View Project</a>
      </div>

      <div className="project">
        <h3>Project 2</h3>
        <p>Description of Project 2.</p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h3>Project 3</h3>
        <p>Description of Project 2.</p>
        <a href="#">View Project</a>
      </div>

      {/* Add more project sections as needed */}
    </div>
  );
};

export default Portfolio;
