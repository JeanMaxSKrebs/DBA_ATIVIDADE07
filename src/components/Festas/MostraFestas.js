import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Festa from './Festa';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';


const MostraFestas = () => {
    const [festas, setFestas] = useState([]);
    const [loading, setLoading] = useState(0);

    const collectionRef = collection(db, "festas");

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);

            const unsubscribe = () => {
                unsub();
            };
            return unsubscribe;
        };

        loadData();
    }, []);

    const unsub = onSnapshot(collectionRef, (snapshot) => {
        setFestas(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
    });


    if (loading) {
        return <h1>Carregando... Aguarde uns Intantes</h1>;
    }


    return (
        <div className="list-festas">
            {/* <h2>Lista de Salões:</h2> */}
            {/* <Row> */}
            <Row className="justify-content-center">

                {festas.length === 0 && <p>Não Existem Salões no Banco</p>}
                {festas.map((festa) => (
                    <Festa key={festa.id} festa={festa} festas={festas}
                    />
                ))}
            </Row>
        </div >
    )
}

export default MostraFestas; 