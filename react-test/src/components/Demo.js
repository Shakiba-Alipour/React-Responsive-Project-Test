import "./Demo.css";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Demo() {
  return (
    <div id="demo">
      <h1>
        <span>Pellentesque suscipit</span>
        <br />
        <span>fringilla libero eu.</span>
      </h1>
      <Button
        className="button"
        variant="contained"
        endIcon={<ArrowForwardIcon />}
      >
        Get a Demo
      </Button>
    </div>
  );
}
