export default function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thepulchialab.com/#business",
    name: "The Pulchia Lab",
    description:
      "Professional photography studio specializing in maternity, engagement, bridal, and family photography",
    url: "https://thepulchialab.com",
    telephone: "+2349030406284",
    email: "hello@thepulchialab.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nigeria",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.0820", // Update with actual coordinates
      longitude: "8.6753",
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
    priceRange: "₦50,000-₦100,000",
    serviceArea: {
      "@type": "Country",
      name: "Nigeria",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Photography Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mini Photography Session",
            description: "30 minute session with 15+ edited photos",
          },
          price: "50000",
          priceCurrency: "NGN",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard Photography Session",
            description: "1 hour session with 30+ edited photos",
          },
          price: "85000",
          priceCurrency: "NGN",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Photography Session",
            description: "2 hour session with 50+ edited photos",
          },
          price: "100000",
          priceCurrency: "NGN",
        },
      ],
    },
    founder: {
      "@type": "Person",
      name: "Pulchia",
      jobTitle: "Professional Photographer",
    },
    sameAs: [
      "https://instagram.com/thepulchialab", // Update with actual social media
      "https://facebook.com/thepulchialab",
      "https://twitter.com/thepulchialab",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thepulchialab.com/#website",
    url: "https://thepulchialab.com",
    name: "The Pulchia Lab",
    description: "Professional Photography Studio",
    publisher: {
      "@type": "Organization",
      name: "The Pulchia Lab",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://thepulchialab.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
