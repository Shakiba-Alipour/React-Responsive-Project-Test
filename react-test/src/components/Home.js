import "./Home.css";
import { ReactComponent as Pic1 } from "../assets/pic1.svg";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div id="intro">
      <div id="data">
        <h1>
          <span id="title1">Lessons and insights</span>
          <br />
          <span id="title2">from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button variant="contained" id="register">
          Register
        </Button>
      </div>
      <Pic1 id="pic1" className="pic" />
    </div>
  );
}
