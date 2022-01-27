/** @jsxImportSource theme-ui */
import { Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Logo from "components/logo";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItemsList from "../../constants/header.data";
import src from "constants/src.data";

export default function Header({ className }) {
  const menuItems = menuItemsList.map(function (menuItem, i) {
    if (menuItem.external) {
      return (
        <Link
          href={menuItem.path}
          passHref={true}
          key={i}
          sx={{ color: "white" }}
        >
          {menuItem.label}
        </Link>
      );
    } else {
      return (
        <ScrollLink
          activeClass="active"
          to={menuItem.path}
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
          key={i}
        >
          {menuItem.label}
        </ScrollLink>
      );
    }
  });

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={className === "sticky" ? src.LogoDark : src.LogoWhite} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems}
          </Flex>

          <ScrollLink
            to="book"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            <Button
              className="book__btn"
              variant="secondary"
              aria-label="To The Book"
            >
              To the PDF
            </Button>
          </ScrollLink>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "white",
    fontWeight: "normal",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.5s ease",
    animation: `${positionAnim} 0.4s ease`,
    a: {
      color: "white",
    },
    ".book__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nav > a": {
        color: "text",
      },
      ".book__btn": {
        borderColor: "primary",
        color: "primary",
        "&:hover": {
          boxShadow: "rgba(31, 62, 118, 0.57) 0px 9px 20px -5px",
          background: "primary",
          background:
            "linear-gradient(40deg, rgba(3,8,48,1) 0%, rgba(9,31,111,1) 53%, rgba(16,65,141,1) 100%)",
          color: "white",
        },
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "400",
      px: 25,
      cursor: "pointer",
      lineHeight: "1.2",
      "&.active": {
        color: "secondary",
      },
    },
  },
};
