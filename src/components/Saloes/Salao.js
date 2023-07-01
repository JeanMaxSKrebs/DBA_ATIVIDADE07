import EditButton from '../Botoes/EditButton';
import DeleteButton from '../Botoes/DeleteButton';
import FestaFilho from '../Festas/FestaFilho';
import { useEffect, useState } from 'react';
import { loadData } from '../Festas/MostraFestas';
import { db } from '../../firebase';
import { getDocs, collection, query, where, onSnapshot } from 'firebase/firestore';

import { Card, Col, Carousel } from 'react-bootstrap';

const Salao = (props) => {
    const [festas, setFestas] = useState([]);
    const [loading, setLoading] = useState(0);

    let salao = props.salao;
    let saloes = props.saloes

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
      setLoading(true);

      const unsubscribe = () => {
          unsub();
      };
      return unsubscribe;
  };

    const collectionRef = collection(db, "festas");

    const unsub = onSnapshot(collectionRef, (snapshot) => {
        setFestas(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

        setLoading(false);
      });

    return (
        <Col xs={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
            {/* coluna com 12 de largura em telas pequenas (xs), 6 em médias (md) e 4 em grandes (lg) */}
            <Card className='salao' style={{ flexGrow: 1, height: '100%',  display: 'flex', justifyContent: 'center'}}>
                <Card.Body style={{ flex: '0 0 auto' }}>
                    {/* <Carousel interval={3000} pauseOnHover={true}>
                        {salao.imagens.map((imagem, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100" src={imagem} alt={`Imagem ${index}`} />
                            </Carousel.Item>
                        ))}
                    </Carousel> */}
                    <Card.Title>{salao.nome}</Card.Title>
                    <Card.Img variant="top" src={salao.logo} />
                    <Card.Img variant="top" src={salao.imagem} />
                    <Card.Text>{salao.descricao}</Card.Text>
                    <Card.Text>{salao.localizacao}</Card.Text>
                    <Card.Text>{salao.cnpj}</Card.Text>
                    <EditButton id={salao.id} saloes={saloes}></EditButton>
                    <DeleteButton id={salao.id}></DeleteButton>

                    {/* {console.log(salao.id)} */}
                    {/* {console.log(festas)} */}
                    
                    <Card className='salao' style={{ margin: 0, flexGrow: 1,  display: 'flex', justifyContent: 'center'}}>
                        <div className="row">
                            {festas.map((festa) => (
                                console.log(salao.cnpj),
                                console.log(festa.cnpjSalao),
                                salao.cnpj === festa.cnpjSalao ? (
                                            <FestaFilho key={festa.id} festa={festa} festas={festas} />
                                ) : null
                            ))}
                        </div>
                    </Card>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Salao;

{/* <Col xs={12} md={6} lg={4}>
{/* coluna com 12 de largura em telas pequenas (xs), 6 em médias (md) e 4 em grandes (lg)
<Card className='salao d-flex align-items-center'  style={{flexGrow: 1, height: '100%'}}>
    <Card.Body style={{padding: '0px'}}>
        <Card.Img variant="top" src={salao.imagem}/>
        <Card.Title>{salao.nome}</Card.Title>
        <Card.Text>{salao.descricao}</Card.Text>
        <Card.Text>{salao.localizacao}</Card.Text>
        <Card.Text>{salao.cnpj}</Card.Text>
        <EditButton id={salao.id} saloes={saloes}></EditButton>
        <DeleteButton id={salao.id}></DeleteButton>
    </Card.Body>
</Card>
</Col>
*/}