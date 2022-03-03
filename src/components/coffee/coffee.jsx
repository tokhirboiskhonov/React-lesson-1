import './coffee.scss'

function Coffee () {
    return(
        <>
        <section className="coffee">
            <div className="container container--small">
                <div className="coffee__inner">
                    <h2 className="coffee__heading">Why choose us?</h2>
                    <p className="coffee__text">
                        A large part of our role is choosing which
                        particular coffees will be featured in our range.
                        This means working closely with the best coffee growers to give 
                        you a more impactful experience on every level.
                    </p>
                    
                    <ul className="coffee__list">
                        <li className="coffee__item">
                            <div className="coffee__item__info">
                                
                                <h3 className="coffee__item__title">Best quality</h3>
                                
                                <p className="coffee__item__text">
                                    Discover an endless variety of the
                                    world’s best artisan coffee from each
                                    of our roasters.
                                </p>
                            </div>
                        </li>
                        
                        <li className="coffee__item">
                            <div className="coffee__item__info">
                                
                                <h3 className="coffee__item__title">Exclusive benefits</h3>
                                
                                <p className="coffee__item__text">
                                    Special offers and swag when you subscribe,
                                    including 30% off your first shipment.
                                </p>
                            </div>
                        </li>
                        
                        <li className="coffee__item">
                            <div className="coffee__item__info">
                                
                                <h3 className="coffee__item__title">Free shipping</h3>
                                
                                <p className="coffee__item__text">
                                    We cover the cost and coffee is delivered fast.
                                    Peak freshness: guaranteed.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>       
        </section>
        </>
    )
}

export default Coffee;