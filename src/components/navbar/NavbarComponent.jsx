import { Link, Center } from "@chakra-ui/react";

import styles from "./Navbar.module.scss";

const NavbarComponent = (ncp) => {
  return (
    <div className={styles.component}>
      <Link draggable="false" style={{ textDecoration: "none", textAlign: "center" }} href={ncp.anchorLink}>
        <Center>
          {ncp.name}
        </Center>
        
      </Link>
    </div>
  );
};

export default NavbarComponent;