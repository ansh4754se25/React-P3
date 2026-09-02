function NavBar() {
    return (
        <>
            <style>
                {`
                .nav-bar-list {
                    list-style: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 40px;
                    margin: 0;
                    padding: 15px;
                }

                .nav-bar {
                    background-color: white;
                    position: sticky;
                    top: 0;
                    z-index: 10;
                }

                .nav-bar a {
                    color: black;
                    text-align: center;
                    text-decoration: none;
                    font-size: 16px;
                }

                .nav-bar a:hover {
                    color: #555;
                    cursor: pointer;
                }
                `}
            </style>

            <nav className="nav-bar">
                <ul className="nav-bar-list">
                    <a href="#banner-container">About</a>
                    <a href="#profile1">Work</a>
                    <a href="#Contact">Contact</a>
                </ul>
            </nav>
        </>
    )
}

export default NavBar