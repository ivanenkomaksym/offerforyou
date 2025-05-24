/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const packages = {
  monthly: [
    {
      id: 1,
      header: 'Standard',
      name: 'CV + LinkedIn + консультація по резюме або лінкедину (на вибір)',
      description: 'Для тих, хто хоче збільшити кількість відгуків та отримати більше оферів',
      buttonText: 'Замовити',
      priceWithUnit: '$130',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Кар\'єрна консультація. Формування мети пошуку та адаптація досвіду під неї',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Оновлення резюме відповідно до вимог ринку та ATS-систем",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Повне оформлення профілю (шапка, заголовок, саммері, досвід, навички, ключові слова)',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: `Зустріч з лайфкоучем`,
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      header: 'Medium',
      name: 'CV + LinkedIn + 2 консульатції',
      description: 'Для тих, хто хоче отримувати пропозиції від рекрутерів без активного пошуку',
      priceWithUnit: '$200',
      buttonText: 'Замовити',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: '2 консультації: по резюме та лінкедину. Формування мети пошуку та адаптація досвіду під неї',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Оновлення резюме відповідно до вимог ринку та ATS-систем",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Повне оформлення профілю (шапка, заголовок, саммері, досвід, навички, ключові слова)',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: `Зустріч з лайфкоучем`,
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Full',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Супровід до оферу',
      description: 'Для тих, хто хоче комплексний підхід та підтримку на кожному етапі',
      priceWithUnit: '$1200',
      buttonText: 'Замовити',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: '4 консультації (формування стратегії, підготовка до співбесід, нетворкінг)',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Оновлення резюме відповідно до вимог ринку та ATS-систем",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Повне оформлення профілю (шапка, заголовок, саммері, досвід, навички, ключові слова)",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Щотижневий підбір вакансій під ваш досвід',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: `Зустріч з лайфкоучем`,
          isAvailable: true,
        },
        {
          id: 6,
          icon: <IoIosCheckmarkCircle />,
          text: `Зустріч з технічним експертом`,
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: 'CV + консультація + стратегія пошуку роботи',
      description: 'фівфів',
      buttonText: 'Start free trail',
      priceWithUnit: '$100',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: 'eCommerce Store ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Business king',
      description: 'For Enterprise business',
      priceWithUnit: '$25',
      buttonText: 'Замовити',
      anotherOption: 'Or Start 10 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'eCommerce Store',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Suggested',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Pro Master',
      description: 'For pro level developers',
      priceWithUnit: '$39',
      buttonText: 'Замовити',
      anotherOption: 'Or Start 10 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'eCommerce Store',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder ',
          isAvailable: true,
        },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { monthly, annual } = packages;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === 'annual') {
      setState({
        ...state,
        active: 'annual',
        pricingPlan: annual,
      });
    } else {
      setState({
        ...state,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing' }}>
      <Container>
        <SectionHeader
          slogan="Тарифи"
          title="Обери свій тарифний план"
        />
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box
                sx={styles.pricingItem}
                key={`${state.active}-card--key${packageData.id}`}
              >
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
