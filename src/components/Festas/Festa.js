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
        <Col xs={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
            {/* coluna com 12 de largura em telas pequenas (xs), 6 em médias (md) e 4 em grandes (lg) */}
            <Card className='festa' style={{ flexGrow: 1, height: '100%',  display: 'flex', justifyContent: 'center'}}>
                <Card.Body style={{ flex: '0 0 auto' }}>
                    {/* <Carousel interval={3000} pauseOnHover={true}>
                        {festa.imagens.map((imagem, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100" src={imagem} alt={`Imagem ${index}`} />
                            </Carousel.Item>
                        ))}
                    </Carousel> */}
                    <Card.Title>{festa.nome}</Card.Title>
                    <Card.Img variant="top" src={festa.imagem} />
                    <Card.Text>{festa.tipo}</Card.Text>
                    <Card.Text>CNPJ SALÃO: {festa.cnpjSalao}</Card.Text>
                    <Card.Text>CPF CLIENTE: {festa.cpfCliente}</Card.Text>
                    <EditButtonFesta id={festa.id} festas={festas}></EditButtonFesta>
                    <DeleteButton id={festa.id}></DeleteButton>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Festa;