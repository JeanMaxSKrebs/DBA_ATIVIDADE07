import { Button } from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';

const DeleteButtonFesta = (props) => {

    let id = props.id;

    async function delFesta(festaId) {
        await deleteDoc(doc(db, 'festas', festaId));
    }

    return (
        <Button variant="danger" className="m-2" onClick={() => delFesta(id)}>
            <TrashFill />
            Excluir
        </Button>
    )
}

export default DeleteButtonFesta;