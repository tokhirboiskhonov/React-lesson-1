import './steps.scss';

function Steps() {
    return(
        <>
        <section className="steps">
        <div className="container container--small">
        
        <h2 className="steps__heading">How it works</h2>
        
        <ul className="steps__list">
        <li className="steps__item">
        <div className="steps__div">
        <span className="steps__div__number">01</span>
        <h3 className="steps__div__title">
        Pick your coffee
        </h3>
        </div>
        <p className="steps__text">
        Select from our evolving range of artisan coffees.
        Our beans are ethically sourced and we pay fair prices for them.
        There are new coffees in all profiles every month for you to try out.
        </p>
        </li>
        
        <li className="steps__item">
        <div className="steps__div">
        <span className="steps__div__number">02</span>
        <h3 className="steps__div__title">
        Choose the frequency
        </h3>
        </div>
        <p className="steps__text">
        Customize your order frequency, quantity,
        even your roast style and grind type.
        Pause,skip or cancel your subscription
        with no commitment through our online portal.
        </p>
        </li>
        
        <li className="steps__item">
        <div className="steps__div">
        <span className="steps__div__number">03</span>
        <h3 className="steps__div__title">
        Receive and enjoy!
        </h3>
        </div>
        <p className="steps__text">
        We ship your package within 48 hours, freshly roasted.
        Sit back and enjoy award-winning world-className
        coffees curated to provide a distinct tasting experience.
        </p>
        </li>
        </ul>
        <a className="button steps__link" href="#Link">Create your plan</a>
        </div>
        </section> 
        
        </>
        )
    }
    
    export default Steps;