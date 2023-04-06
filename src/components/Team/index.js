import "./Team.css";
import Container from "../Container";
import Staff from "../Staff";

const Team = ({name, staff, backgroundColor, accentColor}) => {
  
  return (
    staff.length > 0 && 
    
    <section className="team" style={{ backgroundColor: backgroundColor }}>
      <h2>
        {name}
        <div className="title__divider" style={{ backgroundColor: accentColor }}/>
      </h2>
      
      <Container>
        <div className="staff__line">
          {staff.map(person => 
            <Staff 
              key={person.name}
              name={person.name} 
              profession={person.profession} 
              image={person.image}
              accentColor={accentColor}
            />
          )}
        </div>
      </Container>
    </section>
  )
}

export default Team;