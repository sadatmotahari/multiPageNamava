import './style.css' ;
export default function Long(props){
    const {listName , title} = props ;
    function renderLong(){
        return listName.map(function(item , index){
            const {title , name , image } = item;
            return(

                <li className="longBox" key={index}>
                    <div className="long-content">
                        <img src={image}/>
                    </div>
                    <h3 className="long-name">{name}</h3>
                </li>
            )
        })
    }
    return(
        <div>
            <div className='container-full'>
            <ul className='long'>{renderLong()}</ul>
            </div>
        </div>
    )
}