import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5' >
            <div className='row text-center'>
                <img src='/media/images/homeHero.png' className='mb-3'></img>
                <h1 className='mt-5'>Invest in Everything!!</h1>
                <p>Online Platform to Invest in stocks, derivatives, mutual funds, and more.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width: "20%", margin:"0 auto"}}>SignUp Now</button>
            </div>

        </div>
     );
}

export default Hero;