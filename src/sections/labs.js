/** @jsxImportSource theme-ui */
import {
  Container,
  Heading,
  Text,
  Box,
  Image,
  Button,
  Link,
  Divider,
} from "theme-ui";
import SectionHeader from "components/section-header";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";
import data from "constants/labs.data";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Labs() {
  return (
    <section id="labs" sx={{ variant: "section.notebooks" }}>
      <Container sx={{ my: 8 }}>
        <SectionHeader slogan="Labs" title="Take a look at our Labs" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.slice(0, 8).map((item) => (
            <Link key={item.id} href={item.link} sx={styles.Link}>
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
        </Carousel>
      </Box>
      <Link href={"labs"} sx={{ textDecoration: "none" }}>
        <Button
          sx={styles.NotebooksBtn}
          variant="secondary"
          aria-label="View all notebooks"
        >
          View all notebooks
        </Button>
      </Link>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-35px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
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
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 37px rgba(38, 78, 118, 0.15)",
    },
    ".footer-container": {},
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
  designation: {
    color: "#25A0FF",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
  Link: {
    textDecoration: "none",
  },
  NotebooksBtn: {
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    mb: 0,
    mt: 5,
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
};
