import './style.css' ;
export default function LiveStream(props){
    const {listName , title} = props ;
    function renderLives(){
        return listName.map(function(item , index){
            const {title , name, categories , date , image } = item;
            return(

                <li className="movieBox" key={index}>
                    <div className="live-content">
                        <img src={image}/>
                        <div className="categories">
                        <p>{name}</p>
                        <p>{categories}</p>
                        <p>{date}</p>
                        </div>
                    </div>
                    
                </li>
            )
        })
    }
    return(
        <div>
            <div className='container-full'>
            <h2 className='title'>{title}</h2>
            <ul className='lives'>{renderLives()}</ul>
            </div>
        </div>
    )
}