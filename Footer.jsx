function Footer() {
    return (
        <>
            <style>
                {`
                .footer {
                    margin-top: 50px;
                    font-family: Arial, sans-serif;
                }

                .signup {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    background-color: #eee;
                    padding: 8px;
                }

                .signup h3 {
                    margin: 0;
                }

                .signup input {
                    width: 180px;
                    padding: 5px;
                }

                .signup button {
                    padding: 6px 12px;
                    border: none;
                    background-color: #ccc;
                    cursor: pointer;
                }

                .footer-main {
                    background-color: #07999d;
                    min-height: 200px;
                    padding: 15px 40px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    color: black;
                }

                .footer-section h3 {
                    margin: 0 0 10px 0;
                    font-size: 20px;
                }

                .footer-section p {
                    margin: 6px 0;
                }

                .footer-section a {
                    color: black;
                    text-decoration: none;
                }

                .footer-section a:hover {
                    text-decoration: underline;
                }

                .social-icons {
                    display: flex;
                    gap: 5px;
                }

                .social-icons span {
                    background-color: #777;
                    color: white;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                }

                .footer-bottom {
                    background-color: #07999d;
                    text-align: center;
                    padding-bottom: 25px;
                    color: black;
                }

                .footer-bottom h3 {
                    margin: 0 0 15px 0;
                }

                .footer-links {
                    display: flex;
                    justify-content: center;
                    gap: 50px;
                }

                .footer-links a {
                    color: black;
                    text-decoration: none;
                }

                @media (max-width: 700px) {
                    .signup {
                        flex-direction: column;
                    }

                    .footer-main {
                        grid-template-columns: 1fr;
                        gap: 25px;
                    }

                    .footer-links {
                        flex-direction: column;
                        gap: 10px;
                    }
                }
                `}
            </style>

            <footer className="footer">

                <div className="signup">
                    <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>

                <div className="footer-main">

                    <div className="footer-section">
                        <h3>Explore</h3>
                        <p><a href="#">Home</a></p>
                        <p><a href="#">Questions</a></p>
                        <p><a href="#articles">Articles</a></p>
                        <p><a href="#tutorials">Tutorials</a></p>
                    </div>

                    <div className="footer-section">
                        <h3>Support</h3>
                        <p><a href="#">FAQs</a></p>
                        <p><a href="#">Help</a></p>
                        <p><a href="#Contact">Contact Us</a></p>
                    </div>

                    <div className="footer-section">
                        <h3>Stay connected</h3>

                        <div className="social-icons">
                            <span>f</span>
                            <span>♥</span>
                            <span>◎</span>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <h3>DEVDeakin 2022</h3>

                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms</a>
                        <a href="#">Code of Conduct</a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer