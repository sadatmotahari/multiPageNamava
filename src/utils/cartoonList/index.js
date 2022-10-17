import './style.css' ;
export default function CartoonList(props){
    const {listName , title} = props ;
    function renderCartoon(){
        return listName.map(function(item , index){
            const {title , name , type , year , rating , image , update, number} = item;
            return(

                <li className="cartoon-box" key={index}>
                    <div className="cartoon-imageContent">
                        <img src={image}/>
                        <div className="content">
                        <p>{type} {year}</p>
                        <p>{rating}</p>
                        </div>
                    </div>
                    <h3 className="cartoon-name">{name}</h3>
                    <p className='num'>{number}</p>
                </li>
            )
        })
    }
    return(
        <div>
            <div className='container-full'>
            <h2 className='cartoon-title'>{title}</h2>
            <ul className='cartoon-boxes'>{renderCartoon()}</ul>
            </div>
        </div>
    )
}