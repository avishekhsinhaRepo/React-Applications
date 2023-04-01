import "bulma/css/bulma.css";
import "./App.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant</p>
        </div>
      </section>
      <div class="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa123"
                image={AlexaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortans123"
                image={CortanaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri123" image={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
