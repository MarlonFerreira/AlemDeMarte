import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Col, Row, Input, InputGroup, Button } from 'reactstrap'

import utilAjax from '../utils/utilAjax'

const URL_API_IMAGEM = `${process.env.REACT_APP_API_URL}/imagem`
const URL_API_USUARIOIMAGEM = `${process.env.REACT_APP_API_URL}/usuarioimagem`
const URL_API_USUARIO = `${process.env.REACT_APP_API_URL}/usuario`
const URL_API_LIKE = `${process.env.REACT_APP_API_URL}/like`
const URL_API_NASA = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=bcWMjvQQeJcQfeS1m4CzAJODbjx83Hu3tvfKUIaI'


function initialState() {
    return { id: null, sol: null, camera: null, img_src: null, earth_date: null }
}

function initialDados() {
    return { id: null, id_imagem: null, id_usuario: null, btn_like_mostrar: null, likes: null, nome: null }
}

function initialContador() {
    return { numero: 0 }
}

function initialCurtir() {
    return { curtir: null }
}

const Home = (props) => {
    const [imagem, setValues] = useState(initialState);
    const [dados, setDados] = useState(initialDados);
    const [contador, setContador] = useState(initialContador);
    const [curtida, setCurtir] = useState(initialCurtir);

    const { id_usuario } = useParams();

    useEffect(() => {
        utilAjax.requisicaoAjaxGetJson(URL_API_NASA)
            .then((response) => {
                setValues(response)
                utilAjax.requisicaoAjaxPostJson(URL_API_IMAGEM, { id: response.photos[contador.numero].id })
                    .then((response) => {
                        utilAjax.requisicaoAjaxGetJson(`${URL_API_USUARIOIMAGEM}?id=${response.id}&id_usuario=${id_usuario}`)
                            .then((response) => {
                                setDados(response)
                            })
                    })
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id_usuario, contador.numero, curtida])

    async function proxima() {
        let count = contador.numero + 1
        if (count === imagem.photos.length)
            count = 0
        setContador({ numero: count })
    }

    async function anterior() {
        let count = contador.numero - 1
        if (count < 0)
            count = imagem.photos.length - 1
        setContador({ numero: count })
    }

    async function like() {
        if (dados.like_mostrar === 'Curtido') {
            return false
        }
        else {
            utilAjax.requisicaoAjaxPostJson(URL_API_LIKE, { id: imagem.photos[contador.numero].id, likes: dados.likes, id_usuario: id_usuario, like: dados.like_mostrar })
            setCurtir({ curtir: 'Like' })
        }
    }

    function onChange(event) {
        const { value, name } = event.target
        utilAjax.requisicaoAjaxPatchJson(`${URL_API_USUARIO}?id=${id_usuario}&nome=${value}`)
            .then(
                setDados({
                    ...dados,
                    nome: value
                })
            )
    }

    return (
        <Container id="main">
            <Row className="justify-content-center">
                {
                    !dados ? 'Carregando...' : <h1>Olá {dados.nome} </h1>
                }
            </Row>
            <hr></hr>
            <Row className="justify-content-center">
                <Col md="12">
                    {
                        !imagem.photos ? 'Carregando...' : <img src={imagem.photos[contador.numero].img_src} alt="Foto do planeta Marte" width="1130" height="600" />
                    }
                </Col>
            </Row>
            <br></br>
            <Row className="justify-content-center">
                <Col md="11">
                    {
                        <Button color="primary" onClick={like}>{dados.like_mostrar}</Button>
                    }
                </Col>
                <Col md="1">
                    {
                        !dados ? 'Carregando...' : <h5>{dados.likes} likes </h5>
                    }
                </Col>
            </Row>
            <br></br>
            <Row className="justify-content-center">
                <Col md="11">
                    <Button color="primary" onClick={anterior}>Anterior</Button>
                </Col>
                <Col md="1">
                    <Button color="primary" onClick={proxima}>Proxima</Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="11">
                    <InputGroup style={{ marginTop: "65px" }} className="mb-3 justify-content-center">
                        <h5 style={{ marginTop: "5px" }}>Editar nome: &nbsp;</h5>
                        <Input type="text" name="name" onChange={onChange} defaultValue={dados.nome}>
                        </Input>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Home