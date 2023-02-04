import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div class="social-container">
      <a
        href="https://www.instagram.com/siu_ehacks/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
        <a href="https://ehacks.io/" className="instagram social">
            <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
    </div>
  );
};

export default SocialLinks;
