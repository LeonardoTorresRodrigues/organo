import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='footer'>
            <section className='icons'>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/images/fb.png' alt='facebook icon' />
                        </a>
                    </li>
                    <li>
                        <a href='x.com' target='_blank'>
                            <img src='/images/tw.png' alt='X icon' />
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <img src='/images/ig.png' alt='instagram icon' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/images/logo.png' alt='organo logo' />
            </section>
            <section>
                <p>
                    Desenvolvido por Leonardo Rodrigues
                </p>
            </section>
        </footer>
    );
};

export default Rodape;