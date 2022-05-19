function OutraLista({ items }){
    return  (
        <>
            <h3>Lista de coisas:</h3>
            {items.length > 0 ?
                (
                    items.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                )
                :
                (
                    <p>Não a itens na lista</p>
                )
            }
        </>
    )
}

export default OutraLista