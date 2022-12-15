const Crads = (props) => {
  return (
    <>
   <div className="container">
   <div className="row">
   <div className="col-md-4">
   <div className="card" style={{width:'18rem'}}>
        <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
           {props.text}
          </p>
          <a href={props.link} className="btn btn-primary">
            Get Enroll
          </a>
        </div>
      </div>
   </div>

   </div>

   </div>

    </>
  );
};
export default Crads;


{/* <div className="card" style={{width:'18rem'}}>
<img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
<div className="card-body">
  <h5 className="card-title">{props.title}</h5>
  <p className="card-text">
   {props.text}
  </p>
  <a href={props.link} className="btn btn-primary">
    Get Enroll
  </a>
</div>
</div> */}