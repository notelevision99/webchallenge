function CategoryCard(props) {
    return (
        <>
            <div className='card'>
                <div style={{ background: 'transparent' }} className='card-header'>
                    <h3
                        style={{
                            color: 'rgba(139, 51, 0, 0.8)',
                            fontWeight: 'bold',
                        }}
                        className='card-title'>
                        {props.title}
                    </h3>
                </div>
                <div className='card-body'>
                    <ul>
                        {props.categories.map((catrgory) => (
                            <li>
                                <button className='item-categories-blog'>category</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default CategoryCard;
