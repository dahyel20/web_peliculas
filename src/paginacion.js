export default function Paginacion(props)
{

    const moviPaginas = () =>
    {
        const resultado = []
        for(let i = 1; i <= props.total; i++)
        {
            resultado.push(<a onClick={() => props.cambiarPagina(i)}
                className={(props.pagina) === i ? "active" : ""} 
                href="#">{i}</a>)
        }
        return resultado
    }

    return(
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Pagina {props.pagina} de {props.total}:</span>

                {moviPaginas()}

            </div>
        </div>
    )
    
}