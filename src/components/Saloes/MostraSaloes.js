import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Salao from './Salao';
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
        // setFestas()
        setLoading(false);
        loadFestas(festas)
    });


    if (loading) {
        return <h1>Carregando... Aguarde uns Intantes</h1>;
    }

    const listFesta = () => {
        getDocs(collectionRef)
          .then(querySnap => {
            //console.log(querySnap.docs.map(d=>d.data().todo))
            const docs = querySnap.docs
            if (!docs.length)
              throw Error("Empty data!")
    
            const todos = docs.map(
              doc => {
                const todo = ({
                  id: doc.id,
                  // text: doc.data().text
                  ...doc.data()
                })
    
                todo.details && formatDetailsDate(todo.details)
                todo.collabs && getCollabsEmail(todo.collabs)
    
                return todo;
              })
    
            loadFestas(festas)
            setTodos(todos)
            setLoading(true)
          }).catch(e =>
            console.error(e)
          );
      }

    const loadFestas = (festas) => {
        festas.forEach(festa => {
          const festasRef = collection(db, `saloes/${festa.id}/festas`)
          getDocs(festasRef)
            .then(snapFestas=> {
              if (snapFestas.empty)
                return;
    
              let festas = snapFestas.docs.map(stepDoc => {
                return { id: stepDoc.id, ...stepDoc.data() }
              })
    
              let newFestas = festas.map(nfesta => {
                if (nfesta.id === festa.id)
                    nfesta.festas = festas
                return nfesta
              })
              setSaloes(newFestas)
            })
            .catch(e => console.error(e.message))
        })
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