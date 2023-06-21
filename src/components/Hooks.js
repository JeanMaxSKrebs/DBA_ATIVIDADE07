import { useState } from "react";

const Hooks = () => {

    let salao = "ADMINA";
    const [novoSalao, setNovoSalao] = useState("ADMINA");

    const changeSalao = () => {
        salao = "FEST HAUS";
    };

    const changeNewSalao = () => {
        setNovoSalao("FEST HAUS");
    };
    return (
        <div>
            <div>
                <p>Salão: {salao} </p>
                <button onClick={changeSalao}>Trocar Salão</button>
            </div>
            <div>
                <p>Salão: {novoSalao} </p>
                <button onClick={changeNewSalao}>Trocar Salão</button>
            </div>
        </div>

    );
};

export default Hooks;