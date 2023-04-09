import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {

  const teams = [
    {
      name: "Programação",
      backgroundColor: "#D9F7E9",
      accentColor: "#57C278"
    },
    {
      name: "Front-End",
      backgroundColor: "#E8F8FF",
      accentColor: "#82CFFA"
    },
    {
      name: "Data Science",
      backgroundColor: "#F0F8E2",
      accentColor: "#A6D157"
    },
    {
      name: "Devops",
      backgroundColor: "#FDE7E8",
      accentColor: "#E06B69"
    },
    {
      name: "UX e Design",
      backgroundColor: "#FAE9F5",
      accentColor: "#DB6EBF"
    },
    {
      name: "Mobile",
      backgroundColor: "#FFF5D9",
      accentColor: "#FFBA05"
    },
    {
      name: "Inovação e Gestão",
      backgroundColor: "#FFEEDF",
      accentColor: "#FF8A29"
    }
  ];

  const [staff, setStaff] = useState([]);

  const addNewPerson = (person) => {
    setStaff([...staff, person]);
  }

  return (
    <div className="App">
      <Header/>

      <Form 
        title="Preencha os dados para criar o card do colaborador." 
        teams={teams.map(team => team.name)} 
        newPersonInStaff={person => addNewPerson(person)}
      />
      
      {teams.map(team => 
        <Team 
          key={team.name} 
          name={team.name} 
          staff={staff.filter(person => person.team === team.name)}
          backgroundColor={team.backgroundColor} 
          accentColor={team.accentColor}
        />
      )}

      <Footer/>
    </div>
  );
}

export default App;
