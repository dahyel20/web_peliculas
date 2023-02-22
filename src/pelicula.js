export  const Peliculas = (props) =>
{
	return <div className="movie-item-style-2">
			<img src={"https://image.tmdb.org/t/p/original//"+props.imagen} alt=""/>
			<div className="mv-item-infor">
				<h6><a href="moviesingle.html">{props.title}<span> {"("+props.fecha+")"}</span></a></h6>
				<p className="rate"><i className="ion-android-star"></i><span>{props.calificacion}</span> /10</p>
				<p className="describe">{props.descripcion}</p>
			</div>
		</div>
	
}

	
	



