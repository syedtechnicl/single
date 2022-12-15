import Crads from "./Crads";
import Sdata from "./Sdata";
const Service=()=>{
return(
    <>
    <div className="container">
    <div className="row">
    <div className="col-md-2">
    {
        Sdata.map((res,index)=>{
            return <Crads 
                key={index}
                imgsrc={res.imgsrc}
                title={res.title}
                text={res.text}
                link={res.link}

            />

        })
    }
    </div>

    </div>

    </div>
   
    </>
)
}
export default Service;



// {
//     Sdata.map((res,index)=>{
//         return <Crads 
//             key={index}
//             imgsrc={res.imgsrc}
//             title={res.title}
//             text={res.text}
//             link={res.link}

//         />

//     })
// }