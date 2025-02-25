import './styles/App.css';
import Heading from './component/Heading';
import FormImage from './component/FormImage';
import FormSubmit from './component/FormSubmit';


function App() {
  return (
    <section className="App">
      <div className="login-form">
            <Heading name1= "Login page" name2 = "Designed with adobe XD" idName= "main"/>
            <div className="container">
                <div className= "sub-container">
                  <div className="main">
                          <FormImage imageUrl="assets/images/imge.png"/>
                          <FormSubmit />
                    </div>
                </div>
                  
            </div>
      </div>
      
    </section>
  );
}


export default App;
