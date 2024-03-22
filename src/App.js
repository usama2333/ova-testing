import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          // axios.post("https://ovasaveapistage.azurewebsites.net/v1/contact-us", {
          axios.post("http://172.16.3.226:3000/v1/contact-us", {
            name: "ali",
            email: "abc@gmail.com",
            description: "jfeovouevoeuvoevoevun",
          });
        }}
      >ali bhai</button>
    </div>
  );
}

export default App;
