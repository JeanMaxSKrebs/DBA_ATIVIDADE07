import { Button, Modal } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { useState } from 'react'
import FormSalao from '../Saloes/FormSalao';

const EditButton = (props) => {
    let id = props.id;
    let saloes = props.saloes;

    const [showModal, setShowModal] = useState(false);
    const [salaoData, setSalaoData] = useState({});

    const closeModal = () => {
        setShowModal(false);
    }

    const handleEdit = (salaoId) => {
        // encontra o salão com o ID correspondente
        const salao = saloes.find(salao => salao.id === salaoId);

        // atualiza o estado com os dados do salão
        setSalaoData(salao);

        // abre o modal
        setShowModal(true);
    }

    return (
        <>
            <Button variant="primary" className="m-2" onClick={() => handleEdit(id)}>
                <PencilFill />
                Editar
            </Button>

            <Modal className='modalSalao' show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Salão</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <div className='dados'>
                        <p>ID do salão: {salaoData.id}</p>
                        <p>Nome do salão: {salaoData.nome}</p>
                        <p>Descricão do salão: {salaoData.descricao}</p>
                        <p>Localização do salão: {salaoData.localizacao}</p>
                        <p>Nome do salão: {salaoData.cnpj}</p>
                    </div> */}
                    <FormSalao className='dados' salao={salaoData} onCloseModal={closeModal}/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Sair
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditButton;