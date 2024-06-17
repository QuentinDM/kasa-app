import Logo from '../assets/LOGO-white.png' ;


function Footer() {
    //RENDER 
    return (
        <div className='footer'>
            <img src={Logo} alt="Logo de la societe Kasa" />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    ) 
}

export default Footer ;