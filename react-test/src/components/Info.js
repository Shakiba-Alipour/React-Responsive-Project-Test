import "./Info.css";
import { ReactComponent as MembersLogo } from "../assets/members_logo.svg";
import { ReactComponent as BookingLogo } from "../assets/booking_logo.svg";
import { ReactComponent as ClubsLogo } from "../assets/clubs_logo.svg";
import { ReactComponent as PaymentLogo } from "../assets/payment_logo.svg";

export default function Info() {
  return (
    <div id="info-section">
      <div id="text">
        <h2 id="title">
          <span id="line1">Helping a local</span>
          <br />
          <span id="line2">business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div id="table">
        <div id="row1" className="row">
          <div>
            <MembersLogo className="info-logo" />
            <div>
              <h3>2,245,341</h3>
              <p>Members</p>
            </div>
          </div>
          <div>
            <ClubsLogo className="info-logo" />
            <div>
              <h3>46,328</h3>
              <p>Clubs</p>
            </div>
          </div>
        </div>

        <div id="row2" className="row">
          <div>
            <BookingLogo className="info-logo" />
            <div>
              <h3>828,867</h3>
              <p>Event bookings</p>
            </div>
          </div>
          <div>
            <PaymentLogo className="info-logo" />
            <div>
              <h3>1,926,436</h3>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
