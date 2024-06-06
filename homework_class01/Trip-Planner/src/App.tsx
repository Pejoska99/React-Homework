import Greetings from "./components/Greetings";
import MyTrips from "./components/Trips";
import AboutMe from "./components/AboutMe";


function App() {
  
    return (
      <>
      <div>
        <Greetings /> 
       
      </div>

      <div >

      <MyTrips />
      </div>

      <div>
        <AboutMe
        fullName="Biljana"
        from="Struga"
        favoriteMovies={[
          "Schindler's List",
          "Forrest Gump",
          "My Sweet Home Alabama",
        ]}
        />
      </div>
</>
   
    );
}

export default App
