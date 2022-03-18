// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>


      {/* <LooadCountries></LooadCountries> */}
    </div>
  );
}

// function LooadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return (
//     <div>
//       <h1>Visiting Every Country In The World :)</h1>
//       <h3>Available Cuontries:{countries.length}</h3>
//       {/* set Data dynamicaly */}
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// };
// // make componet for all data display
// function Country(props) {
//   return (
//     <div className="cont-sytle">
//       <h2>Name:{props.name}</h2>
//       <h4>Population:{props.population}</h4>
//     </div>
//   )
// }

export default App;
