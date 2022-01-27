/** @jsxImportSource theme-ui */
import { Heading, Text } from "theme-ui";

/* 
This is the content of the banner written with react.js components. You can add styled HTML as you like.
*/

export default function BannerContent() {
  return (
    <>
      <Heading as="h1" variant="heroPrimary">
        Causal ML Book
      </Heading>
      <span
        sx={{
          height: "4px",
          width: ["40vw", "40vw", "40vw", "30vw", "20vw"],
          backgroundColor: "secondary",
          borderRadius: "2px",
          mb: 4,
        }}
      ></span>
      <Text as="p" variant="heroSecondary">
        An introduction to the emerging fusion of modern statistical (machine
        learning) inference and
        <Text variant="heroSecondary" color="secondary">
          {" "}
          causal inference methods.
        </Text>
        <br />
        <br />
        The book introduces ideas from classical structural equation models
        (SEMs) and their modern AI equivalent, directed acyclical graphs (DAGs)
        and structural causal models (SCMs)
      </Text>
    </>
  );
}
