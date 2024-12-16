import "./Home.css";
import { ReactComponent as Pic1 } from "../assets/pic1.svg";
import { Button } from "@mui/material";
import { useState, useCallback } from "react";

const slides = [
  {
    title1: "Lessons and insights",
    title2: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    button: "Register",
  },
  {
    title1: "Slide 2",
    title2: "Title 2",
    description: "Description 2",
  },
  {
    title1: "Slide 3",
    title2: "Title 3",
    description: "Description 3",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setCurrentSlide = useCallback(
    (index) => {
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    },
    [currentIndex]
  );

  return (
    <div id="carousel">
      <div id="intro">
        <div id="data">
          <h1 id="home-title">
            <span id="title1">{slides[currentIndex].title1}</span>
            <br />
            <span id="title2">{slides[currentIndex].title2}</span>
          </h1>
          <p>{slides[currentIndex].description}</p>
          <Button variant="contained" id="register" className="button">
            Register
          </Button>
        </div>
        <Pic1 id="pic1" className="pic" />
      </div>

      {/* Dots indication */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${currentIndex === i ? "active" : ""} `}
            onClick={() => setCurrentSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
