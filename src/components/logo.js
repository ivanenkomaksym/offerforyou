import Image from 'next/image';
import { Link } from 'components/link';
import { Heading, Box, Text } from 'theme-ui';

export default function Logo({ src, ...rest }) {
  return (
    <Heading sx={styles.container} {...rest}>
      {/* Logo with text */}
      {/* Assuming src is the path to the logo image */}
      {/* Adjust the path as necessary based on your project structure */}
      {/* If you want to use a different image, replace 'src' with the appropriate image path */}
      <Link
        path="/"
        sx={{
          variant: 'links.logo',
          display: 'flex',
          cursor: 'pointer',
          mr: -15,
        }}
        {...rest}
      >
        <Image src={src} alt="startup landing logo" width={75} height={75}/>
      </Link>
      <div>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center items horizontally if text is centered
          justifyContent: 'center', // Center items vertically
        }}>
          <Heading as="h2" sx={styles.repeatLogoText}>
            OFFER FOR YOU
          </Heading>
          <Text as="p" sx={styles.repeatLogoSubtitle}>
            CAREER CONSULTING
          </Text>
        </Box>
      </div>
    </Heading>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  // New style for the repeated text
  repeatLogoText: {
    fontFamily: 'heading', // Assuming you have a heading font family defined in your theme
    fontSize: [1, 2], // Adjust font size as needed for responsiveness (e.g., base, md, lg)
    fontWeight: 'bold', // Or '700'
    textAlign: 'center', // Or 'left'/'right' depending on where you place it
    lineHeight: 1.2, // Adjust line height if necessary
    color: 'black', // The desired black color

    // You might need to adjust letter spacing or text transform based on the exact image
    // letterSpacing: '0.1em',
    // textTransform: 'uppercase', // If the text should always be uppercase
  },
  repeatLogoSubtitle: {
    fontFamily: 'body', // Assuming a body font for 'CAREER CONSULTING'
    fontSize: [0, 0], // Smaller font size for the subtitle
    fontWeight: 'normal',
    textAlign: 'center',
    lineHeight: 1.2,
    color: 'black',
    // letterSpacing: '0.1em',
    // textTransform: 'uppercase',
  },
};
