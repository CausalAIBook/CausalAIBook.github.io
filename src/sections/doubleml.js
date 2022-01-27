/** @jsxImportSource theme-ui */
import { Container, Box, Text, Image, Divider } from "theme-ui";
import SectionHeader from "components/section-header";
import dmldata from "constants/doubleml.data";

export default function DoubleML() {
  return (
    <section id="doubleml" sx={styles.doubleml}>
      <Container>
        <SectionHeader
          sx={styles.SectionHeader}
          slogan="DoubleML"
          title="Double / debiased machine learning"
          isWhite={true}
        />
        <div
          sx={{
            display: "block",
            mr: "auto",
            ml: "auto",
            height: "4px",
            width: ["40vw", "40vw", "40vw", "30vw", "20vw"],
            backgroundColor: "secondary",
            borderRadius: "2px",
            mb: 4,
          }}
        ></div>
        <Container className="body">
          <Box
            sx={{
              textAlign: ["center", null, "right"],
            }}
          >
            <span
              sx={{
                display: "inline-block",
                height: "100%",
                verticalAlign: "middle",
              }}
            ></span>
            <Image src="https://docs.doubleml.org/dev/logo.png"></Image>
          </Box>
          <Box>
            <Text className="textbody">{dmldata.description}</Text>
          </Box>
        </Container>
        <Divider />
        <Box sx={styles.footer}>
          {dmldata.links.map(({ name, path, icon }, i) => (
            <Box as="span" key={i} sx={styles.footer.icon}>
              <a href={path}>
                {icon}
                <Text
                  sx={{
                    fontSize: 1,
                    display: "inline-block",
                    verticalAlign: "text-top",
                    pl: 2,
                  }}
                >
                  {name}
                </Text>
              </a>
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  doubleml: {
    background: "primary",
    background:
      "linear-gradient(40deg, rgba(3,8,48,1) 0%, rgba(9,31,111,1) 53%, rgba(16,65,141,1) 100%)",
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [7, null, 7, null, null, 7],
    mb: 8,
    ".body": {
      display: "grid",
      gridTemplateColumns: ["", null, "25% 75%"],
      ".textbody": {
        color: "white",
      },
      img: {
        width: ["10em", "10em", "10em", "10em", "8em"],
        verticalAlign: "middle",
        pr: [0, 0, 4],
      },
    },
  },
  SectionHeader: {
    marginTop: "0px",
  },
  footer: {
    mt: 5,
    width: ["90%", "70%", null, null, "50%"],
    display: "grid",
    gridTemplateColumns: "50% 50%",
    mr: "auto",
    ml: "auto",
    alignItems: "center",
    icon: {
      textAlign: "center",
      a: {
        color: "white",
        fontSize: "1.5em",
        fontWeight: 700,
        textDecoration: "none",
        "&:hover": {
          color: "secondary",
        },
      },
    },
  },
};
