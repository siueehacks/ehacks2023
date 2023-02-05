import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div class="social-container">
      <a
        href="https://www.instagram.com/siu_ehacks/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://github.com/siue-ehacks">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
};

export default SocialLinks;
