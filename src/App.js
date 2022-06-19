import './App.css';
import "uikit/dist/js/uikit.min.js";
import "../node_modules/uikit/dist/css/uikit.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Card from './FlipCard.js'
function App() {
  return (
    <div className="App">
  <header className="AppHeader  ">
    <div className="uk-height-large uk-flex-middle uk-background-cover uk-light "  uk-img>
    <div className="text" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
      <h1 class=" uk-flex uk-flex-center@m uk-flex-center@s uk-flex-left@l" style={{color:'#120e43'}}>Financial Solutions to Advance your Business</h1>
      <p class="uk-flex uk-flex-center@m uk-flex-left@l uk-text-justify uk-width-1-2@l uk-width-1-1@s uk-margin-small-right@s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button class="button uk-button uk-flex uk-flex-center@m uk-flex-center@s uk-flex-left@l ">Button</button>
      </div>
    </div>
    <div class="uk-flex uk-flex-center uk-column-1-3 uk-margin-large-top uk-column-1-1@s">
    <Card name="Mission"/>
    <Card name="Vision"/>
    <Card name="Objective"/>
    </div>
    </header>

    <div className="about">
  <div class="uk-flex uk-flex-left@l uk-flex-left@m uk-flex-center@s uk-width-1-2@l">
    <div className="about_text">
      <h2 class=" uk-flex uk-flex-left@m uk-flex-left@l uk-margin-xlarge-top" style={{color:'white'}}>About Us</h2>
      <p class=" uk-flex uk-flex-center@m uk-flex-left@l ">We incorporated Prudence with a moto”Let’s grow together”. Planning the business resources coupled with compliances of law has become a challenge today. It requires extensive theoretical knowledge and practical experience. Shanmukha and his associates have sound theoretical knowledge and good practical experience. By sharing their knowledge and practical experience with the team members and clients, we ensure effective and timely redressal of issues arising on routine basis or that can arise later.</p>
      <button class="button uk-button uk-flex uk-flex-center@m uk-flex-center@s uk-flex-left@l uk-position-center@m" style={{color:'#120e43'}}>Button</button>
    </div>
    </div>

  <div class="uk-flex uk-flex-right@l uk-flex-right@m uk-flex-center@s ">
    <div className="right ">
      <img src="images/3.jpg"alt=""/>
    </div>
  </div>
  </div>
</div>

  );
}

export default App;
