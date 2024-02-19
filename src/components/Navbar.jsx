import eshop from "../../src/assets/e-shop.png"

const Navbar = () => {


    return(
        <>
            <div id="headerOne">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8 headerOneCol">
                <i class="fa fa-map-marker" aria-hidden="true"> <span>Lagos Nigeria</span></i>
                <i class="fa fa-envelope" aria-hidden="true"> <span>infor@e-shop.com</span></i>
                <i class="fa fa-phone" aria-hidden="true"> <span>+234803984949</span></i>
            </div>
            <div class="col-12 col-md-4 headerOneCol2 text-center d-block d-md-none mt-3">{/* Mobile socials*/}
                <i class="fa fa-facebook headerSocial" aria-hidden="true"></i>
                <i class="fa fa-twitter headerSocial" aria-hidden="true"></i>
                <i class="fa fa-youtube headerSocial" aria-hidden="true"></i>
                <i class="fa fa-google headerSocial" aria-hidden="true"></i>
                <i class="fa fa-linkedin headerSocial" aria-hidden="true"></i>
            </div>
            <div class="col-12 col-md-4 headerOneCol2 text-right d-none d-md-block">{/* Desktop socials*/}
                <i class="fa fa-facebook headerSocial" aria-hidden="true"></i>
                <i class="fa fa-twitter headerSocial" aria-hidden="true"></i>
                <i class="fa fa-youtube headerSocial" aria-hidden="true"></i>
                <i class="fa fa-google headerSocial" aria-hidden="true"></i>
                <i class="fa fa-linkedin headerSocial" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</div>
    <div id="headerTwo">
        <div class="container p-0">
            <div class="row m-0">
                <div class="col-12 col-md-4 mt-5 mb-1 d-block d-md-none">{/* Mobile logo*/}
                    <a class="navbar-brand" href="#">  <img src={eshop} alt="e-shop logo" class="img-fluid d-block d-md-none"/></a>
                    <a class="navbar-brand" href="#">  <img src={eshop} alt="e-shop logo" class="img-fluid d-none d-md-block"/></a>
                </div>
                <div class="col-12 col-md-4 mt-5 mb-5 d-none d-md-block pl-0">{/*Desktop logo */}
                    <a class="navbar-brand" href="#">  <img src={eshop} alt="e-shop logo" class="img-fluid d-block d-md-none"/></a>
                    <a class="navbar-brand" href="#">  <img src={eshop} alt="e-shop logo" class="img-fluid d-none d-md-block"/></a>
                </div>
                <div class="col-12 col-md-5 mt-1 mb-1 headerTwoCol2 d-block d-md-none">{/*Form mobile */}
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search product here" aria-label="Search"/>
                        <button class="btn my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <div class="col-12 col-md-5 mt-5 mb-5 headerTwoCol2 d-none d-md-block">{/* Form Desktop*/}
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search product here" aria-label="Search"/>
                        <button class="btn my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <div class="col-12 col-md-3 mt-1 mb-4 headerTwoCol3 d-block d-md-none" id="headerTwoCol3">
                    <p>SHOPPING ITEM<br/><span>$0.00 items</span></p>
                </div>
                <div class="col-12 col-md-3 mt-5 mb-5 headerTwoCol3 d-none d-md-block">
                    <p>SHOPPING ITEM<br/><span>$0.00 items</span></p>
                </div>
            </div>
        </div>
    </div>
    <div id="headerThree">
        <div class="container">
            <div class="row">
            {/* Navbar column*/}
            <div class="col-10 p-0">
            <nav class="navbar navbar-expand-lg navbar-light bground" id="nav">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item" id="home">
                        <a class="nav-link" href="index.html"><i class="fa fa-home" aria-hidden="true"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Shop</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Tutorials</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
        {/* White list red column*/}
            <div class="col-2 wishlist"></div>
        </div>
        </div>
    </div> 
        </>
    )
}

export default Navbar