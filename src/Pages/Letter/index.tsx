import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import './styles'
import bells from '../../assets/lottieFiles/bells.json'
import load from '../../assets/lottieFiles/load.json'
import { Container, LetterBox, Loading } from './styles';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api'

interface LetterParams {
    id: string;
}

interface Data {
    destinatario: string;
    remetente: string;
    msg: string;
}


const Letter = () => {

    const bellsLottie = {
        loop: true,
        autoplay: true,
        animationData: bells,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const santaLottie = {
        loop: true,
        autoplay: true,
        animationData: load,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [data, setData] = useState<Data | null>(null)
    const { params } = useRouteMatch<LetterParams>();

    useEffect(() => {

        api.get(`/letter/${params.id}`).then(response => {
            setTimeout(() => {
                setData(response.data)
            }, 3000)
        })


    }, [params.id])



    if (data == null) {
        return (
            <Loading>
                <p>Só mais um pouco...</p>
                <Lottie
                    options={santaLottie}
                    height={250}
                    width={250}
                />
                <p>O Noel esta correndo para entregar sua carta</p>
            </Loading>
        )
    }

    return (
        <Container>
            <LetterBox>


                <Lottie
                    options={bellsLottie}
                    height={150}
                    width={150}
                />
                <div>
                    <p id="dest">Para: {data.destinatario}</p>
                    <p id="msg">{data.msg}</p>
                    <p id="rmt">Com amor, {data.remetente}.</p>
                </div>
            </LetterBox>
        </Container>
    );
}

export default Letter;