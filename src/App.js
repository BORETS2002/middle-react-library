import "./App.css";
import ProjetctFor from "./pages/for/projectFor";
import ProjetctOne from "./pages/one/projetct-one.jsx";
import ProjetctThree from "./pages/three/projectThree";
import ProjetctTwoo from "./pages/twoo/projectTwo";

function App() {
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <ul className='list  row'>
            <li className='col-6'>
              <ProjetctOne />
            </li>
            <li className='col-6'>
              <ProjetctTwoo />
            </li>
            <li className='col-6 mt-5'>
              <ProjetctThree />
            </li>
            <li className='col-6  mt-5'>
              <ProjetctFor />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
