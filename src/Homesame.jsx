const Homesame = (props) => {
  return (
    <>
      <br />
      <div className="container text-capitalize">
        <div className="row ">
          <div className="col-md-6">
            <div className="p-5">
              <h1>
                {props.name} <br />
                <span className="text-primary">Syed Technical</span>
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                eos possimus rerum exercitationem velit aliquid voluptatibus
                nemo, voluptatem aspernatur dolore mollitia quasi quam cum ad
                voluptate quod eaque tempore provident!
              </p>
              <br />
              <button type="button" class="btn btn-outline-primary">
                Get Start
              </button>
            </div>
          </div>
          <div className="col-md-6 p-3">
            <img src={props.imgfirst} alt="Best image" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Homesame;
