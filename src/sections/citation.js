/** @jsxImportSource theme-ui */

import { Container, Textarea } from "theme-ui";
import SectionHeader from "components/section-header";

const cite =
  "Chernozhuko, V. & Hansen, C. & Spindler, M. & Syrgkanis, V. (2022): Applied Causal Inference Powered by ML and AI";

export default function Citation() {
  return (
    <section id="citation" sx={styles.citation}>
      <Container>
        <SectionHeader
          sx={styles.SectionHeader}
          slogan="Citation"
          title="This is how you can cite us"
          isWhite={true}
        />

        <Textarea
          sx={styles.Textarea}
          defaultValue={cite}
          rows={2}
          readOnly={true}
        />
      </Container>
    </section>
  );
}

const styles = {
  citation: {
    background: "primary",
    background:
      "linear-gradient(40deg, rgba(3,8,48,1) 0%, rgba(9,31,111,1) 53%, rgba(16,65,141,1) 100%)",
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [5, null, null, null, null, 7],
    mb: -7,
  },
  Textarea: {
    color: "white",
    fontSize: [2, null, null, null, 4],
    backgroundColor: "rgba(16, 15, 56, 0.4)",
    fontFamily: "Roboto",
    fontWeight: 300,
    width: "80%",
    height: ["140px", "120px", "90px", "90px", "110px"],
    display: "block",
    mr: "auto",
    ml: "auto",
    resize: "none",
    borderRadius: "20px",
    borderColor: "secondary",
    borderWidth: "2px",
  },
  SectionHeader: {
    marginTop: "0px",
  },
};
