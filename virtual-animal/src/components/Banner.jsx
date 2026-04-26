import '../css/Banner.css'
import banner from '../assets/banner1.png'

function Banner() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide carrosel" data-bs-ride="carousel">
                <div className="carousel-indicators dark">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner banner-img">
                    <div className="carousel-item active ">
                        <img src={banner} className="d-block w-100 banner" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner} className="d-block w-100 banner" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner} className="d-block w-100 banner" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
            </div>
        </>
    );
}

export default Banner;