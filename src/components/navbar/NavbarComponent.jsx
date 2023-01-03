import { Link } from "@chakra-ui/react";

import styles from "./Navbar.module.scss";

const NavbarComponent = (ncp) => {
  return (
    <div className={styles.component}>
      <Link draggable="false" style={{ textDecoration: "none" }} href={ncp.anchorLink}>
        {ncp.name}
      </Link>
    </div>
  );
};

export default NavbarComponent;