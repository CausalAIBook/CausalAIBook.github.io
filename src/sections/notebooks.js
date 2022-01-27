/** @jsxImportSource theme-ui */
import { Container, Heading, Text, Box, Image, Link, Divider } from "theme-ui";
import SectionHeader from "components/section-header";
import data from "constants/labs.data";

export default function Labs() {
  return (
    <section id="labs" sx={{ variant: "section.labs" }}>
      <Container sx={{ my: 7 }}>
        <SectionHeader slogan="Labs" title="Welcome to our Labs!" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        {data.map((item) => (
          <Link href={item.link} sx={styles.Link}>
            <Box sx={styles.Notebook} key={`notebook--key${item.id}`}>
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Divider />
              <Text sx={styles.description}>{item.description}</Text>
              <Divider />
              <div className="card-footer">
                <div className="image">
                  <Image src={item.site} alt="Client Image" />
                </div>
                <div className="image">
                  <Image sx={styles.LabLogo} src={item.lab} />
                </div>
              </div>
            </Box>
          </Link>
        ))}
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    maxWidth: ["95vw", "95vw", "70vw"],
    display: "grid",
    mr: "auto",
    ml: "auto",
    gridTemplateColumns: [
      "repeat(auto-fill, minmax(20em, 1fr))",
      "repeat(auto-fill, minmax(25em, 1fr))",
    ],
    mt: "-35px",
  },
  Notebook: {
    boxShadow: "0px 0px 3px rgba(38, 78, 118, 0.25)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 10px",
      "30px 25px 10px",
      "30px 20px 10px",
      "35px 30px 10px 40px",
      "30px 30px 10px",
      "35px 30px 10px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 15px 0px 15px",
      "28px 15px 0px 15px",
      "28px 15px 0px 15px",
      "28px 15px 0px 15px",
      "30px 15px 0px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 37px rgba(38, 78, 118, 0.15)",
    },
    ".card-footer": {
      display: "grid",
      gridTemplateColumns: "50% 50%",
      mr: "auto",
      ml: "auto",
      alignItems: "center",
      pb: 0,
      mt: 2,
      ".image": {
        textAlign: "center",
        img: {
          width: "45px",
          height: "45px",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  Link: {
    textDecoration: "none",
  },
};
