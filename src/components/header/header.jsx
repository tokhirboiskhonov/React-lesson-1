import './header.scss';
import coffee_logo from '../../Asseste/image/coffee-logo.png'

function Header() {
    return(
        <>

<header className ="header">
        <div className ="container container--small">
            <a className ="header__link" href="./index.html">
                <img
                src={coffee_logo}
                alt="coffee-logo"
                width={236}
                height={26}
                />
            </a>
            
            <button className ="header__menu-button">
                <span>&#9776;</span>
                <span>&#x2715;</span>
            </button>
            
            <nav className ="nav">
                <ul className ="nav__list">
                    <li className ="nav__item">
                        <a className ="nav__link" href="./index.html">Home</a>
                    </li>
                    
                    <li className ="nav__item">
                        <a className ="nav__link" href="./about.html">About us</a>
                    </li>
                    
                    <li className ="nav__item">
                        <a className ="nav__link" href="./create-your-plan.html">Create your plan</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
        </>
    )
    
}

export default Header;