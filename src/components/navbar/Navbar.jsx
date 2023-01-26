import NavbarComponent from "./NavbarComponent";

import styles from "./Navbar.module.scss";
import { HStack, Box, Center } from "@chakra-ui/react";
import { useEffect } from "react";

const Navbar = (np) => {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <div>
      <Box className={styles.navbarContainer}>.</Box>
      <div style={{display:"flex", justifyContent: "center"}}>
        {/*<Box className={styles.navbg}>`</Box>
        <Box className={styles.progressBar} id="myBar"></Box>*/}
        <HStack draggable="false" className={styles.container} spacing={"6.5vw"}>
          {np.anchors.map((anchor) => (
            <NavbarComponent key={null} name={anchor.name} anchorLink={anchor.id} />
          ))}
        </HStack>
      </div>
    </div>
  );
};

function scrollFunction() {
  var winScroll = document.documentElement.scrollTop;
  const sections = document.querySelectorAll("section");
  let curr = "";
  let currSec = sections[1];
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (sectionTop) {
      curr = section.getAttribute("id");
      currSec = section;
    }
  });
  var scrollable = 0;
  var width = 0;
  switch (curr) {
    case "home":
      scrollable = currSec.clientHeight;
      width = 5 + 10 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "about":
      scrollable = currSec.clientHeight;
      width = 15 + 15 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "tracks_and_challenges":
      scrollable = currSec.clientHeight;
      width = 30 + 2 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "general_tracks":
      scrollable = currSec.clientHeight;
      width = 32 + 5 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "emerging_tracks":
      scrollable = currSec.clientHeight;
      width = 37 + 5 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "faq":
      scrollable = currSec.clientHeight;
      width = 42 + 13 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "schedule":
      scrollable = currSec.clientHeight;
      width = 55 + 13 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "sponsors":
      scrollable = currSec.clientHeight;
      width = 80 + 44 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    default:
      break;
  }
  const bar = document.getElementById("myBar");
  if (bar) {
    bar.style.width = width + "%";
  }
}

export default Navbar;