
import Weather from "./components/Weather";
import "./App.css"
function App(){
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontSize: '24px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'teal'
    }}>
     <Weather temperature={20}/>
      <Weather temperature={10}/>
      <Weather temperature={30}/>
      <Weather temperature={15}/>
    </section>
  )
  
}
export default App;