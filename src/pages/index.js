import Layout from 'components/layout';
import SEO from 'components/seo';
import { StickyProvider } from 'contexts/app/app.provider';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import Package from 'sections/package';
import TeamSection from 'sections/team-section';
import TestimonialCard from 'sections/testimonial';
import WorkFlow from 'sections/workflow';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Offer For You Career Consulting" />
          <Banner />
          <KeyFeature />
          <WorkFlow />
          <Package />
          <TeamSection />
          <TestimonialCard />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
