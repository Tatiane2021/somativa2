import { useState } from 'react';
import firebase from '../Firebase';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState(false)


    const fazerLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setErro(false)

        firebase.auth().signInWithEmailAndPassword(email, senha).then((data) => {
            console.log(data);
            navigate("/principal")

        }).catch(() => {
            setErro(true)
        })
    }

    return (
        <form class="Login" onSubmit={fazerLogin}>
            <div class="Conteudo">
                <p class='titulo'>Login</p>
                <input class="Input" placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' class="Input" placeholder='Digite sua senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>

            <button class='button' type='submit'>Acessar</button>
            <Link class='buttonCadastro' to="/cadastro">Cadastro</Link>

            {erro ? <p class='notice'>Usuario não cadastrado!</p> : null}
        </form>
    );
}
export default Login;
