import NavbarComponent from "./NavbarComponent";

import styles from "./Navbar.module.scss";
import { HStack, Box, Menu, MenuButton, MenuItem, MenuList, Center, Link } from "@chakra-ui/react";
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
      <a
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
        target="_blank"
        rel="noreferrer"
        id={styles.mlh}
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
        />
      </a>
      <Center>
        <Box className={styles.navbg}>`</Box>
        <Box className={styles.progressBar} id="myBar"></Box>
        <HStack draggable="false" className={styles.container} spacing={"8vw"}>
          {np.anchors.map((anchor) => (
            <NavbarComponent key={null} name={anchor.name} anchorLink={anchor.id} />
          ))}
        </HStack>
      </Center>

      <div className={styles.menu}>
        <Menu>
          <MenuButton>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5 18.1915H4.5"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.5 9H4.5"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.5 27.3829H4.5"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MenuButton>
          <MenuList>
            <Link href="#home">
              <MenuItem>Home</MenuItem>
            </Link>
            <Link href="#about">
              <MenuItem>About</MenuItem>
            </Link>
            <Link href="#tracks_and_challenges">
              <MenuItem>Modes</MenuItem>
            </Link>
            <Link href="#faq">
              <MenuItem>FAQ</MenuItem>
            </Link>
            <Link href="#schedule">
              <MenuItem>Schedule</MenuItem>
            </Link>
            <Link href="#sponsors">
              <MenuItem>Sponsors</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

function scrollFunction() {
  var winScroll = document.documentElement.scrollTop;
  const sections = document.querySelectorAll("section");
  let curr = "";
  let currSec = sections[1];
  var scrollable = 0;
  var width = 0;
  switch (curr) {
    case null:
      break;
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
  }
  const bar = document.getElementById("myBar");
  if (bar) {
    bar.style.width = width + "%";
  }
}

export default Navbar;