<template>
  <HeroHome />
  <BrandingShowcase 
      hatText="lorem imput"
      headlineText="We are adding extra value for your business"
      descriptionText="With bootstrap, Material UI, React, responsive mega menu and various layouts including incredible blog themes, DevNet offers you unfathomable accessibility to have beautiful and customer-oriented websites."
      pointText1="Agile and flexible development"
      pointText2="The best sites and satisfaction guaranteed"
      ctaButtonText="Get In Touch"
  />
  <TechnologySection 
      sectionTitle="Technologies"
      sectionText="Over 10 years of experience in system developing using .NET, ASP.NET, MVC versions 4/5, C #, Azure platform, WEBSERVICE"
  />
  <CustomersSection 
      hatText="Our customers"
      headlineText="Lots of satisfied customers"
      :customers="customers"
  />
  <CtaSection
      hatText="Need a successful projects?"
      headlineText="Helping you overcome your any kind of technology challenges"
      buttonText="Estimate Projects"
      ctaButtonUrl="#"      
  />
  
</template>

<script>

import HeroHome from './../sections/HeroSection.vue';
import TechnologySection from './../sections/TechnologySection.vue';
import BrandingShowcase from './../sections/BrandingSection.vue';
import CustomersSection from './../sections/CustomersSection.vue';
import CtaSection from './../sections/CtaSection.vue';

export default {
  name: 'CustomersView',
  components: {
    HeroHome,
    TechnologySection,
    BrandingShowcase,
    CustomersSection,
    CtaSection,
  },
  data() {
    return {
      customers: 
      [
        {
          id: 1,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"),
          logoAlt: "Customer 1",
          hatText: "1",
          headlineText: "Product development",
          descriptionText: "A design approach is a general philosophy that may not include a guide for specific methods",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 2,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"),
          logoAlt: "Website Development",
          hatText: "2",
          headlineText: "Website Development",
          descriptionText: "A design approach is a general philosophy that may not include a guide for specific methods",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 3,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"),
          logoAlt: "Mobile Development",
          hatText: "3",
          headlineText: "Mobile Development",
          descriptionText: "A design approach is a general philosophy that may not include a guide for specific methods",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 4,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"),
          logoAlt: "Marketing & Reporting",
          hatText: "4",
          headlineText: "Marketing & Reporting",
          descriptionText: "A design approach is a general philosophy that may not include a guide for specific methods",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 5,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"),
          logoAlt: "Customer 1",
          hatText: "5",
          headlineText: "Digital marketing",
          descriptionText: "A design approach is a general philosophy that may not include a guide for specific methods",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 6,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"),
          logoAlt: "Customer 1",
          hatText: "6",
          headlineText: "Content management",
          descriptionText: "A design approach is a general philosophy that may not include a guide for specific methods",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 7,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"),
          logoAlt: "Customer 1",
          hatText: "7",
          headlineText: "Data analysis",
          descriptionText: "A design approach is a general philosophy that may not include a guide for specific methods",
          moreLink: "#",
          moreText: "More",
        },
      ],
    }
  }
}
</script> 