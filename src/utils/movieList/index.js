import './style.css' ;
export default function MovieList(props){
    const {listName , title} = props ;
    function renderMovies(){
        return listName.map(function(item , index){
            const {title , name , type , year , rating , image , update, number} = item;
            return(

                <li className="movieBox" key={index}>
                    <div className="imageContent">
                        <img src={image}/>
                        <div className="content">
                        <p>{type} {year}</p>
                        <p>{rating}</p>
                        </div>
                    </div>
                    <h3 className="name">{name}</h3>
                    <p className='num'>{number}</p>
                </li>
            )
        })
    }
    return(
        <div>
            <div className='container-full'>
            <h2 className='title'>{title}</h2>
            <ul className='movieBoxes'>{renderMovies()}</ul>
            </div>
        </div>
    )
}