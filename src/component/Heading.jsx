
function Heading({name1,name2,idName}) {
    return(
      <div className= {`heading-${idName}`}>
          <div className="title-1">{name1}</div>
          <div className="title-2">{name2}</div>
      </div>
    );
  }

export default Heading;