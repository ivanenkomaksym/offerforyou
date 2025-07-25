import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaLinkedin } from 'react-icons/fa';

const data = [
  {
    id: 1,
    imgSrc: '/assets/team/taisia.png',
    altText: 'Таісія',
    title: 'Таісія',
    designation: 'HR-лідер і кар\'єрний консультант із глибокою експертизою в управлінні талантами, стратегічному рекрутингу та розвитку організацій',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/taisiia-ivanenko-5a3256214/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 2,
    imgSrc: '/assets/team/anastasia.png',
    altText: 'Анастасія',
    title: 'Анастасія',
    designation: 'HR-лідер із багаторічним досвідом у міжнародному наймі, управлінні талантами та оптимізації HR-процесів',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/anastasiaandrushchenko/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 3,
    imgSrc: '/assets/team/maksym.png',
    altText: 'Максим',
    title: 'Максим',
    designation: 'Технічний експерт і лідер із 12-річним досвідом у розробці дистрибутивних систем, мікросервісів і хмарних рішень',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/ivanenkomaksym/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 4,
    imgSrc: '/assets/team/viktoriia.png',
    altText: 'Вікторія',
    title: 'Вікторія',
    designation: 'Психолог, лайф-коуч, експерт із самореалізації, розвитку впевненості та подолання внутрішніх бар’єрів',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/viktoriiapaderina/',
        icon: <FaLinkedin />,
      }
    ],
  }
];

export default function Team() {
  return (
    <section id="team">
      <Container>
        <SectionHeader
          slogan="Наша команда"
          title="Найбільш кваліфіковані та талановиті люди"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
