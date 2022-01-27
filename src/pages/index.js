import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme/theme";
import Layout from "components/layout";
import SEO from "components/seo";
import Banner from "sections/banner";
import Book from "sections/book";
import Citation from "sections/citation";
import Labs from "sections/labs";
import DoubleMl from "sections/doubleml";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="CausalML Book" />
          <Banner />
          <Book />
          <Citation />
          <Labs />
          <DoubleMl />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
