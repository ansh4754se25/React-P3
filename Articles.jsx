import article1 from './assets/articles/article1.jpg'
import article2 from './assets/articles/article2.jpg'
import article3 from './assets/articles/article3.jpg'

function Articles() {
    return (
        <>
            <style>
                {`
                    .article-card {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        column-gap: 100px;
                        margin: 100px 5% 0 5%;
                    }

                    .article img {
                        width: 100%;
                        height: 250px;
                        border-radius: 20px;
                    }

                    h2 {
                        margin-top: 50px;
                        color: hsl(190, 97%, 55%);
                        text-align: center;
                        font-weight: bold;
                    }

                    .text {
                        display: flex;
                        flex-direction: column;
                    }

                    .text .upper-text {
                        display: flex;
                        flex-direction: column;
                    }

                    .text .lower-text {
                        display: flex;
                        flex-direction: row;
                    }

                    .text .lower-text .rating {
                        width: 20%;
                    }

                    .text .lower-text .author {
                        width: 80%;
                        text-align: right;
                    }

                    .article {
                        border: 2px solid black;
                        padding: 10px;
                    }

                    .see-all-articles {
                        display: block;
                        margin: 25px auto;
                        padding: 8px 20px;
                        border: none;
                        border-radius: 20px;
                        background-color: #ccc;
                        color: black;
                        cursor: pointer;
                    }

                    .see-all-articles:hover {
                        background-color: #aaa;
                    }

                    @media (max-width: 700px) {
                        .article-card {
                            grid-template-columns: 1fr;
                            row-gap: 30px;
                            margin: 50px 5% 0 5%;
                        }
                    }
                `}
            </style>

            <h2>Featured Articles</h2>

            <div className="article-card">

                <div className="article">
                    <div>
                        <img src={article1} />
                    </div>

                    <div className="text">
                        <div className="upper-text">
                            <h4><b>Name: </b>React Basics</h4>
                            <p>
                                Description: Learn React components and build
                                interactive, reusable, and modern user interfaces easily.
                            </p>
                        </div>

                        <div className="lower-text">
                            <div className="rating">
                                <p>⭐ 4.5</p>
                            </div>

                            <div className="author">
                                <p>ANSH MALHOTRA</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="article">
                    <div>
                        <img src={article2} />
                    </div>

                    <div className="text">
                        <div className="upper-text">
                            <h4><b>Name: </b>JavaScript Basics</h4>
                            <p>
                                Description: Understand JavaScript fundamentals and
                                create dynamic, interactive, and functional web applications.
                            </p>
                        </div>

                        <div className="lower-text">
                            <div className="rating">
                                <p>⭐ 4.8</p>
                            </div>

                            <div className="author">
                                <p>ANSH MALHOTRA</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="article">
                    <div>
                        <img src={article3} />
                    </div>

                    <div className="text">
                        <div className="upper-text">
                            <h4><b>Name: </b>Web Development</h4>
                            <p>
                                Description: Explore HTML, CSS, and JavaScript to
                                create responsive and user-friendly modern websites.
                            </p>
                        </div>

                        <div className="lower-text">
                            <div className="rating">
                                <p>⭐ 5.0</p>
                            </div>

                            <div className="author">
                                <p>ANSH MALHOTRA</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* SEE ALL ARTICLES BUTTON */}
            <button className="see-all-articles">
                See all articles
            </button>

        </>
    )
}

export default Articles