import { Form, FormGroup, Button } from 'react-bootstrap';
// import Chip from '@material-ui/core/Chip';
import { useEffect, useState } from 'react';
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';

const FormFesta = (props) => {
    // console.log("mostra o form");

    const collectionRef = collection(db, "festas");
    const [festa, setFesta] = useState([]);

    const [nome, setNome] = useState("")
    const [tipo, setTipo] = useState("")
    const [data, setData] = useState("")
    const [cpf, setCpf] = useState(0)
    const [cnpj, setCnpj] = useState(0)
    const [imagem, setImagem] = useState(null);

    const [editMode, setEditMode] = useState(false)

    const isFormValid = nome && tipo && data && cnpj && cpf;

    let festaEdit = props.festa;


    useEffect(() => {
        if (festaEdit) {
            // console.log(props.festa)
            console.log(festaEdit)
            setEditMode(true);

            setNome(festaEdit.nome);
            setTipo(festaEdit.tipo);
            setData(festaEdit.data);
            setCpf(festaEdit.cpf);
            setCnpj(festaEdit.cnpj);
            setImagem(festaEdit.imagem);

        }
    }, []);

    const handleImagemChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onload = (e) => {
          setImagem(e.target.result);
        };
      
        reader.readAsDataURL(file);
      };

    const addFesta = async e => {
        e.preventDefault()

        const docRef = await addDoc(collectionRef, {
            nome: nome,
            tipo: tipo,
            data: data,
            cpfCliente: cpf,
            cnpjSalao: cnpj,
            imagem: imagem,
        })
        console.log(docRef.id)

        setNome("");
        setTipo("");
        setData("");
        setCpf(0);
        setCnpj(0);
        setImagem("");
    }

    const updFesta = async e => {
        e.preventDefault();

        await updateDoc(doc(db, "festas", festaEdit.id), {
            nome: nome,
            tipo: tipo,
            data: data,
            cpfCliente: cpf,
            cnpjSalao: cnpj,
            imagem: imagem,

        })
        setFesta({})
        setNome("");
        setTipo("");
        setData("");
        setCpf(0);
        setCnpj(0);
        setImagem("");

        setEditMode(false);
        props.onCloseModal()
    }


    return (

        <div className="form-festas">
        <h2>Formulário</h2>
        <Form>
          <FormGroup>
            <Form.Label htmlFor="nome">Nome da Festa:</Form.Label>
            <Form.Control
              as="input"
              type="text"
              name="nome"
              className="form-control"
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome || ""}
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="tipo">Tipo:</Form.Label>
            <Form.Control
              as="input"
              type="text"
              name="tipo"
              className="form-control"
              placeholder="Tipo"
              onChange={(e) => setTipo(e.target.value)}
              value={tipo || ""}
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="data">Data:</Form.Label>
            <Form.Control
              as="input"
              type="text"
              name="data"
              className="form-control"
              placeholder="Data"
              onChange={(e) => setData(e.target.value)}
              value={data || ""}
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="cpf">CPF:</Form.Label>
            <Form.Control
              as="input"
              type="text"
              name="cpf"
              className="form-control"
              placeholder="CPF"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf || ""}
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="cnpj">CNPJ:</Form.Label>
            <Form.Control
              as="input"
              type="text"
              name="cnpj"
              className="form-control"
              placeholder="CNPJ"
              onChange={(e) => setCnpj(e.target.value)}
              value={cnpj || ""}
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="imagem">Imagem:</Form.Label>
            <Form.Control
              as="input"
              type="text"
              name="imagem"
              className="form-control"
              placeholder="Imagem"
              onChange={(e) => setImagem(e.target.value)}
              value={imagem || ""}
              required
            />
          </FormGroup>

          <Button
                type="submit"
                onClick={editMode ? updFesta : addFesta}
                color={editMode ? "success" : "primary"}
                disabled={!editMode ? !isFormValid : ""}
            >
                {editMode ? "Edit" : "Add"} &nbsp;Festa
            </Button>
        </Form>
        
      </div>      

    )
}

export default FormFesta;