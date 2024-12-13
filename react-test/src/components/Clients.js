import "./Clients.css";
import { ReactComponent as client1 } from "../assets/client1.svg";
import { ReactComponent as client2 } from "../assets/client2.svg";
import { ReactComponent as client3 } from "../assets/client3.svg";
import { ReactComponent as client4 } from "../assets/client4.svg";
import { ReactComponent as client5 } from "../assets/client5.svg";
import { ReactComponent as client6 } from "../assets/client6.svg";
import { ReactComponent as client7 } from "../assets/client3.svg";

const clients = [client1, client2, client3, client4, client5, client6, client7];

export default function Clients() {
  return (
    <div id="clients-section">
      <h2 id="clients-section-title">Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <ul id="logos">
        {clients.map((Client, index) => (
          <li key={index}>
            <Client />
          </li>
        ))}
      </ul>
    </div>
  );
}
