import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'An Giang Tourism',
  noindex = false,
}: SEOProps) => {
  const siteName = 'Du Lịch An Giang';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const siteDescription =
    description ||
    'Khám phá vẻ đẹp thiên nhiên, văn hóa đặc sắc và ẩm thực phong phú của An Giang - vùng đất Thất Sơn huyền bí.';
  const siteKeywords =
    keywords || 'du lịch An Giang, Thất Sơn, Châu Đốc, rừng tràm Trà Sư, miếu Bà Chúa Xứ, ẩm thực An Giang';
  const siteImage = image || '/images/Logo_tỉnh_An_Giang.png';
  const siteUrl = url || 'https://angiangtourism.netlify.app';

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={siteDescription} />
      <meta name='keywords' content={siteKeywords} />
      <meta name='author' content={author} />
      {noindex && <meta name='robots' content='noindex, nofollow' />}

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={siteDescription} />
      <meta property='og:image' content={siteImage} />
      <meta property='og:url' content={siteUrl} />
      <meta property='og:site_name' content={siteName} />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={siteDescription} />
      <meta name='twitter:image' content={siteImage} />

      {/* Canonical URL */}
      <link rel='canonical' href={siteUrl} />

      {/* Favicon and Icons (Fallback in case index.html is missing some) */}
      <link rel='icon' href='/images/Logo_tỉnh_An_Giang.png' />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteName,
          "url": siteUrl,
          "description": siteDescription,
          "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/images/Logo_tỉnh_An_Giang.png`
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
