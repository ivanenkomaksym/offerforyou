import Layout from 'components/layout';
import SEO from 'components/seo';
import { StickyProvider } from 'contexts/app/app.provider';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Pricing from 'sections/pricing';
import Team from 'sections/team';
import Testimonial from 'sections/testimonial';
import WorkFlow from 'sections/workflow';
import theme from 'theme';
import { ThemeUIProvider } from 'theme-ui';

export default function IndexPage() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Offer For You Career Consulting" />
          <Banner />
          <Services />
          <WorkFlow />
          <Pricing />
          <Team />
          <Testimonial />
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}
