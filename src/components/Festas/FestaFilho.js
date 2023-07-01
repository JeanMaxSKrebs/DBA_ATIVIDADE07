import EditButtonFesta from '../Botoes/EditButtonFesta';
import DeleteButton from '../Botoes/DeleteButton';

import { Card, Col, Carousel } from 'react-bootstrap';

const Festa = (props) => {

    // console.log("entrou no festa");

    let festa = props.festa;
    let festas = props.festas
    // console.log(festa);
    // console.log(festas);


    return (
                <Card.Body style={{ width: '49%', margin: 0 }}>       
                    <Card.Title>{festa.nome}</Card.Title>
                    <Card.Img variant="top" src={festa.imagem} />
                    <Card.Text style={{ margin: 0 }} >{festa.tipo}</Card.Text>
                    <Card.Text style={{ margin: 0 }} >CNPJ SALÃO: {festa.cnpjSalao}</Card.Text>
                    <Card.Text style={{ margin: 0 }} >CPF CLIENTE: {festa.cpfCliente}</Card.Text>
                    <EditButtonFesta id={festa.id} festas={festas}></EditButtonFesta>
                    <DeleteButton id={festa.id}></DeleteButton>
                </Card.Body>

    )
}

export default Festa;