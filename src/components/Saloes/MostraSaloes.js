import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Salao  from './Salao';
import { db } from '../../firebase';
import {
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where
}   from "firebase/firestore";

const MostraSaloes = () => {
    const [saloes, setSaloes] = useState([]);
    const [loading, setLoading] = useState(0);
    const [festas, setFestas] = useState([]);

    const collectionRef = collection(db, "saloes");

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

  const loadFestas = (saloes) => {
    saloes.forEach(salao => {
      let consulta = query(
        collection(db, 'festas'),
        where('cnpjSalao', '==', salao.cnpj)
      )
      getDocs(consulta)
        .then(querySnap => {
          // console.log(querySnap);
          if (querySnap.empty){
            // console.log('erro');
            return;
          }
          let festas = querySnap.docs.map(festasDoc => {
            return festasDoc.data()
          })
          // console.log({ salao: salao.id, festas: festas })
          // console.log(festas);
          // console.log('festas');
          let newSaloes = saloes.map(nsalao => {
            if (nsalao.id === salao.id) {
                // console.log('nsalao')
                nsalao.festas = festas
              }
              return nsalao
          })
          setSaloes(newSaloes);
          // loadFestasData(festas, salao, saloes)
        })
        .catch(e => console.error(e.message))
    })
  }
  const loadFestasData = (festas, salao, saloes) => {
    // console.log(salaoId);
    // debugger;
    // console.log('foi');
    // console.log('foi');
    // console.log('foi');

    // let festaCollection = collection(db, 'clientes');
    //where(campo,op,valor)
    let queryUser = query(
      collection(db, 'clientes'),
      where('cpf', '==', salao.cpf)
    )
    getDocs(queryUser)
      .then(festaQuerySnap => {
        // console.log(festaQuerySnap);
        if (festaQuerySnap.empty) {
          console.log('festaQuerySnap');
        
          return;
        }
        let clienteData = festaQuerySnap.docs.map(clienteDoc => {
          return ({ id: clienteDoc.id, ...clienteDoc.data() })
        })
        let newSaloes = saloes.map(nsalao => {
          console.log(salao)
          if (nsalao.id === salao.id) {
              console.log(salao)
              console.log('nsalao')
              console.log(nsalao)
              nsalao.festas = festas
              nsalao.cliente = clienteData
              return nsalao
          }
        })
        setSaloes(newSaloes)
      })
      .catch(e => console.error(e.message))
  }

    const unsub = onSnapshot(collectionRef, (snapshot) => {
        // setSaloes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        loadFestas(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        // loadFestas(saloes)

        setLoading(false);
        // loadFestas(festas)
    });

    if (loading) {
        return <h1>Carregando... Aguarde uns Intantes</h1>;
    }

   

    return (
      <>
        <div className="list-saloes">
            {/* <h2>Lista de Salões:</h2> */}
            {/* <Row> */}
            <Row className="justify-content-center">
            {/* {console.log(saloes)} */}

                {saloes.length === 0 && <p>Não Existem Salões no Banco</p>}
                {saloes.map((salao) => (
                  <Salao key={salao.id} salao={salao} saloes={saloes}/>
                    ))}
            </Row>
        </div >
      </>
    )
}

export default MostraSaloes; 