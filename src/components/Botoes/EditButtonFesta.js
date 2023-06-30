import { Button, Modal } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { useState } from 'react'
import FormFesta from '../Festas/FormFesta';

const EditButtonFesta = (props) => {
    let id = props.id;
    let festas = props.festas;

    // console.log("entrou no edit festa");

    // console.log(festas)

    const [showModal, setShowModal] = useState(false);
    const [festaData, setFestaData] = useState({});

    const closeModal = () => {
        setShowModal(false);
    }

    const handleEdit = (festaId) => {
        // encontra o salão com o ID correspondente
        const festa = festas.find(festa => festa.id === festaId);

        // atualiza o estado com os dados do salão
        setFestaData(festa);

        // abre o modal
        setShowModal(true);
    }

    return (
        <>
            <Button variant="primary" className="m-2" onClick={() => handleEdit(id)}>
                <PencilFill />
                Editar
            </Button>

            <Modal className='modalfesta' show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Festa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormFesta className='dados' festa={festaData} onCloseModal={closeModal}/>

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

export default EditButtonFesta;