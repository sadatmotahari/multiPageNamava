import './style.css' ;
export default function Children(props){
    const {listName} = props ;
    function renderChildren(){
        return listName.map(function(item , index){
            const {title , image } = item;
            return(
                <li className="kids-box" key={index}>
                    <div className="kids">
                        <img src={image}/>
                    </div>
                </li>
            )
        })
    }
    return(
        <div>
            <div className='container-full'>
            <ul className='kids-boxes'>{renderChildren()}</ul>
            </div>
        </div>
    )
}