import { useEffect, useState } from 'react';
import firebase from '../Firebase';

function Principal() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        firebase.firestore().collection("usuario").get().then((retorno) => {
            let data = []
            retorno.forEach((item) => {
                data.push({ nome: item.data().nome, sobrenome: item.data().sobrenome, nascimento: item.data().nascimento })
            })
            setUsuarios(data)
        })
    }, [])


    return (
        <div class="Principal">
            <p class="titulo">Principal</p>

            <div class="grid-container">
                <div class="grid-item">
                    <p class="DadosMenu">Nome:</p>
                    <p class="DadosMenu">Sobrenome:</p>
                    <p class="DadosMenu">Data de nascimento:</p>
                </div>

                {usuarios.map((usuario) => {
                    return (
                        <div class="grid-item" >
                            <p class="Dados">{usuario.nome}</p>
                            <p class="Dados">{usuario.sobrenome}</p>
                            <p class="Dados">{usuario.nascimento}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Principal;
