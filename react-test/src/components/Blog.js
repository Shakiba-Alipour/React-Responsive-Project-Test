import "./Blog.css";
import { ReactComponent as Image1 } from "../assets/image1.svg";
import { ReactComponent as Image2 } from "../assets/image2.svg";
import { ReactComponent as Image3 } from "../assets/image3.svg";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Cards = [
  {
    image: Image1,
    caption: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: Image2,
    caption:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: Image3,
    caption: "Revamping the Membership Model with Triathlon Australia",
  },
];

function CardBuilder(card) {
  return (
    <Card className="card" elevation={0}>
      <div className="image-container">
        <card.image className="card-image" />
        <div className="content-overlay">
          <Typography variant="h6" className="card-caption">
            {card.caption}
          </Typography>
          <Button
            variant="text"
            color="success"
            endIcon={<ArrowForwardIcon />}
            className="readmore-button"
          >
            Readmore
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default function Blog() {
  return (
    <div id="blog">
      <h2 id="title">Caring is the new marketing</h2>
      <p id="blog-description">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div id="cards">
        {Cards.map((card, index) => CardBuilder(card, index))}
      </div>
    </div>
  );
}
