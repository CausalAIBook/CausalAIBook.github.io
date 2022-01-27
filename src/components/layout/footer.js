/** @jsxImportSource theme-ui */
import {
  Heading,
  Box,
  Container,
  Text,
  Image,
  Link as SocialLink,
} from "theme-ui";
import { Link } from "components/link";
import menuItems from "../../constants/footer.data";
import src from "constants/src.data";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          {menuItems.map(({ header, items }, i) => (
            <Box sx={styles.footer.menus} key={i}>
              <Heading sx={styles.footer.heading}>{header}</Heading>
              <nav>
                {items.map(({ path, label }, i) => (
                  <Link
                    path={path}
                    key={i}
                    label={label}
                    sx={styles.footer.link}
                  />
                ))}
              </nav>
            </Box>
          ))}
        </Box>
      </Container>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Image
          src={src.LogoDark}
          sx={{
            flex: 1,
            height: ["15px", null, null, "20px"],
          }}
          alt="Logo"
        />
        <Container sx={{ flex: 1, textAlign: "center" }}>
          <SocialLink href={src.GitHubLink} sx={{ color: "text" }}>
            <FaGithub sx={{ fontSize: [5, 6, 7, 8, 9] }} />
          </SocialLink>
        </Container>
      </Container>

      <Text sx={styles.footer.copyright}>
        All right reserved
        <Link path="/" target="_blank">
          - CausalML
        </Link>
      </Text>
    </footer>
  );
}

const styles = {
  footer: {
    container: {
      width: "100%",
      alignItems: "stretch",
    },
    footerTopArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      flexWrap: "wrap",
      pt: [7, null, 8],
      pb: ["10px", null, null, "20px"],
      px: [0, null, null, null, 4],
    },
    menus: {
      mr: "auto",
      ml: "auto",
      width: ["50%", null, null, "25%"],
      display: "flex",
      flexDirection: "column",
      mb: ["40px", null, null, "60px"],
    },

    heading: {
      fontSize: [3, null, null, 4],
      color: "text_secondary",
      fontWeight: "500",
      mb: [3, 4, 5, null, 6],
      lineHeight: "1.35",
    },

    link: {
      fontSize: ["14px", null, 1],
      color: "text",
      fontWeight: "body",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ":hover": {
        color: "primary",
      },
      ":last-child": {
        mb: "0px",
      },
    },
    copyright: {
      display: "inline-block",
      fontSize: ["14px", null, 1],
      width: "100%",
      textAlign: "center",
      p: ["20px 20px"],
      backgroundColor: "#FCFDFE",
      color: "text",
      a: {
        textDecoration: "none",
        color: "inherit",
        pl: 1,
        transition: "all 0.25s",
        "&:hover": {
          color: "primary",
        },
      },
    },
  },
};
