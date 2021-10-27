import { Switch, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AddPet from "./components/AddPet";
import EditPet from "./components/EditPet";
import ListPets from "./components/ListPets";
import PetDetails from "./components/PetDetails";
import Lifetime from "./components/Graphs/Lifetime";
import AddVital from "./components/Vitals/AddVital";
import EditVital from "./components/Vitals/EditVital";
import VitalDetails from "./components/Vitals/VitalDetails";
import About from "./components/About/About";
import AboutApp from "./components/About/AboutApp";
import Resources from "./components/About/Resources";
import Team from "./components/About/Team";
import Database from "./components/Graphs/Database";
import Nutrition from "./components/Nutrition/Nutrition";
import WeeklySchedule from "./components/Nutrition/WeeklySchedule";
import Appointments from "./components/Appointment/Appointments";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pets" component={ListPets}/>
        <Route exact path="/pets/add" component={AddPet}/>
        <Route exact path="/pets/:id/edit" component={EditPet}/>
        <Route exact path="/pets/:id" component={PetDetails}/>
        <Route exact path="/data" component={Database}/>
        <Route exact path="/life" component={Lifetime}/>
        <Route exact path="/vitals/add" component={AddVital}/>
        <Route exact path="/vitals/:id/edit" component={EditVital}/>
        <Route exact path="/vitals/:id" component={VitalDetails}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/aboutapp" component={AboutApp}/>
        <Route exact path="/resources" component={Resources}/>
        <Route exact path="/team" component={Team}/>
        <Route exact path="/nutrition" component={Nutrition}/>
        <Route exact path="/foodweekly" component={WeeklySchedule}/>
        <Route exact path="/appointment" component={Appointments}/>
        <Route exact path="/article1" component={Article1}/>
        <Route exact path="/article2" component={Article2}/>
        


      </Switch>
    </div>
  );
}

export default App;
