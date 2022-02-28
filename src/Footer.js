function Footer() {
    return (
        <footer className='page-footer pink lighten-4'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/espoira'
                        rel='noreferrer'
                        target='_blank'
                    >
                        More sites here
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };