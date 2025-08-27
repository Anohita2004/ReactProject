
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import Greeting from "./Greeting";
import ProductInfo from "./components/ProductInfo";

function App(){
  return (
    <div>
      <Greeting />
      <ProductInfo />
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
    </div>
  )
  
  
}
export default App;