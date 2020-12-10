import React, { useState } from 'react'

import Lottie from 'react-lottie';
import bells from '../../assets/lottieFiles/bells.json'



import { Container, FormBox, Preview } from './styles'

const CreateLetter = () => {

    const [dest, setDest] = useState('')
    const [msg, setMsg] = useState('')
    const [rmt, setRmt] = useState('')

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bells,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            
            <Container>
                <FormBox onSubmit={() => { console.log('hello') }}>
                    <h1>Vamos criar sua carta...</h1>
                    <div>
                        <label htmlFor="destinatario">Destinatário</label>
                        <input type="text" id="destinatario" onChange={(e) => setDest(e.target.value)} placeholder="Nome ou apelido da pessoa" />
                    </div>
                    <div>
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" onChange={(e) => setMsg(e.target.value)} placeholder="Conteúdo da sua carta" rows={5} cols={50} />
                    </div>
                    <div>
                        <label htmlFor="remetente">Remetente</label>
                        <input type="text" onChange={(e) => setRmt(e.target.value)} id="remetente" placeholder="Seu nome ou apelido" />
                    </div>

                    <input type="submit" value="Criar carta" />
                </FormBox>

                <Preview>
                    <Lottie
                        options={defaultOptions}
                        height={150}
                        width={150}
                    />
                    <div>
                        <p id="dest">Para: {dest}</p>
                        <p id="msg">{msg}</p>
                        <p id="rmt">Com amor, {rmt}.</p>
                    </div>
                </Preview>
            </Container>
        </>
    );
}

export default CreateLetter;