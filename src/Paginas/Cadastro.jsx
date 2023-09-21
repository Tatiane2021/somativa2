import { useState } from 'react';
import '../App.css';
import firebase from '../Firebase';

function Cadastro() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [senha, setSenha] = useState("")
    const [sucesso, setSucesso] = useState(false)
    const [erro, setErro] = useState(false)

    const fazerCadastro = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setSucesso(false)
        setErro(false)

        firebase.auth().createUserWithEmailAndPassword(email, senha).then((data) => {
            firebase.firestore().collection("usuario").add({
                uid: data.user.uid,
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                nascimento: nascimento,
                senha: senha,
            }).then(() => {
                setSucesso(true)
                setErro(false)

                setNome("")
                setSobrenome("")
                setEmail("")
                setNascimento("")
                setSenha("")
            }).catch(() => {
                setErro(true)
                setSucesso(false)
            })
        }).catch(() => {
            setErro(true)
            setSucesso(false)
        })
    }

    return (
        <form class="Cadastro" onSubmit={fazerCadastro}>
            <div class="Principal">
                <p className='titulo'>Cadastro</p>
                <input class="Input" placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} required />
                <input class="Input" placeholder='Sobrenome' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
                <input class="Input" placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input class="Input" placeholder='Data de nascimento' value={nascimento} onChange={(e) => setNascimento(e.target.value)} required />
                <input type='password' class="Input" placeholder='Digite sua senha' value={senha} onChange={(e) => setSenha(e.target.value)} required />
            </div>

            <button className='button' type='submit'>Cadastrar</button>

            {sucesso ? <p className='notice'>Cadastro realizado com sucesso!</p> : null}
            {erro ? <p className='notice'>Erro, tente novamente!</p> : null}
        </form>
    );
}
export default Cadastro;
