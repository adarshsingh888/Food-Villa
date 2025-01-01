const Simmer = ({ imageUrl, title, text, link, linkText }) => {
    return (
      <div className="card" style={{ width: "18rem",height:"25rem" }}>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          
        </div>
      </div>
    );
  };
  
  export default Simmer;
  