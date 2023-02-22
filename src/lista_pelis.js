import { useEffect ,useState } from 'react';
import EnvolturaPagina from './envoltura';
import Paginacion from './paginacion';
import { Peliculas } from './pelicula';
import peliculasJson from './peliculas.json';


export default function ListaPeliculas()
{

    const [paginaActual, setPaginaActual] = useState(1)

  let listaPelis = peliculasJson.results
  const totalPorPagina = 5

  listaPelis = listaPelis.slice((paginaActual - 1) * totalPorPagina, paginaActual * totalPorPagina)

  const BuscaPeliculas = async() =>
  {

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page"

    const [data, setData] = useState([]);

    const fetApi = async () =>
    {
      const respuesta = await fetch(url)
      const json = await respuesta.json()
      setData(json)
    }

    useEffect(() => {
      fetApi()
    }, []);

  }

  BuscaPeliculas()


  const totalPaginas = () =>
  {
    let cantidadTotalPeliculas = peliculasJson.results.length
    return parseInt(cantidadTotalPeliculas / totalPorPagina);
  }

    return(
        <EnvolturaPagina>
        {listaPelis.map( pelis => 
         <Peliculas title={pelis.title}  imagen={pelis.poster_path} calificacion={pelis.vote_average}
         hora={pelis.horas} director={pelis.director} estrellas={pelis.estrellas} descripcion={pelis.overview} fecha={pelis.release_date}> 
         </Peliculas>
       )} 
      
         <Paginacion pagina={paginaActual} total={totalPaginas()} cambiarPagina={(pagina) => {
           setPaginaActual(pagina)
         }}>
         </Paginacion>    
     
        </EnvolturaPagina>
    )
}