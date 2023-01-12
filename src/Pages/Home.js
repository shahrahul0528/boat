import '../SCSS/Home.scss'
import boatNet from '../Assets/Home/Carasouel/boatNetflix.webp'
import earphone from '../Assets/Home/Carasouel/earphoneAdv.webp'
import watchoffer from '../Assets/Home/Carasouel/watchOffer.webp'
import mainApi from '../Components/API'




function Home(params) {
    return(
        <div className="main-home conTainer mt-3">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={boatNet} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={earphone} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={watchoffer} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>


            <div className='mapProducts'>
                <h1 className="giftwithboat">Gift with Boat</h1>
                <div className='row mb-4'>
                    
                    {mainApi.map((data) =>{
                        return(
                            <div className='col-3 mt-5 mb-2'>
                                <div className='main-card '>
                                    <div className='productImage'>
                                        <img src={data.ImageUrl} className="img-fluid w-100"/>
                                    </div>
                                    <div className="main-info mb-3">
                                        <h3 className="info-h3"> {data.ProductName} </h3>
                                        <hr/>
                                        <p className="info-p mt-2">
                                            <span className="info-span-offer"> {data.OfferPercentage}
                                                % off
                                            </span>
                                                ₹{data.Price} <span className="info-span-oldPrice">₹{data.OrigianlPrice}
                                            </span></p>
                                        <p className="info-del">Free Shipping available</p>
                                        <div className="atc-btn mt-3 mb-3">
                                            <button className="btn btn-warning">ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Home;