<template>
  <HeroHome />
  <BrandingSection 
      hatText="Get to know us"
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
import BrandingSection from './../sections/BrandingSection.vue';
import CtaSection from './../sections/CtaSection.vue';

export default {
  name: 'ProjectsView',
  components: {
    HeroHome,
    TechnologySection,
    BrandingSection,
    CtaSection,
  },
}
</script> 