import PI from './assets/Images/PI.jpg'
import profile1 from './assets/Images/profile1.png'
import profile2 from './assets/Images/profile2.png'

function Profile() {
    return (
        <>
            <style>
                {`
                .profile {
                    text-align: center;
                    padding: 50px 20px;
                }

                .profile h1 {
                    font-size: 32px;
                    margin-bottom: 25px;
                    color: #111;
                }

                .profile-pic {
                    display: block;
                    margin: auto;
                    width: 200px;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 50%;
                    border: 4px solid #333;
                }

                .profile p {
                    max-width: 700px;
                    margin: 20px auto;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #111;
                }

                .profile h3 {
                    color: #111;
                }

                .profile1, .profile2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .profile1 img, .profile2 img {
                    width: 300px;
                }

                .profile1 a, .profile2 a {
                    text-decoration: none;
                    background-color: hsl(66, 80%, 41%);
                    padding: 10px;
                    color: white;
                    border-radius: 4px;
                    margin-left: 18px;
                }

                .profile1 a:hover, .profile2 a:hover {
                    background-color: hsl(66, 80%, 35%);
                }

                .profile-text {
                    color: #111;
                    text-align: center;
                }
                `}
            </style>

            {/* ABOUT */}
            <div className="profile" id="about">

                <h1>About Me</h1>

                <img src={PI} className="profile-pic" />

                <p>
                    Hi, I'm Ansh Malhotra. I am a Software Engineering student
                    interested in web development and programming.
                </p>

                <p>
                    I enjoy creating websites and building projects using HTML,
                    CSS and JavaScript.
                </p>

                {/* WORK */}
                <p>_________________________</p>

                <h3>This is what I've done so far</h3>

                <div className="profile1" id="profile1">
                    <img src={profile1} />
                    <a
                        href="https://ansh4754se25.github.io/Calculator-simple/"
                        target="_blank"
                    >
                        Github Link
                    </a>
                </div>

                <div className="profile2">
                    <img src={profile2} />
                    <a
                        href="https://ansh4754se25.github.io/grade-calculator/"
                        target="_blank"
                    >
                        Github Link
                    </a>
                </div>

                <p className="profile-text">__________________</p>

                <h3 className="profile-text">Photos</h3>

            </div>
        </>
    )
}

export default Profile