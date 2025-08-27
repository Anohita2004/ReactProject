
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import Greeting from "./Greeting";
import ProductInfo from "./components/ProductInfo";
import Lists from "./Lists";
import ProductList from "./components/ProductList";
import { Parent, Child } from "./components/Props";

function App(){
  return (
    <div>
      <Greeting />
      
      <Child name="Anohita"/>
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