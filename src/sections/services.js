import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';

const data = [
  {
    id: 1,
    imgSrc: '/assets/key-feature/performance.svg',
    altText: 'Оновлення резюме',
    title: 'Оновлення резюме',
    text:
      'Оновлення резюме відповідно до вимог ринку та ATS-систем',
  },
  {
    id: 2,
    imgSrc: '/assets/key-feature/partnership.svg',
    altText: 'Кар\'єрна консультація',
    title: 'Кар\'єрна консультація',
    text:
      'Формування мети пошуку та адаптація досвіду під неї',
  },
  {
    id: 3,
    imgSrc: '/assets/key-feature/subscription.svg',
    altText: 'LinkedIn',
    title: 'LinkedIn',
    text:
      'Повне оформлення профілю (шапка, заголовок, саммарі, досвід, навички, ключові слова)',
  },
  {
    id: 4,
    imgSrc: '/assets/key-feature/support.svg',
    altText: 'Кар’єрний план',
    title: 'Кар’єрний план',
    text:
      'Перелік курсів, книжок та ресурсів для навчання',
  },
];

export default function Services() {
  return (
    <Box as='section' sx={{ variant: 'section.keyFeature' }} id="services">
      <Container>
        <SectionHeader
          title="Наші послуги"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
