import "./FormToggle.css";

const FormToggle = () => {
  
  const hideShowForm = (event) => {
    const form = document.querySelector("[data-form]");
    form.classList.toggle("active");
  
    const active = form.classList.contains("active");
  
    if (active) {
      setTimeout(() => {form.style.display = "none"}, 1000);
      event.currentTarget.setAttribute("aria-expanded", false);
      event.currentTarget.setAttribute("aria-label", "Abrir formulário");
    }
  
    else {
      form.style.display = "inherit";
      event.currentTarget.setAttribute("aria-expanded", true);
      event.currentTarget.setAttribute("aria-label", "Fechar formulário");
    }
  }
  
  return (
    <section className="form__toggle">
      <div>
        <h2>Minha Organização:</h2>
        <div className="title__divider"/>
      </div>

      <button onClick={hideShowForm} aria-label="Fechar formulário">
        <img src="/img/add.svg" alt="Adicionar"/>
      </button>
    </section>
  )
}

export default FormToggle;