import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme/theme";
import Layout from "components/outside-layout";
import Banner from "sections/small-banner";
import Notebooks from "sections/notebooks";

export default function Labs() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Banner />
          <Notebooks />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
