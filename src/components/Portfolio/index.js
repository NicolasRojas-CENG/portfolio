import React from 'react';
import FeaturedProject from '../../assets/MyAttic.PNG'
import PickUpSports from '../../assets/PickUpSports.PNG'
import WeatherApp from '../../assets/WeatherApp.PNG'
import PasswordGenerator from '../../assets/PasswordGenerator.PNG'
import TeamProfileGenerator from '../../assets/TeamProfileGenerator.png'
import SHMS from '../../assets/SHMS.JPG'

function Portfolio() {
    return (
        <section className='Portfolio'>
            <h2>Featured Project</h2>
            <article className='Featured'>
                <h3>MyAttic</h3>
                <div>
                    <img src={FeaturedProject} className="my-2" alt="cover" />
                    <aside>
                        <h4>Description</h4>
                        <p>A website that serves as an online garage sale. Users can upload their stuff
                            that they would like to sell to their profile page, which allows other users to
                            view and purchase these products.
                        </p>
                        <h4>Technologies</h4>
                        <p>JavaScript/Node.js <br></br> HTML/CSS <br></br>React<br></br>GraphQL<br></br>MongoDB
                        <br></br>JWT authentication<br></br>Stripe payment platform</p>
                        <h4>Links</h4>
                        <a href='https://myattic-therewillbecodetoo.herokuapp.com/'>Website</a>
                        <br></br>
                        <a href='https://github.com/NicolasRojas-CENG/myattic'>GitHub</a>
                    </aside>
                </div>
            </article>
            <h2>Web Development Projects</h2>
            <article className='WebProjects'>
            <h3>Pickup Sports</h3>
                <div>
                    <img src={PickUpSports} className="my-2" alt="cover" />
                    <aside>
                        <h4>Description</h4>
                        <p>A website to connect users to find players for select sports in the Toronto area.
                            Users can create events for people to join, or search available events to join.
                            We offer event creation for soccer, baseball, bascketball, hockey, and tennis.
                            User must create an account to take full advantage of the service.
                        </p>
                        <h4>Technologies</h4>
                        <p>JavaScript/Node.js <br></br> HTML/CSS <br></br>Handlebars</p>
                        <h4>Links</h4>
                        <a href='https://therewillbecode.herokuapp.com/'>Website</a>
                        <br></br>
                        <a href='https://github.com/NicolasRojas-CENG/thereWillBeCode'>GitHub</a>
                    </aside>
                </div>
            </article>
            <article className='WebProjects'>
                <h3>Weather App</h3>
                <div>
                    <img src={WeatherApp} className="my-2" alt="cover" />
                    <aside>
                        <h4>Description</h4>
                        <p>A website showcasing the Weather of differen cities around the world.
                            One can view the current weather and the 5-day forcast for a specific city.
                            Website saves the eight most recent searches for quick availability.
                        </p>
                        <h4>Technologies</h4>
                        <p>JavaScript<br></br>HTML/CSS <br></br>Web API</p>
                        <h4>Links</h4>
                        <a href='https://nicolasrojas-ceng.github.io/WeatherDashboard/'>Website</a>
                        <br></br>
                        <a href='https://github.com/NicolasRojas-CENG/WeatherDashboard'>GitHub</a>
                    </aside>
                </div>
            </article>
            <article className='Password'>
                <h3>Password Generator</h3>
                <div>
                    <img src={PasswordGenerator} className="my-2" alt="cover" />
                    <aside>
                        <h4>Description</h4>
                        <p>A website to play a quick quiz based on JavaScript concepts and code.
                            The user will be timed, any correct answer awards points, while incorrect answers deduct time.
                            The user will be given a final score and it will be saved on a "database" file.
                        </p>
                        <h4>Technologies</h4>
                        <p>JavaScript<br></br>HTML/CSS<br></br>Web API</p>
                        <h4>Links</h4>
                        <a href='https://nicolasrojas-ceng.github.io/Password_Generator/'>Website</a>
                        <br></br>
                        <a href='https://github.com/NicolasRojas-CENG/Password_Generator'>GitHub</a>
                    </aside>
                </div>
            </article>
            <article className='WebProjects'>
                <h3>Team Profile Generator</h3>
                <div>
                    <img src={TeamProfileGenerator} className="my-2" alt="cover" />
                    <aside>
                        <h4>Description</h4>
                        <p>A web application that allows for the creation of the team profile.
                            Each team member has its own card with their name, role, email, and
                            any information related to their position.
                        </p>
                        <h4>Technologies</h4>
                        <p>Jest<br></br>Node.js/JavaScript<br></br>Inquirer<br></br>HTML/CSS</p>
                        <h4>Links</h4>
                        <a href='https://github.com/NicolasRojas-CENG/Team-Profile-Generator'>GitHub</a>
                    </aside>
                </div>
            </article>
            <h2>Other Projects</h2>
            <article className='OtherProjects'>
            <h3>Smart Home Monitor System</h3>
                <div>
                    <img src={SHMS} className="my-2" alt="cover" />
                    <aside>
                        <h4>Description</h4>
                        <p>This is a small monitor system with app conectivity to keep your house secure.
                            The physical part is composed of a Raspberry Pi, sensors, alarm, and a camera for movment monitoring.
                            The app allows for data retreaval - images and sensor readings.
                        </p>
                        <h4>Technologies</h4>
                        <p>Python <br></br>Firebase<br></br>Java<br></br>Android Studio</p>
                        <h4>Links</h4>
                        <a href='https://github.com/NicolasRojas-CENG/HomeMonitorSystem_BuildInstructions'>GitHub</a>
                    </aside>
                </div>
            </article>
            <h2>Up Coming Projects</h2>
            <article className='FutureProjects'>
                <h3>Gaming E-Commerce site</h3>
            </article>
        </section>
    );
}
export default Portfolio;
