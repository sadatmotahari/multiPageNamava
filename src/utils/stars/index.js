import './style.css' ;
export default function Stars(props){
    const {listName , title} = props ;
    function renderStars(){
        return listName.map(function(item , index){
            const {title , name , type , year , rating , image , update} = item;
            return(

                <li className="movieBox" key={index}>
                    <div className="star">
                        <img src={image}/>
                    </div>
                    <h3 className="name">{name}</h3>
                </li>
            )
        })
    }
    return(
        <div>
            <div className='container-full'>
            <h2 className='title'>{title}</h2>
            <ul className='movieBoxes'>{renderStars()}</ul>
            </div>
        </div>
    )
}