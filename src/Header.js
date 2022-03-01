function Header() {
    return (
        <nav className='pink lighten-3'>
            <div className='nav-wrapper'>

                <a href='/Cosmetics-Store/' className='brand-logo'>
                    <i className='material-icons'>spa</i>
                    Heavenly Beauty
                </a>

                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/espoira/Cosmetics-Store'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Cosmetics Store
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
