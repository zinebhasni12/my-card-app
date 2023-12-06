const Card = ({person})=>{
    return (
        <div style={{border:"1px solid black",margin:"20px",backgroundColor:"aqua"}}>

                {person.shows ?
                 <div>
                        <h1>{person.fullName}</h1>
                       <h2>{person.bio}</h2>
                        <h3>{person.profession}</h3>
                        <img src={person.imgSrc} alt={person.fullname} />
                        <span>{person.shows}</span>
                 </div> :
                    <p style={{fontSize:"100px"}}>Not Found!!</p>
                }

        </div>
    )
}
export default Card