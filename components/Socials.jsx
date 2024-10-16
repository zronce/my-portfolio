import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

const socials = [
  { icon: <FaGithub/>, path: "https://github.com/zronce" },
  { icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/kybatac/" },
  { icon: <FaFacebookF/>, path: "https://www.facebook.com/kylebtc" },
];
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
