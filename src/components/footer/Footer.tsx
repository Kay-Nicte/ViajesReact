import React from 'react';

const Footer = () => {
    return (
        <footer className="footer py-2 mt-auto">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="text-center">
                    <p className="mb-0">© 2024 Viajes Ixa. Todos los derechos reservados.</p>
                </div>
                <div>
                    <a href="https://www.facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer" aria-label='Facebook'>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer" aria-label='Twitter'>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" className="text-light me-3" target="_blank" rel="noopener noreferrer" aria-label='Instagram'>
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;