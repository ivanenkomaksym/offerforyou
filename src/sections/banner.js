import { Container, Box, Heading, Text } from 'theme-ui';
import Image from 'next/image'

export default function Banner() {
  return (
    <Box as="header" sx={styles.banner} id="home">
      {/* Manually add background shapes */}
      <Box
        as="span"
        sx={{
          position: 'absolute',
          bottom: 6,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: `url('/assets/shape-left.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
          backgroundSize: '36%',
        }}
      />
      <Box
        as="span"
        sx={{
          position: 'absolute',
          bottom: '40px',
          right: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: `url('/assets/shape-right.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: '32%',
        }}
      />
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Кар'єра без кордонів
          </Heading>
          <Text as="p" variant="heroSecondary">
            Професійний супровід та підтримка на шляху до кар'єрних вершин
          </Text>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src='/assets/banner-thumb2.png' alt="banner" width={714} height={678} style={{ objectFit: 'contain' }} />
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url('/assets/shape-left.png')`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url('/assets/shape-right.png')`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
