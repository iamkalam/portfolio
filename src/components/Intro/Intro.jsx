import React, { useContext } from "react";
import "./Intro.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import boy2 from "../img/arsalan1.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkdn.png";
// import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import { Typewriteskill } from "../Typewriteskill/index"
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div>
          <div className="i-name">
            {/* yahan change hy darkmode ka */}
            <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
            <span>Arsalan Ahmed </span>

            <span className="typewtr">
              {/* <h1 className="fluidz-48 mb-1x"> */}
              <Typewriteskill />
              {/* </h1> */}
            </span>

 
            <span>
              As an experienced SEO content writer and copywriter,<br /> I specialize in creating high-quality, engaging content<br />
              ripti, that not only resonates with readers but also helps<br />
              to drive traffic and boost search engine rankings.<br />
              With years of experience.Whether you need blog posts,<br />
              script website content, product descriptions, or social media posts<br/> contact me
            </span>
          </div>
        </div>
        <div></div>


        <a href="https://www.fiverr.com/ersalna_pk" target="_blank">
          <button className="button i-button">Hire Me</button> </a>
        {/* </Link> */}
        {/* social icons */}
        <div className="i-icons" >
          <a href="" target="_blank" >
            <GitHubIcon style={{ fontSize: "75px" }} />
          </a>
          <a href="https://www.linkedin.com/in/arsalanahmadws/" target="_blank" className="icon">
            <LinkedInIcon style={{ fontSize: "75px" }} />
          </a>
          <a href="" target="_blank" >
            <InstagramIcon style={{ fontSize: "75px" }} />
          </a>
          <a href="" target="_blank" className="icon">
            <TwitterIcon style={{ fontSize: "75px" }} />
          </a>

        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <dvi className="heroimg">
        <img className="arsalan" src={boy2} alt="" />
        </dvi>

        

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
