import './hero.scss';

function Hero(){
    return(
        <>
        <section class="hero">
            <div class="container container--small">
                <div class="hero__inner">
                    <h1 class="hero__heading">Great coffee made simple.</h1>
                    <p class="hero__text">
                        Start your mornings with the world’s best coffees.
                        Try our expertly curated artisan coffees from our
                        best roasters delivered directly to your door, at your schedule.
                    </p>
                    <a class="button" href="./create-your-plan.html" title="Create your plan">
                        Create your plan
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;