import { useState } from "react";
import "./Form.css";
import Container from "../Container";
import InputField from "../InputField";
import OptionsField from "../OptionsField";
import SubmitButton from "../SubmitButton";
import FormToggle from "../FormToggle";

const Form = ({title, newPersonInStaff, teams}) => {

  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const defaultImage = "/img/user.svg";
    const newImage = image.trim() === "" ? defaultImage : image;

    newPersonInStaff({
      name,
      profession,
      image: newImage,
      team
    });
    
    setName("");
    setProfession("");
    setImage("");
    setTeam("");
  }

  return (
    <Container>
      <section className="form__box" data-form>
        <form onSubmit={submit}>
          <h2>{title}</h2>
          
          <InputField 
            label="Nome" 
            type="text" 
            placeholder="Digite seu nome" 
            required={true} 
            value={name} 
            newValue={value => setName(value)} 
            ariaLabel="Digite seu nome" 
            ariaRequired={true}
          />

          <InputField 
            label="Cargo" 
            type="text" 
            placeholder="Digite seu cargo" 
            required={true} 
            value={profession} 
            newValue={value => setProfession(value)} 
            ariaLabel="Digite seu cargo" 
            ariaRequired={true}
          />

          <InputField 
            label="Imagem" 
            type="url" 
            placeholder="Informe o endereço da imagem" 
            required={false} 
            value={image} 
            newValue={value => setImage(value)} 
            ariaLabel="Informe o endereço da imagem" 
            ariaRequired={false}
          />

          <OptionsField 
            label="Time" 
            required={true} 
            items={teams} 
            value={team} 
            newValue={value => setTeam(value)} 
            ariaLabel="Lista de times" 
            ariaRequired={true}
          />

          <SubmitButton/>
        </form>
      </section>

      <FormToggle/>
    </Container>
  );
}

export default Form;