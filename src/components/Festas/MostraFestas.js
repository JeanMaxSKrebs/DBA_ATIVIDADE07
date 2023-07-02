import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Festa from './Festa';
import { db } from '../../firebase';
import { getDocs, collection, query, where, onSnapshot } from 'firebase/firestore';

const MostraFestas = () => {
    const [festas, setFestas] = useState([]);
    const [loading, setLoading] = useState(0);

    const collectionRef = collection(db, "festas");

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


    const unsub = onSnapshot(collectionRef, (snapshot) => {
        // console.log('oi');
        setFestas(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

        setLoading(false);
      });


    if (loading) {
        return <h1>Carregando... Aguarde uns Intantes</h1>;
    }


    return (
        <>
            <div className="list-festas">
                {/* <h2>Lista de Festas:</h2> */}
                {/* <Row> */}
                <Row className="justify-content-center">
                    {/* {console.log(festas)} */}
                    {festas.length === 0 && <p>Não Existem Festas no Banco</p>}
                    {festas.map((festa) => (
                        // <p>{festa.id}</p>
                        <Festa key={festa.id} festa={festa} festas={festas}/>
                        ))}
                </Row>
            </div >
        </>
    )
}

export default MostraFestas; 