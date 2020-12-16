import React, { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie';
import bells from '../../assets/lottieFiles/bells.json'
import load from '../../assets/lottieFiles/load.json'
import api from '../../services/api'

import { Container, FormBox, Preview, LetterLink, Loading } from './styles'

const CreateLetter = () => {

	const [dest, setDest] = useState('')
	const [msg, setMsg] = useState('')
	const [rmt, setRmt] = useState('')
	const [link, setLink] = useState('')
	const [loading, setLoading] = useState(false)


	const santaLottie = {
		loop: true,
		autoplay: true,
		animationData: load,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: bells,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	async function handleSubmit(event: FormEvent) {
		setLoading(true)
		event.preventDefault()
		if (dest !== '' && msg !== '' && rmt !== '') {
			const data = {
				destinatario: dest,
				msg,
				remetente: rmt
			}
			const response = await api.post('/letter', data);
			setLink(`letter/${response.data.id}`)

			setTimeout(() => {
				setLoading(false)
			}, 2000)

		}
	}

	if (loading) {
		return (
			<Loading>
				<p>Só mais um pouco...</p>
				<Lottie
					options={santaLottie}
					height={250}
					width={250}
				/>
				<p>Os duendes estão criando sua carta</p>
			</Loading>
		);
	}

	return (
		<>
			<Container>
				<FormBox onSubmit={handleSubmit}>
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

					{link !== '' && (
						<LetterLink>
							<Link to={link}>CLique aqui para ver a carta!</Link>
						</LetterLink>
					)}


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