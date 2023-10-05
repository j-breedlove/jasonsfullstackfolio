import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialIcons = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/jason-breedlove-b216b6237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUCfPY%2FisSIeQADmYB%2B2FWg%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
        id="myLinkedIn"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/j-breedlove"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
        id="myGithub"
      >
        <GitHubIcon />
      </a>
    </div>
  );
};

export default SocialIcons;
