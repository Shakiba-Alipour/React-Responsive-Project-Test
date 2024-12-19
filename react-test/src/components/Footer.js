import "./Footer.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Link from "@mui/material/Link";
import InputAdornment from "@mui/material/InputAdornment";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import SendIcon from "@mui/icons-material/Send";

const Sections = [
  {
    key: "about-section",
    label: "About Us",
    className: "section",
    to: "about_us",
  },
  { key: "blog-section", label: "Blog", className: "section", to: "blog" },
  {
    key: "contact-us",
    label: "Contact Us",
    className: "section",
    to: "contact_us",
  },
  { key: "pricing", label: "Pricing", className: "section", to: "pricing" },
  {
    key: "testimonials",
    label: "Testimonials",
    className: "section",
    to: "testimonials",
  },
];
const Socials = [
  {
    id: "instagram",
    className: "socials-logo",
    icon: <InstagramIcon />,
    href: "https://instagram.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "twitter",
    className: "socials-logo",
    icon: <TwitterIcon />,
    href: "https://twitter.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "youtube",
    className: "socials-logo",
    icon: <YouTubeIcon />,
    href: "https://youtube.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
const Supports = [
  {
    key: "help-center-section",
    label: "Help Center",
    className: "section",
    href: "help_center",
  },
  {
    key: "service-terms-section",
    label: "Terms of Service",
    className: "section",
    href: "terms_of_service",
  },
  {
    key: "legal-section",
    label: "Legal",
    className: "section",
    href: "legal_center",
  },
  {
    key: "policy-section",
    label: "Privicy Policy",
    className: "section",
    href: "privicy_center",
  },
  {
    key: "status-section",
    label: "Status",
    className: "section",
    href: "status_center",
  },
];

const handleItemClick = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function DisplaySocials() {
  return (
    <div id="socials" className="footer-sections">
      {Socials.map((item) => (
        <Link
          className={item.className}
          id={item.id}
          href={item.href}
          target={item.target}
          rel={item.rel}
        >
          <div className="icon-button">{item.icon}</div>
        </Link>
      ))}
    </div>
  );
}

function DisplaySections() {
  return (
    <div id="sections" className="footer-sections">
      <h4 className="h4_title">Company</h4>
      {Sections.map((item) => (
        <a
          className={item.className}
          key={item.key}
          onClick={() => handleItemClick(item.to)}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

function DisplaySupports() {
  return (
    <div id="sections" className="footer-sections">
      <h4 className="h4_title">Support</h4>
      {Supports.map((item) => (
        <a
          className={item.className}
          key={item.key}
          onClick={() => handleItemClick(item.to)}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default function CustomFooter() {
  return (
    <div id="footer">
      <div id="policy" className="footer-sections">
        <Link href="#" className="logo-holder" underline="none">
          <Logo id="site-footer-logo" />
          <h2 id="site-footer-name">Nexcent</h2>
        </Link>
        <div id="copy-right">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <DisplaySocials />
      </div>
      <DisplaySections />
      <DisplaySupports />
      <div className="footer-sections">
        <h4 className="h4_title">Stay up to date</h4>
        <FormControl id="form">
          <TextField
            id="email-holder"
            label="Your Email Address"
            variant="outlined"
            size="small"
            endAdornment={
              <InputAdornment position="end">
                <SendIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
}
