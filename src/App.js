import './assets/css/App.css';
import './assets/css/style.css';

// IMPORTANDO COMPONENTES
import Header from './components/Header';
import SpinLogo from './components/SpinLogo';
import DropDown from './components/DropDown';

function App() {
  var apiurl = "https://back.implementaconbubo.com/v1/sales/customer/?simple=true";
  var apikey = process.env.REACT_APP_API_KEY;
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossOrigin="anonymous"
      />
      <Header />
      <DropDown
        api_url={apiurl}
        api_key={apikey}
      />
    </div>
  );
}

export default App;
