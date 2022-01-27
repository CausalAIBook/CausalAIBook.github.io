import { Container, Text, Image } from "theme-ui";
import { FaAngleDown } from "react-icons/fa";

export default function Dropdown(notebooks) {
  return (
    <Container sx={styles.container}>
      <div className="menu-container">
        <button className="menu-trigger">
          <span className="menu-text">
            <Text>Notebooks</Text>
            <FaAngleDown />
          </span>
        </button>
        <nav className="menu">
          <ul>
            {notebooks.notebooks.map((notebook) => (
              <li key={notebook.id}>
                <a href={notebook.link}>
                  <Image className="itemimage" src={notebook.lab} />
                  <Text className="itemtext">{notebook.title}</Text>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  );
}

const styles = {
  container: {
    ".menu-container": {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ".menu-text": {
      color: "lightaccent",
    },
    ".menu-trigger": {
      background: "#ffffff",
      borderRadius: "90px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "4px 6px",
      // boxShadow: "0 1px 3px rgba(38,78,118,0.3)",
      border: "1px solid white",
      verticalAlign: "middle",
      transition: "box-shadow 0.4s ease",
      marginLeft: "auto",
    },
    ".menu-trigger:hover": {
      //boxShadow: "0 3px 8px rgba(38,78,118,0.3)",
      border: "1px solid rgba(0,0,0,0.3)",
      transition: "border-color 0.4s ease",
      ".menu-text": {
        color: "text",
      },
    },
    ".menu-trigger span": {
      fontWeight: 700,
      verticalAlign: "middle",
      fontSize: "14px",
      margin: "0 5px",
      display: "inline-flex",
      alignItems: "center",
    },
    ".menu": {
      background: "#ffffff",
      borderRadius: "15px",
      position: "absolute",
      top: "26px",
      right: "-60px",
      width: "400px",
      boxShadow: "0px 5px 10px rgba(38,78,118,0.25)",
      opacity: 0,
      visibility: "hidden",
      transform: "translateY(-20px)",
      transition: "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s",
      "ul li": {
        "&:first-child a": {
          borderTopRightRadius: "15px",
          borderTopLeftRadius: "15px",
        },
        "&:last-child a": {
          borderBottomRightRadius: "15px",
          borderBottomLeftRadius: "15px",
        },
      },
    },
    ".menu-container:hover .menu-text": {
      color: "text",
    },
    ".menu-container:hover .menu": {
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0)",
    },
    ".menu ul": { listStyle: "none", padding: "0", margin: "0" },
    ".menu li a": {
      textDecoration: "none",
      color: "#333333",
      padding: "5px 10px",
      display: "grid",
      gridTemplateColumns: "40px 1fr",
      alignItems: "center",

      "&:hover": {
        backgroundColor: "tocHover",
      },
    },
    ".itemtext": {
      gridColumn: 2,
      pl: 2,
      fontSize: 1,
      lineHeight: 1.5,
      fontWeight: 500,
    },
    ".itemimage": {
      gridColumn: 1,
      width: "40px",
    },
  },
};
