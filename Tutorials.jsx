import tutorial1 from './assets/tutorials/tutorial.jpg'
import tutorial2 from './assets/tutorials/tutorial2.jpg'
import tutorial3 from './assets/tutorials/tutorial3.jpg'

function Tutorials() {
    return (
        <>
            <style>
                {`
                    .tutorial-card {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        column-gap: 100px;
                        margin: 50px 5% 0 5%;
                    }

                    .tutorial img {
                        width: 100%;
                        height: 250px;
                        border-radius: 20px;
                    }

                    .tutorial-title {
                        margin-top: 50px;
                        color: hsl(190, 97%, 55%);
                        text-align: center;
                        font-weight: bold;
                    }

                    .tutorial {
                        border: 2px solid black;
                        padding: 10px;
                    }

                    .tutorial-text {
                        display: flex;
                        flex-direction: column;
                    }

                    .tutorial-upper {
                        display: flex;
                        flex-direction: column;
                    }

                    .tutorial-lower {
                        display: flex;
                        flex-direction: row;
                    }

                    .tutorial-lower .rating {
                        width: 20%;
                    }

                    .tutorial-lower .author {
                        width: 80%;
                        text-align: right;
                    }

                    .see-all-tutorials {
                        display: block;
                        margin: 25px auto;
                        padding: 8px 20px;
                        border: none;
                        border-radius: 20px;
                        background-color: #ccc;
                        color: black;
                        cursor: pointer;
                    }

                    .see-all-tutorials:hover {
                        background-color: #aaa;
                    }

                    @media (max-width: 700px) {
                        .tutorial-card {
                            grid-template-columns: 1fr;
                            row-gap: 30px;
                            margin: 50px 5% 0 5%;
                        }
                    }
                `}
            </style>

            <h2 className="tutorial-title">Featured Tutorials</h2>

            <div className="tutorial-card">

                <div className="tutorial">
                    <div>
                        <img src={tutorial1} />
                    </div>

                    <div className="tutorial-text">
                        <div className="tutorial-upper">
                            <h4>
                                <b>Name: </b>JavaScript Tutorial
                            </h4>

                            <p>
                                Description: Learn JavaScript basics and create
                                interactive web pages.
                            </p>
                        </div>

                        <div className="tutorial-lower">
                            <div className="rating">
                                <p>⭐ 5</p>
                            </div>

                            <div className="author">
                                <p>ANSH MALHOTRA</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="tutorial">
                    <div>
                        <img src={tutorial2} />
                    </div>

                    <div className="tutorial-text">
                        <div className="tutorial-upper">
                            <h4>
                                <b>Name: </b>React Tutorial
                            </h4>

                            <p>
                                Description: Learn React components and build
                                reusable user interfaces.
                            </p>
                        </div>

                        <div className="tutorial-lower">
                            <div className="rating">
                                <p>⭐ 5</p>
                            </div>

                            <div className="author">
                                <p>ANSH MALHOTRA</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="tutorial">
                    <div>
                        <img src={tutorial3} />
                    </div>

                    <div className="tutorial-text">
                        <div className="tutorial-upper">
                            <h4>
                                <b>Name: </b>Express Tutorial
                            </h4>

                            <p>
                                Description: Learn Express and build simple
                                backend web applications.
                            </p>
                        </div>

                        <div className="tutorial-lower">
                            <div className="rating">
                                <p>⭐ 4.9</p>
                            </div>

                            <div className="author">
                                <p>ANSH MALHOTRA</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <button className="see-all-tutorials">
                See all tutorials
            </button>
        </>
    )
}

export default Tutorials