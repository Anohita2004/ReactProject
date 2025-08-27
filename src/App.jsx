
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import Greeting from "./Greeting";
import ProductInfo from "./components/ProductInfo";
import Lists from "./Lists";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Person from "./components/Person";

function App(){
  return (
    <div>
      <Greeting />
      
      <Person name="Alice" age={30} />
      <Product name="Laptop" cost={1000} />
      <ProductInfo />
      <Lists />
      <ProductList />
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
    </div>
  )
  
  
}
export default App;