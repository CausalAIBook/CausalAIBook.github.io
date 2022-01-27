/** @jsxImportSource theme-ui */
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Divider,
} from "theme-ui";
import { Link as ScrollLink } from "react-scroll";
import src from "constants/src.data";
import BannerContent from "constants/banner.data";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <BannerContent />
          <Flex>
            <ScrollLink
              to="book"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
            >
              <Button variant="whiteButton" aria-label="To The Book">
                To the PDF
              </Button>
            </ScrollLink>
          </Flex>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={src.BannerThumb} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],

    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ["150px", null, null, null, null, null, "140px", "130px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    mb: 7,
    background: "gradient2",
    background:
      "linear-gradient(40deg, rgba(3,8,48,1) 0%, rgba(9,31,111,1) 53%, rgba(16,65,141,1) 100%)",
    container: {
      display: "flex",
    },
    contentBox: {
      width: ["100%", null, "85%", "55%", "50%", "55%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ["none", null, null, "block"],
      justifyContent: "center",
      ml: [0, null, null, "-110px", "-115px", "-150px", "-10px", "-10px"],
      mr: [0, null, null, "-15px", "-10px", "-10px", "-220px", "-290px"],
      mt: [0, null, null, "40px", 4, 7, 0],
      mb: [0, null, null, null, "-45px", "-70px", null, "-115px"],
      overflow: "hidden",
      textAlign: "right",
      width: "50%",
    },
  },
};
