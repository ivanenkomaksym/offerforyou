import { Container, Heading, Text, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import Image from 'next/image'

const data = [
  {
    id: 1,
    name: 'Marina Sitnikova',
    designation: 'AQA Engineer | General QA | Manual QA',
    review: 5,
    avatar: '/assets/testimonial/Marina_Sitnikova.jpg',
    description: "I was very happy to work with Anastasia and her team. My search was difficult and quite long, but the result is there. I want to express my gratitude to her and her team for their support, motivation, desire to always help, listen and give valuable recommendations that really help in the search."
  },
  {
    id: 2,
    name: 'Michael Martsynovskyi',
    designation: 'Senior Flutter Developer & Tech Lead | Fintech',
    review: 5,
    avatar: '/assets/testimonial/Michael_Martsynovskyi.jpg',
    description: "Huge thanks to Anastasiia and her team for their exceptional career coaching and employment support! I had a fantastic experience working with them and found their support invaluable in unlocking my potential. Their professionalism and dedication truly stand out. Highly recommend!"
  },
  {
    id: 3,
    name: 'Anton Bukin',
    designation: 'Head of IT Sales | Sales Consulting | Head of Retention',
    review: 5,
    avatar: '/assets/testimonial/Anton_Bukin.jpg',
    description: "Вже давно стежу за результатами роботи Анастасії та неодноразово звертався до спеціалістів з питань розвитку кар’єри. Після ретельного вибору вирішив співпрацювати саме з Анастасією. Під час нашої роботи отримав якісний зворотний зв'язок, цікаві інсайти та рекомендації щодо позиціювання себе та своїх послуг на ринку."
  },
  {
    id: 4,
    name: 'Kateryna Diatchuk',
    designation: 'HR Generalist',
    review: 5,
    avatar: '/assets/testimonial/Kateryna_Diatchuk.jpg',
    description: "Завдяки допомозі Анастасії та. Таїсії дуже швидко вдалось отримати оффер. Дуже чітка та професійна комунікація, доречні зауваження щодо резюме та профілю, а саме головне - рекомендації, які спрацювали у моєму випадку. Дуже вдячна за допомогу!"
  },
  {
    id: 5,
    name: 'Yuliia Psurtseva',
    designation: 'QA Lead | Senior QA Engineer | Quality Assurance Specialist',
    review: 5,
    avatar: '/assets/testimonial/Yuliia_Psurtseva.jpg',
    description: "Hi. It was a pleasure to cooperate with Anastasiia. Her mentoring skills are excellent. She provided a lot of information to me about how to better design a LinkedIn profile, how to work on improving your visibility for your network, and how to work with the network in general. Our work was clear and structured, and it went according to the planned schedule. As a result, I found a job in a short time during the holidays. I recommend working with Anastasia"
  },
  {
    id: 6,
    name: 'Iryna Myroniuk',
    designation: 'Customer Success Manager | Operations Manager',
    review: 5,
    avatar: '/assets/testimonial/Iryna_Myroniuk.jpg',
    description: "Я мала можливість отримати консультацію від Анастасії, і це стало одним з найцінніших етапів у моєму професійному розвитку. Її глибокі знання ринку праці, індивідуальний підхід та вміння ставити правильні запитання допомогли мені чітко визначити мої сильні сторони, знайти нові можливості та створити план дій для подальшого професійного росту. Анастасія – не просто кар'єрна радниця, а справжня наставниця, яка вміє надихнути на впевнені кроки вперед."
  },
  {
    id: 7,
    name: 'Anna Pshenychna',
    designation: 'Project Manager | Administrator | Event Coordinator',
    review: 5,
    avatar: '/assets/testimonial/Anna_Pshenychna.jpg',
    description: "Рекомендую Anastasiia, як професійного кар'єрного консультанта. Чудово веде супровід клієнтів. Завжди підлаштовується під потреби та адаптується під запит клієнта. має чіткий структурований план роботи, при цьому завжди вчасно реагує та підлаштовується під поточні зміни у ході роботи."
  }
];

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

export default function TestimonialCard() {
  return (
    <Box as='section' id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan="Відгуки" title="Задовольняємо потреби клієнтів" />
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
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" width={100} height={100}/>
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      }
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
