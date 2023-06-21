import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Salao from './Salao';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';


const MostraSaloes = () => {
    const [saloes, setSaloes] = useState([]);
    const [loading, setLoading] = useState(0);

    const collectionRef = collection(db, "saloes");

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
        setSaloes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
    });


    if (loading) {
        return <h1>Carregando... Aguarde uns Intantes</h1>;
    }


    return (
        <div className="list-saloes">
            {/* <h2>Lista de Salões:</h2> */}
            {/* <Row> */}
            <Row className="justify-content-center">

                {saloes.length === 0 && <p>Não Existem Salões no Banco</p>}
                {saloes.map((salao) => (
                    <Salao key={salao.id} salao={salao} saloes={saloes}
                    />
                ))}
            </Row>
        </div >
    )
}

export default MostraSaloes; 