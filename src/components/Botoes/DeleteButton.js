import { Button } from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';

const DeleteButton = (props) => {

    let id = props.id;

    async function delSalao(salaoId) {
        await deleteDoc(doc(db, 'saloes', salaoId));
    }

    return (
        <Button variant="danger" className="m-2" onClick={() => delSalao(id)}>
            <TrashFill />
            Excluir
        </Button>
    )
}

export default DeleteButton;