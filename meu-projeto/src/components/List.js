import  Item from './Item'

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Fiat" ano_lancamento={1998}/>
                <Item marca="Ford" ano_lancamento={19648}/>
                <Item />
            </ul>
        </>
    )
}

export default List