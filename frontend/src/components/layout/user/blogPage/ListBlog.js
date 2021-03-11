import banner from '../../../../assets/images/banner/banner-1.jpg';

function ListBlog() {
    return (
        <>
            <div className='blog-grid'>
                <div className='blog-card'>
                    <img className='z-depth-1-half' src={banner} />
                    <h1>Tin Tức 1</h1>
                </div>

                <hr />

                <div className='blog-card'>
                    <img className='z-depth-1-half' src={banner} />
                    <h1>Tin Tức 1</h1>
                </div>
                <hr />

                <div className='blog-card'>
                    <img className='z-depth-1-half' src={banner} />
                    <h1>Tin Tức 1</h1>
                </div>
                <hr />

                <div className='blog-card'>
                    <img className='z-depth-1-half' src={banner} />
                    <h1>Tin Tức 1</h1>
                </div>
            </div>
        </>
    );
}
export default ListBlog;
