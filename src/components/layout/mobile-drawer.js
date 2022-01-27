import React, { useContext } from "react";
import { Box } from "theme-ui";
import { Scrollbars } from "react-custom-scrollbars-2";
import Drawer from "components/drawer";
import { DrawerContext } from "../../contexts/drawer/drawer.context";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import menuItemsList from "../../constants/header.data";
import { FaTwitter, FaGithub } from "react-icons/fa";
import src from "../../constants/src.data";
const social = [
  {
    path: src.TwitterLink,
    icon: <FaTwitter />,
  },
  {
    path: src.GitHubLink,
    icon: <FaGithub />,
  },
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  const menuItems = menuItemsList.map(function (menuItem, i) {
    if (menuItem.external) {
      return (
        <a href={menuItem.path} passHref={true} key={i}>
          {menuItem.label}
        </a>
      );
    } else {
      return (
        <ScrollLink
          activeClass="active"
          to={menuItem.path}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          key={i}
        >
          {menuItem.label}
        </ScrollLink>
      );
    }
  });

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>{menuItems}</Box>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <a href={path}>{icon}</a>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
    cursor: "pointer",
    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "dark",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "100px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "text_white",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "secondary",
      },
      "&.active": {
        color: "secondary",
      },
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: ["30px", "30px", "30px", "30px", "30px"],
      mr: 7,
      transition: "all 0.25s",
      cursor: "pointer",
      a: {
        color: "text",
      },
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "secondary",
      },
    },
  },

  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
  },
};

export default MobileDrawer;
