import "./Staff.css";

const Staff = ({name, profession, image, accentColor}) => {

  return (
    <div className="card">
      <div className="header" style={{ backgroundColor: accentColor }}>
        <img className="picture" src={image} alt={"Foto de " + name}/>
      </div>

      <div className="info">
        <h3 className="name">{name}</h3>
        <h4 className="profession">{profession}</h4>
      </div>
    </div>
  )
}

export default Staff;