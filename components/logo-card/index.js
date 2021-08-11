import styles from "../../styles/Home.module.css";

const LogoCard = ({ src, title }) => {
  return (
    <img
      src={src}
      alt={title}
      title={title}
      loading="lazy"
      className={styles.companyLogo}
    />
  );
};

export default LogoCard;
