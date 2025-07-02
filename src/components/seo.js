import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO({
  description = '',
  author = 'Offer For You, Inc',
  meta = [],
  title = '',
  keywords = [],
  ogImage = '',
  twitterCard = 'summary_large_image',
}) {
  const router = useRouter();
  const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://offerforyou.net"; // Fallback to hardcoded if env var is missing
  const currentUrl = publicSiteUrl + router.asPath;

  const defaultTitle = 'Кар\'єрний супровід, оновлення резюме та LinkedIn, підготовка до співбесід';
  const defaultDescription = 'Оновлення резюме відповідно до вимог ринку. Формування мети пошуку та адаптація досвіду під неї. Повне оформлення LinkedIn профілю. Консультації та підготовка до співбесід. Щотижневий підбір вакансій відповідно до вашого досвіду, підготовка до співбесід та психологічна підтримка. Перелік курсів, книжок та ресурсів для навчання.';
  const defaultKeywords = ['підготовка до співбесід', 'підбір вакансій', 'оновлення резюме', 'перевірка резюме', 'оновлення LinkedIn', 'оновлення лінкедін', 'Україна'];
  const defaultOgImage = `${publicSiteUrl}/assets/offer_for_you_logo.png`; // A default social sharing image

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords.length > 0 ? keywords : defaultKeywords;
  const finalOgImage = ogImage || defaultOgImage;

  const metaData = [
    // Basic SEO Meta Tags
    {
      name: `description`,
      content: finalDescription,
    },
    {
      name: `keywords`, // Keywords meta tag (less impactful now, but still used by some engines)
      content: finalKeywords.join(', '),
    },
    {
      name: `author`,
      content: author,
    },

    // Open Graph (OG) Meta Tags - for Facebook, LinkedIn, etc.
    {
      property: `og:title`,
      content: finalTitle,
    },
    {
      property: `og:description`,
      content: finalDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:url`,
      content: currentUrl, // Crucial for social sharing consistency
    },
    {
      property: `og:image`,
      content: finalOgImage, // Your social sharing image
    },
    {
      property: `og:image:width`, // Optional, but good for precise display
      content: `290`,
    },
    {
      property: `og:image:height`, // Optional
      content: `200`,
    },
    {
      name: `twitter:card`,
      content: twitterCard,
    },
    {
      name: `twitter:creator`,
      content: author, // Or a specific Twitter handle
    },
    {
      name: `twitter:title`,
      content: finalTitle,
    },
    {
      name: `twitter:description`,
      content: finalDescription,
    },
    {
      name: `twitter:image`,
      content: finalOgImage,
    },
  ]
  .filter(tag => tag.content)
  .concat(meta);
  return (
    <Head>
      <title>{finalTitle}</title>
      <link rel="canonical" href={currentUrl} />
      {metaData.map((tag, i) => {
        const key = tag.name || tag.property;
        return <meta key={key || i} {...tag} />;
      })}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `uk`,
  meta: [],
};
