import Button from './evento/Button'

function Evento({numero}) {

    function meuEvento(){
        console.log(`opa ${numero}`)
    }

    function segundoEvento() {
        console.log(`segundo evento`)
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento