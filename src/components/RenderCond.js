const RenderCond = (props) => {
    // const x = 4;

    return (
        <div>
            {<p>x é: {props.x}</p>}
            {props.x > 5 ? <p> x é maior que 5</p> :<p> x que é: {props.x} é menor que 5</p>}
        </div>
    )
}
export default RenderCond;