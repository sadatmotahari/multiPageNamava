import './style.css' ;
export default function Section(props){
    const {listName} = props ;
    function renderSection(){
        return listName.map(function(item , index){
            const {name , image} = item;
            return(

                <li className="sectionBox" key={index}>
                    <div className="imageContent">
                        <img src={image}/>
                        <div className="detail">
                        <p>{name}</p>
                        </div>
                    </div>
                </li>
            )
        })
    }
    return(
        <div>
            <div className='container-full'>
            <ul className='sectionBoxes'>{renderSection()}</ul>
            </div>
        </div>
    )
}