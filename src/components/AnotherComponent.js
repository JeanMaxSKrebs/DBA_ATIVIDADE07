const AnotherComponent = () => {

    const handleClick = () => {
        console.log("CLICOU");
    }

    return (
        <div className="AnotherComponent">
            <h3>
                AnotherComponent
                {console.log("AnotherComponent")}
            </h3>
            <button onClick={handleClick}>Não Clique</button>
        </div>
    )
}

export default AnotherComponent;