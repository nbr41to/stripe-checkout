import './App.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardForm } from "./CardForm"

const stripePromise = loadStripe("pk_live_51EAYIBA3j54eC8NHFLDVuWt9mrbJ8mmYPbdIDk1uSdMeh22yQynnbIWYqhI9mdRHjYQVRhdIJvnObUkFgL97jmsF00TwtGk6XE")

function App() {

  return (
    <div>
      <h1>stripe checkout test</h1>
      <Elements stripe={stripePromise}>
        <CardForm />
      </Elements>
    </div>
  );
}

export default App;
