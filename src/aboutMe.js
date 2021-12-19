import image from "./mne.jpg"

function AboutMe() {
    return (
        <div className="about-wrapper" id="about-me">
            <div className="card1">
                <img src={image} alt="my pictures" />
            </div>

            <div className="card2">
                <h2>About Me</h2>
                <div className="details">
                    <p>
                        Software engineer, with extensive knowledge and years of experience
                        working in web technologies, I am always willing to go the extra mile when required and always
                        open to learning new technologies to improve on my software development skills as well as
                        other relevant technologies delivering quality work.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
