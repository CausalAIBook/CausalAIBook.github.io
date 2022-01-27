/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";

export default function Card({ children }) {
  return <Box sx={styles.card}>{children}</Box>;
}

const styles = {
  card: {
    backgroundColor: "white",
    width: "100%",
    boxShadow: "0px 5px 10px rgba(38,78,118,0.12)",
    borderRadius: "30px",
    m: "0 0px 20px",
    p: "10px 20px 10px",
    transition: "all 0.3s",
  },
};
