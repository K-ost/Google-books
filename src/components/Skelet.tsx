const Skelet = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
      <div className="card" aria-hidden="true">
        <div className="card-body">
          <p className="card-title placeholder-glow">
            <span className="placeholder col-12" style={{height: '100px'}}></span>
          </p>
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skelet