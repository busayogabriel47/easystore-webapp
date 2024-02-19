



const Home = () => {

    return(
        <>
            <main>
    <div class="container">
        <div class="row">
          {/* Categories column start*/}
            <div class="col-12 col-md-4 mt-4">
                <div class="row">
                    <div class="col-12" id="categories">
                        <i class="fa fa-bars" aria-hidden="true"></i> <span>Categories</span>
                    </div>
                    <div class="col-12" id="collCol">
                        <div class="row">
                            <div class="col-12 collection"><h6><a href="#">Adult Collection</a></h6></div>
                            <div class="col-12 collection"><h6><a href="#">Bag Collection</a></h6></div>
                            <div class="col-12 collection"><h6><a href="#">Gadget Collection</a></h6></div>
                            <div class="col-12 collection"><h6><a href="#">Kids Collection</a></h6></div>
                            <div class="col-12 collection"><h6><a href="#">Men Collection</a></h6></div>
                            <div class="col-12 collection"><h6><a href="#">Shoes Collection</a></h6></div>
                            <div class="col-12 collection"><h6><a href="#">Slider Product</a></h6></div>
                            <div class="col-12 collection"><h6><a href="#">Summer Collection</a></h6></div>
                            <div class="col-12 collection"><h6><a href="#">Watch Collection</a></h6></div>
                            <div class="col-12 collection"><h6><a href="#">Winter Collection</a></h6></div>
                            <div class="col-12 collection"><h6><a href="#">Women Collection</a></h6></div>
                        </div>
                    </div>
                </div>
            </div>{/* Categories column end*/}
            <div class="col-12 col-md-8 mt-4 pr-0">{/* Slider column start*/}
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                          <div class="row">
                              <div class="col-12 bestCollection">
                                  <h1 class="pt-4 pb-4">BEST AMAZING <br/> MEN COLLECTION</h1>
                                  <p class="pb-4">Lorem Ipsum dollus Lorem Ipsum dollus Lorem Ipsum dollus Lorem Ipsum dollus</p>
                                  <button class="btn btn-md btn-danger mb-4">Add to cart</button>
                              </div>
                          </div>
                      </div>
                      <div class="carousel-item">
                        <div class="row bestCollection2">
                            <div class="col-12">
                                <h1 class="pt-4 pb-4">BEST AMAZING <br/> MEN COLLECTION</h1>
                                  <p class="pb-4">Lorem Ipsum dollus Lorem Ipsum dollus Lorem Ipsum dollus Lorem Ipsum dollus</p>
                                  <button class="btn btn-md btn-danger mb-4">Add to cart</button>
                            </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="row bestCollection3">
                            <div class="col-12">
                                <h1 class="pt-4 pb-4">BEST QUALITY <br/> HEADSET FOR BETTER SOUND</h1>
                                  <p class="pb-4">Lorem Ipsum dollus Lorem Ipsum dollus Lorem Ipsum dollus Lorem Ipsum dollus</p>
                                  <button class="btn btn-md btn-danger mb-4">Add to cart</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
            </div>{/* Slider column end*/}
        </div>
    </div>

    {/* Company feature*/}
    <div class="feature">
        <div class="container">
            <div class="row">
                        <div class="col-6 col-md-3 featureCols mt-5 mb-5">
                                <div class="row">
                                    <div class="col-3"><i class="fa fa-truck" aria-hidden="true"></i></div>
                                    <div class="col-9">
                                        <h4>Free Shipping</h4>
                                        <p>Free shipping on direct order</p>
                                    </div>
                                </div> 
                        </div>
                        <div class="col-6 col-md-3 featureCols mt-5 mb-5">
                            <div class="row">
                                <div class="col-3"><i class="fa fa-comments" aria-hidden="true"></i></div>
                                <div class="col-9">
                                    <h4>Customer Support</h4>
                                    <p>Top notch support for Services</p>
                                </div>
                            </div> 
                    </div>
                    <div class="col-6 col-md-3 featureCols mt-5 mb-5">
                        <div class="row">
                            <div class="col-3"><i class="fa fa-star" aria-hidden="true"></i></div>
                            <div class="col-9">
                                <h4>Heavy Discount</h4>
                                <p>Up to 30% Flat Discount</p>
                            </div>
                        </div> 
                </div>
                <div class="col-6 col-md-3 featureCols mt-5 mb-5">
                    <div class="row">
                        <div class="col-3"><i class="fa fa-credit-card-alt" aria-hidden="true"></i></div>
                        <div class="col-9">
                            <h4>Free Shipping</h4>
                            <p>Support all cards & PayPal</p>
                        </div>
                    </div> 
            </div>
            </div>
        </div>
    </div>

{/* Weekly featured*/}
    <div class="weeklyFeatured">
        <div class="container">
            <div class="row">
                <div class="col-12 weeklyFeaturedCol1">
                    <h5>Weekly Featured</h5>
                    <p>Amazing Weekly Featured Item Collection</p><hr/>
                </div>
            </div>
{/* Weekly featured goods*/}
            <div class="row weekly owl-carousel">
                <div class="col-12 col-md-12 wkfGoods mt-4 mb-4 text-center">
                    <div class="wrk_good_border p-2">
                        <img src="images/gadget-1.jpg" class="img-fluid" alt="iphone" height="200px"/>
                        <h6>Iphone With Wireless Device</h6>
                        <p>$1,800.00</p>
                        <hr/>
                        <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                    </div>
                </div>
                <div class="col-12 col-md-12 wkfGoods mt-4 mb-4 text-center">
                    <div class="wrk_good_border p-2">
                        <img src="images/shoes-1111.jpg" class="img-fluid" alt="iphone" height="200px"/>
                        <h6>Iphone With Wireless Device</h6>
                        <p>$1,800.00</p>
                        <hr/>
                        <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                    </div>
                </div>
                <div class="col-12 col-md-12 wkfGoods mt-4 mb-4 text-center">
                    <div class="wrk_good_border p-2">
                        <img src="images/shoes-2.jpg" class="img-fluid" alt="iphone" height="200px"/>
                        <h6>Iphone With Wireless Device</h6>
                        <p>$1,800.00</p>
                        <hr/>
                        <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                    </div>
                </div>
                <div class="col-12 col-md-12 wkfGoods mt-4 mb-4 text-center">
                    <div class="wrk_good_border p-2">
                        <img src="images/watch-2.jpg" class="img-fluid" alt="iphone" height="200px"/>
                        <h6>Iphone With Wireless Device</h6>
                        <p>$1,800.00</p>
                        <hr/>
                        <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                    </div>
                </div>
            </div>
       {/* Collections*/}
        <div class="row">
            <div class="col-12 col-md-4 collections mt-4 mb-4 text-center">
                <div class="collectionCol mb-5">
                    <h3>KIDS COLLECTION</h3>
                    <a href="#"><p>View Collection  <span><i class="fa fa-angle-right" aria-hidden="true"></i></span></p></a> 
                </div>
            </div>
            <div class="col-12 col-md-4 collections3 mt-4 mb-4 text-center">
                <div class="collectionCol">
                    <h3>SUMMER COLLECTION</h3>
                    <a href="#"><p>View Collection  <span><i class="fa fa-angle-right" aria-hidden="true"></i></span></p></a> 
                </div>
            </div>
            <div class="col-12 col-md-4 collections2 mt-4 mb-4 text-center">
                <div class="collectionCol">
                    <h3>WINTER COLLECTION</h3>
                    <a href="#"><p>View Collection  <span><i class="fa fa-angle-right" aria-hidden="true"></i></span></p></a> 
                </div>
            </div>
        </div>
        </div>
    </div>

{/* Woman collections*/}
<div class="weeklyFeatured">
    <div class="container">
        <div class="row">
            <div class="col-12 weeklyFeaturedCol1">
                <h5>Woman Collection</h5>
                <p>Stylist Woman Item Collection</p><hr/>
            </div>
        </div>
{/* Weekly featured good*/}
        <div class="row">
            <div class="col-12 col-md-3 wkfGoods mt-4 mb-4 text-center">
                <div class="wrk_good_border p-2">
                    <img src="images/Woman.jpg" class="img-fluid" alt="iphone" height="200px"/>
                    <h6>Iphone With Wireless Device</h6>
                    <p>$1,800.00</p>
                    <hr/>
                    <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                </div>
            </div>
            <div class="col-12 col-md-3 wkfGoods mt-4 mb-4 text-center">
                <div class="wrk_good_border p-2">
                    <img src="images/bag.jpg" class="img-fluid" alt="iphone" height="200px"/>
                    <h6>Iphone With Wireless Device</h6>
                    <p>$1,800.00</p>
                    <hr/>
                    <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                </div>
            </div>
            <div class="col-12 col-md-3 wkfGoods mt-4 mb-4 text-center">
                <div class="wrk_good_border p-2">
                    <img src="images/hair.webp" class="img-fluid" alt="iphone" height="200px"/>
                    <h6>Iphone With Wireless Device</h6>
                    <p>$1,800.00</p>
                    <hr/>
                    <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                </div>
            </div>
            <div class="col-12 col-md-3 wkfGoods mt-4 mb-4 text-center">
                <div class="wrk_good_border p-2">
                    <img src="images/iphone.jpg" class="img-fluid" alt="iphone" height="200px"/>
                    <h6>Iphone With Wireless Device</h6>
                    <p>$1,800.00</p>
                    <hr/>
                    <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                </div>
            </div>
        </div>
    </div>
</div>


{/* 50% off collection*/}
<div class="off_coll mb-4">
    <div class="container">
        <div class="row">
            <div class="col-12 off_coll_col">
                <h1 class="mt-5 pt-5">50% OFF</h1>
                <h2 class="pt-3">SUMMER COLLECTION</h2>
                <button class="btn text-white mt-5 mb-5">Shop Now</button>   
            </div>
        </div>
    </div>
</div>
{/* Men collections*/}

<div class="weeklyFeatured">
    <div class="container">
        <div class="row">
            <div class="col-12 weeklyFeaturedCol1">
                <h5>Men Collection</h5>
                <p>Stylist Men Item Collection</p><hr/>
            </div>
        </div>

{/* Men collection good*/}
        <div class="row">
            <div class="col-12 col-md-3 wkfGoods mt-4 mb-4 text-center">
                <div class="wrk_good_border p-2">
                    <img src="images/men1.jpg" class="img-fluid" alt="iphone" height="200px"/>
                    <h6>Iphone With Wireless Device</h6>
                    <p>$1,800.00</p>
                    <hr/>
                    <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                </div>
            </div>
            <div class="col-12 col-md-3 wkfGoods mt-4 mb-4 text-center">
                <div class="wrk_good_border p-2">
                    <img src="images/men3.jpg" class="img-fluid" alt="iphone" height="200px"/>
                    <h6>Iphone With Wireless Device</h6>
                    <p>$1,800.00</p>
                    <hr/>
                    <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                </div>
            </div>
            <div class="col-12 col-md-3 wkfGoods mt-4 mb-4 text-center">
                <div class="wrk_good_border p-2">
                    <img src="images/men2.jpg" class="img-fluid" alt="iphone" height="200px"/>
                    <h6>Iphone With Wireless Device</h6>
                    <p>$1,800.00</p>
                    <hr/>
                    <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                </div>
            </div>
            <div class="col-12 col-md-3 wkfGoods mt-4 mb-4 text-center">
                <div class="wrk_good_border p-2">
                    <img src="images/men4.jpg" class="img-fluid" alt="iphone" height="200px"/>
                    <h6>Iphone With Wireless Device</h6>
                    <p>$1,800.00</p>
                    <hr/>
                    <button class="btn btn-sm btone"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Add To Cart</span></button><button class="btn btn-sm bttwo"><i class="fa fa-heart" aria-hidden="true"></i> <span>Add To Wishlist</span></button>
                </div>
            </div>
        </div>
    </div>
</div>

{/*User testimony slider*/}
<div class="off_coll mb-4 d-block d-md-none">{/* Mobile view*/}
    <div class="container">
            <div class="userVoice text-center pt-4">
                <h4>Users Voice</h4>
                <p>What Our Users Says About Us</p>
            </div>
        <div class="row owl-carousel testinmial_slider">
            <div class="col-12 mt-5 mb-5 rowBorder">{/* Slider one*/}
                <div class="row">
                    <div class="col-12 col-md-5 user_testimony p-0">
                        <img src="images/owl1.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-12 col-md-7 user_testimony p-3 sliderBorder">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum, </p>
                        <p>Christain Mathew</p>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-5 mb-5 rowBorder">{/* Slider two*/}
                <div class="row">
                    <div class="col-12 col-md-5 user_testimony p-0">
                        <img src="images/owl2.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-12 col-md-7 user_testimony p-3 sliderBorder">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum, </p>
                        <p>John Doe</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




<div class="off_coll mb-4 d-none d-md-block">{/* Desktop view*/}
    <div class="container">
            <div class="userVoice text-center pt-4">
                <h4>Users Voice</h4>
                <p>What Our Users Says About Us</p>
            </div>
        <div class="row owl-carousel testinmial_slider">
            <div class="col-12 mt-5 mb-5 rowBorder">{/* Slider one*/}
                <div class="row">
                    <div class="col-6 col-md-5 user_testimony p-0">
                        <img src="images/user1.jpg" class="img-fluid" alt=""/>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <div class="col-6 col-md-7 user_testimony p-4 sliderBorder">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum, tenetur quae dicta autem nemo non. Dolorem earum excepturi molestias sapiente ipsam</p>
                        <span>Christain Mathew</span>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-5 mb-5 rowBorder">{/* Slider two*/}
                <div class="row">
                    <div class="col-6 col-md-5 user_testimony p-0">
                        <img src="images/user3.jpg" class="img-fluid" alt=""/>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <div class="col-6 col-md-7 user_testimony p-4 sliderBorder">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum, tenetur quae dicta autem nemo non. Dolorem earum excepturi molestias sapiente ipsam</p>
                        <span>John Doe</span>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-5 mb-5 rowBorder">{/* Slider one */}
                <div class="row">
                    <div class="col-6 col-md-5 user_testimony p-0">
                        <img src="images/user1.jpg" class="img-fluid" alt=""/>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <div class="col-6 col-md-7 user_testimony p-4 sliderBorder">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum, tenetur quae dicta autem nemo non. Dolorem earum excepturi molestias sapiente ipsam</p>
                        <span>Christain Mathew</span>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-5 mb-5 rowBorder">{/* Slider one*/}
                <div class="row">
                    <div class="col-6 col-md-5 user_testimony p-0">
                        <img src="images/user1.jpg" class="img-fluid" alt=""/>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <div class="col-6 col-md-7 user_testimony p-4 sliderBorder">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum, tenetur quae dicta autem nemo non. Dolorem earum excepturi molestias sapiente ipsam</p>
                        <span>Christain Mathew</span>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-5 mb-5 rowBorder">{/*Slider one*/}
                <div class="row">
                    <div class="col-6 col-md-5 user_testimony p-0">
                        <img src="images/user1.jpg" class="img-fluid" alt=""/>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <div class="col-6 col-md-7 user_testimony p-4 sliderBorder">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum, tenetur quae dicta autem nemo non. Dolorem earum excepturi molestias sapiente ipsam</p>
                        <span>Christain Mathew</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/*Latest new*/}
<div class="latestnew">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="row">
                    <div class="col-12 p-0">
                        <img src="images/Kids.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-12">
                        <div class="row p-0">
                            <div class="col-2 text-center kid1 text-white p-0">
                                <div id="april">
                                    <h2>April</h2>
                                    <p>19</p>
                                </div>
                            </div>
                            <div class="col-10 kids2 p-4">
                                <h2>Winter Kids Collection Now Available</h2>
                                <i class="fa fa-user mt-3 mb-3" aria-hidden="true"></i> <span class="pr-3">DemoAdmin</span>
                                <i class="fa fa-comment-o mt-3 mb-3" aria-hidden="true"></i> <span>Comment 0</span>
                                <p>Nullam condimentum dictum sapien nec mattis. Praesent at pulvinar sed lorem eu aliquam. Vivamus volutpat ante neque, in pellentesque tortor laoreet ut. Ut a auctor magna. Nullam and vehicula eget metus ac fermentum. Nulla facilisi. Maecenas cur vel sapien consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="row mb-5">
                    <div class="col-4 news">
                        <img src="images/headset.png" class="img-fluid" alt=""/>
                        <p>APR <br/> 19</p>
                    </div>
                    <div class="col-8 kids2 bg-white">
                        <h2>Winter Kids Collection Now Available</h2>
                        <i class="fa fa-user mt-3 mb-3" aria-hidden="true"></i> <span class="pr-3">DemoAdmin</span>
                        <i class="fa fa-comment-o mt-3 mb-3" aria-hidden="true"></i> <span>Comment 0</span>
                        <p>Nullam condimentum dictum sapien nec mattis. Praesent at pulvinar sed lorem eu aliquam. Vivamus volutpat ante neque, in.</p>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-4 news">
                        <img src="images/headset.png" class="img-fluid" alt=""/>
                        <p>APR <br/> 19</p>
                    </div>
                    <div class="col-8 kids2 bg-white">
                        <h2>Winter Kids Collection Now Available</h2>
                        <i class="fa fa-user mt-3 mb-3" aria-hidden="true"></i> <span class="pr-3">DemoAdmin</span>
                        <i class="fa fa-comment-o mt-3 mb-3" aria-hidden="true"></i> <span>Comment 0</span>
                        <p>Nullam condimentum dictum sapien nec mattis. Praesent at pulvinar sed lorem eu aliquam. Vivamus volutpat ante neque, in.</p>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-4 news">
                        <img src="images/headset.png" class="img-fluid" alt=""/>
                        <p>APR <br/> 19</p>
                    </div>
                    <div class="col-8 kids2 bg-white">
                        <h2>Winter Kids Collection Now Available</h2>
                        <i class="fa fa-user mt-3 mb-3" aria-hidden="true"></i> <span class="pr-3">DemoAdmin</span>
                        <i class="fa fa-comment-o mt-3 mb-3" aria-hidden="true"></i> <span>Comment 0</span>
                        <p>Nullam condimentum dictum sapien nec mattis. Praesent at pulvinar sed lorem eu aliquam. Vivamus volutpat ante neque, in.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</main>
        </>
    )
}


export default Home;