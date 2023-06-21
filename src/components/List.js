const List = () => {
    const Saloes = [
        {
            id: 1,
            nome: "Fest Haus"
        },
        {
            id: 2,
            nome: "Admin"
        },
        {
            id: 3,
            nome: "Admina"
        }
    ]

    return (
        <div>
            {Saloes.map((salao) => (
                <p key={salao.id}>{salao.id} - {salao.nome}</p>
            ))}
        </div>
    )
}
export default List;