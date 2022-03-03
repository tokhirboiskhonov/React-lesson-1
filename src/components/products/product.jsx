import './product.scss';
import expresso from '../../Asseste/image/expresso.png'
import planalto from '../../Asseste/image/planalto.png'
import piccollo from '../../Asseste/image/piccollo.png'
import danche from '../../Asseste/image/danche.png'



function Product() {
    return(
        <>
        
        <section className ="products">
            <div className ="container container--small">
                <h2 className ="products__heading">our collection </h2>
                <ul className ="products__list">
                    <li className ="products__item">
                        <a className ="products__link" href="#Link">
                            <img
                            className ="products__image"
                            src={expresso}
                            width={255}
                            height={193}
                            />
                            
                            <div className ="products__info">
                                <h3 className ="products__name">
                                    Gran Espresso
                                </h3>
                                
                                <p className ="products__text">
                                    Light and flavorful blend with cocoa and
                                    black pepper for an intense experience.
                                </p>
                            </div>
                        </a>
                    </li>
                    
                    <li className ="products__item">
                        <a className ="products__link" href="#Link">
                            <img 
                            className ="products__image"
                            src={planalto}
                            width={255}
                            height={193}
                            />
                            <div className ="products__info">
                                <h3 className ="products__name">Planalto</h3>
                                
                                <p className ="products__text">
                                    Brazilian dark roast with rich and velvety body,
                                    and hints of fruits and nuts
                                </p>
                            </div>
                        </a>
                    </li>
                    
                    <li className ="products__item">
                        <a className ="products__link" href="#Link">
                            <img 
                            className ="products__image"
                            src={piccollo}
                            width={255}
                            height={193}
                            />
                            
                            <div className ="products__info">
                                <h3 className ="products__name">Piccollo</h3>
                                
                                <p className ="products__text">
                                    Mild and smooth blend featuring notes of toasted almond and dried cherry
                                </p>
                            </div>
                            
                        </a>
                    </li>
                    
                    <li className ="products__item">
                        <a className ="products__link" href="#Link">
                            <img 
                            className ="products__image"
                            src={danche}
                            width={255}
                            height={193}
                            />
                            
                            <div className ="products__info">
                                <h3 className ="products__name">Danche</h3>
                                
                                <p className ="products__text">
                                    Ethiopian hand-harvested blend densely packed
                                    with vibrant fruit notes
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        
        </>
    )

}

export default Product;