import "./Homepage.css";
import Navbar from "../Navbar/Navbar";
import image1 from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/Image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";




const Home = () => {
    const navigate = useNavigate()
    const handleEvent=()=>{
    navigate('/login')
  }
    return (
        <>
            <Navbar />
            <div className="homepage">
                <section className="hero">
                    <div className="hero-text">
                        <h1>
                            A Message for Your <br /> Future Self
                        </h1>
                        <p>
                            Create digital time capsules to preserve memories and open
                            them when the time is right.
                        </p>
                        <button className="primary-btn">Create Your Capsule</button>

                    </div>
                    <div className="hero-images">
                        <img src={image3} className="polaroid img1" />
                        <img src={image2} className="polaroid img2" />
                        <img src={image1} className="polaroid img3" />
                    </div>
                </section>
                <section className="about">
                    <h2>What is Time Capsule</h2>
                    <p>
                        A time capsule is more than just a collection of memories—it's a conversation with your future self. It's the stories you want to remember, the moments you don't want to forget, and the feelings you want to preserve.
                    </p>
                    <p>
                        In a world that moves too fast, time capsules help you pause, reflect, and hold onto what matters most. Write a letter to who you'll become. Capture a moment before it slips away. Lock it with intention, and open it when the time is right.

                    </p>
                    <p>
                        Because some moments deserve to be saved, not just scrolled
                        past.
                    </p>
                </section>
                <section className="how">
                    <h2>How it Works</h2>

                    <div className="timeline">

                        {/* STEP 01 */}
                        <div className="timeline-row left">
                            <div className="marker">
                                <span className="step-no">01</span>
                                <span className="icon pencil" />
                            </div>

                            <div className="card">
                                <h3>Write & Create</h3>
                                <p>
                                    Compose a message, upload photos, or record your thoughts.
                                    Pour your heart into the moment.
                                </p>
                            </div>
                        </div>

                        <div className="connector" />

                        {/* STEP 02 */}
                        <div className="timeline-row right">
                            <div className="card">
                                <h3>Lock the Capsule</h3>
                                <p>
                                    Choose a future date—a year from now, your graduation,
                                    or a milestone yet to come.
                                </p>
                            </div>

                            <div className="marker">
                                <span className="icon lock" />
                                <span className="step-no">02</span>
                            </div>
                        </div>

                        <div className="connector" />

                        {/* STEP 03 */}
                        <div className="timeline-row left">
                            <div className="marker">
                                <span className="step-no">03</span>
                                <span className="icon calendar" />
                            </div>

                            <div className="card">
                                <h3>Open When Ready</h3>
                                <p>
                                    When the time arrives, rediscover who you were and
                                    reflect on how far you’ve come.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="capsule">
                    <h2>More Than Memories. A Bridge to Your Future.</h2>
                    <p className="capsule-subtitle">
                        Time capsules aren't just about looking back—they're about
                        connecting with the person you're becoming.
                    </p>
                    <div className="capsule-images">
                        <div className="polaroid-card">
                            <img src={image2} alt="Intention" />

                            <h4>Reflection</h4>

                            <div className="caption">
                                <p>Look back on where you've been and how you've grown</p>
                            </div>
                        </div>
                        <div className="polaroid-card">
                            <img src={image3} alt="Intention" />

                            <h4>Nostalgia</h4>

                            <div className="caption">
                                <p>Revisit the feelings, dreams, and moments that shaped you</p>
                            </div>
                        </div>
                        <div className="polaroid-card">
                            <img src={image4} alt="Intention" />

                            <h4>Growth</h4>

                            <div className="caption">
                                <p>Measure the distance between who you were and who you've become</p>
                            </div>
                        </div>
                        <div className="polaroid-card">
                            <img src={image5} alt="Intention" />

                            <h4>Intention</h4>

                            <div className="caption">
                                <p>Live with purpose by documenting what matters most</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="get-started">
                    <h2>Someday, you'll be glad you saved this moment.</h2>
                    <p>Start capturing the memories that matter. Your future self is waiting.</p>
                    <button className="primary-btn" onClick={handleEvent}>Start Your Time Capsule</button>
                </section>
            </div>
            <Footer />
        </>

    );
};

export default Home;




