import AnotherComponent from './AnotherComponent';


function FirstComponent() {
    //comentário
    {/* comentario 
de varias linhas*/}



    return (
        <div className="firstcomponent">
            <h3>
                Gerenciador de Salões
                {console.log("Gerenciador")}
            </h3>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent;