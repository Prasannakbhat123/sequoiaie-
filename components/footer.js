import Image from 'next/image';
import Link from 'next/link';
import { FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__company'>
                    <Link legacyBehavior href='/'>
                        <a className='footer__logo-container'>
                            <Image
                                className='footer-logo'
                                src='/img/whiteLogo.jpg'
                                alt='Blue Logo'
                                width={80}
                                height={80}
                                quality={100}
                                style={{ borderRadius: '50%', objectFit: 'cover' }}
                            />
                        </a>
                    </Link>
                    <p className='footer__company-desc'>
                        Providing quality solutions in tile services, interior design, and agricultural exports.
                    </p>
                </div>

                <div className='footer__links-section'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link legacyBehavior href='/'>
                                <a className='footer__link'>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href='/services'>
                                <a className='footer__link'>Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href='/#who__are__we'>
                                <a className='footer__link'>About Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href='/contactus'>
                                <a className='footer__link'>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='footer__contact'>
                    <h3>Contact Us</h3>
                    <div className='footer__contact-item'>
                        <HiOutlineLocationMarker className='footer__contact-icon' />
                        <a
                            href='https://goo.gl/maps/3R43ACgtd6WxRSE37'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='footer__contact-text'>
                            Eshwar Nagar, KA
                        </a>
                    </div>
                    <div className='footer__contact-item'>
                        <HiOutlinePhone className='footer__contact-icon' />
                        <a href='tel:12345678910' className='footer__contact-text'>
                            +91 2711625362
                        </a>
                    </div>
                    <div className='footer__contact-item'>
                        <HiOutlineMail className='footer__contact-icon' />
                        <a
                            href='mailto:info@sequoiaie.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='footer__contact-text'>
                            info@sequoiaie.com
                        </a>
                    </div>
                </div>
            </div>

            <div className='footer__bottom'>
                <div className='footer__copyright'>
                    <p>&copy; {new Date().getFullYear()} Sequoiaie. All Rights Reserved</p>
                </div>
                <div className='footer__social'>
                    <a href="#" className='footer__social-icon'>
                        <FiTwitter />
                    </a>
                    <a href="#" className='footer__social-icon'>
                        <AiOutlineInstagram />
                    </a>
                    <a href="#" className='footer__social-icon'>
                        <FiFacebook />
                    </a>
                    <a href="#" className='footer__social-icon'>
                        <FiYoutube />
                    </a>
                </div>
            </div>

            <style jsx>{`
                .footer {
                    background: linear-gradient(to right, #1a1a1a,rgb(14, 14, 14));
                    color: #fff;
                    padding: 3rem 1.5rem 1.5rem;
                    font-family: 'Arial', sans-serif;
                }

                .footer__content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3.5rem; /* Increased gap between columns */
                    max-width: 1200px;
                    margin: 0 auto;
                    padding-bottom: 2rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .footer__company {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .footer__links-section {
                    padding-left: 2rem;
                }

                .footer__logo-container {
                    margin-bottom: 1rem;
                    display: block;
                }

                .footer__company-desc {
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: #cccccc;
                }

                .footer__links-section h3,
                .footer__contact h3 {
                    color: #ffffff;
                    font-size: 1.2rem;
                    margin-bottom: 1.2rem;
                    position: relative;
                    padding-bottom: 0.5rem;
                }

                .footer__links-section h3:after,
                .footer__contact h3:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 50px;
                    height: 2px;
                    background-color: #48CAE4; /* Changed from orange to blue */
                }

                .footer__links-section ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer__links-section li {
                    margin-bottom: 0.8rem;
                }

                .footer__link {
                    color: #cccccc;
                    text-decoration: none;
                    transition: color 0.3s ease, transform 0.3s ease;
                    display: inline-block;
                    position: relative;
                }

                .footer__link:hover {
                    color: #ffffff;
                    transform: translateX(5px);
                }

                .footer__contact-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .footer__contact-icon {
                    margin-right: 10px;
                    color: #48CAE4; /* Changed from orange to blue */
                    font-size: 1.2rem;
                }

                .footer__contact-text {
                    color: #cccccc;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .footer__contact-text:hover {
                    color: #ffffff;
                }

                .footer__bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 1.5rem auto 0;
                    padding-top: 1.5rem;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .footer__copyright p {
                    margin: 0;
                    font-size: 0.9rem;
                    color: #999999;
                }

                .footer__social {
                    display: flex;
                    gap: 1rem;
                }

                .footer__social-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.1);
                    color: #ffffff;
                    transition: all 0.3s ease;
                    font-size: 1rem;
                }

                .footer__social-icon:hover {
                    background-color: #48CAE4; /* Changed from orange to blue */
                    transform: translateY(-3px);
                }

                @media (max-width: 768px) {
                    .footer__content {
                        grid-template-columns: 1fr;
                        gap: 2.5rem; /* Maintain increased spacing on mobile */
                    }

                    .footer__bottom {
                        flex-direction: column;
                        text-align: center;
                    }

                    .footer__social {
                        margin-top: 1rem;
                        justify-content: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;