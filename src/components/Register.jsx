import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import "./styles/Register.css";

// username: "", email: "", password: "", confirmPassword: "" são objeto chave-valor. Portanto é como se fosse conforme abaixo:
// Usando variável de estado/Hook useState [data, setData]:
// const data = {
// username: "",
// email: "",
// password: "",
// confirmPassword: ""}
// Para acessar username por exempolo: data.username e assim por diante
// e 'setData' é a função do useState que atualiza o estado 'data' mais recente

const Register = ({ handleRegistration }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // função que recebe o evento (e) como parâmetro referente ao onChange do input
  // e.target é o elemento que disparou o evento (input HTML), ou seja, e.target = <input name="username" value="Rones" />.
  // Desconstrução viraria e.target.name (pega o atributo 'name' do input), neste caso, 'username'
  // Mesma coisa para 'value', viraria e.target.value e seria 'Rones'
  // 'setData' é a função do React para atualizar o estado 'data'
  // é passado uma função callback para o setData, ou seja, 'prevData' que é um objeto com os atributos
  // Spread operator = '...prevData'. Cria uma cópia de todas as propriedades do objeto atual 'data' que é o estado mais recente guardado pelo React (regra do React):
  // prevData = {
  // username: "",
  // email: "",
  // password: "",
  // confirmPassword: ""}
  // [name] é uma propriedade dinâmica do objeto. Se name === "username" e value === "Rones", então:
  // [name]: value  ===  "username": "Rones". Isso substitui apenas o campo 'username' no objeto copiado.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };

  return (
    <div className="register">
      <Logo title={"CryptoDucks"} />
      <p className="register__welcome">Por favor, registre-se</p>
      <form className="register__form" onSubmit={handleSubmit}>
        <label htmlFor="username">Nome de usuário:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={data.username}
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirme a senha:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={handleChange}
        />
        <div className="register__button-container">
          <button type="submit" className="register__link">
            Inscreva-se aqui
          </button>
        </div>
      </form>
      <div className="register__signin">
        <p>Já é um membro?</p>
        <Link to="login" className="register__login-link">
          Faça o login
        </Link>
      </div>
    </div>
  );
};

export default Register;
