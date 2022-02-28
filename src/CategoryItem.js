
function CategoryItem(props) {
    const {
        id,
        name,
        image,
        showList,
    } = props;


    return (
        <div className='card' onClick={() => showList(id)}>
            <div className='card-image'>
                <img src={process.env.PUBLIC_URL + image} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'> {name} </span>
            </div>
        </div>
    );
}

export { CategoryItem };