<template>
  <HomeSection />
  <TechnologySection 
      sectionTitle="Technologies"
      sectionText="Over 10 years of experience in system developing using .NET, ASP.NET, MVC versions 4/5, C #, Azure platform, WEBSERVICE"
  />
  <BrandingSection 
      hatText="Get to know us"
      headlineText="We are adding extra value for your business"
      descriptionText="With bootstrap, Material UI, React, responsive mega menu and various layouts including incredible blog themes, DevNet offers you unfathomable accessibility to have beautiful and customer-oriented websites."
      pointText1="Agile and flexible development"
      pointText2="The best sites and satisfaction guaranteed"
      ctaButtonText="Get In Touch"
  />
  <ServicesSection 
      hatText="Services"
      headlineText="Powerful Technologies to Turn Ideas into Reality"
      descriptionText="Our team specializes in a wide range of cutting-edge technologies including Bootstrap, Material UI and React. We combine these powerful tools to create innovative digital solutions that delight our clients and drive exceptional results. Regardless of the challenge, we are ready to turn your ideas into reality."
      card1hat="10+"
      card1headline="Lorem ipsum dolor sit amet"
      card1description="Aut doloribus maxime est fuga molestiae At eaque debitis et repellat voluptatum"
      card2hat="10+"
      card2headline="Lorem ipsum dolor sit amet "
      card2description="Aut doloribus maxime est fuga molestiae At eaque debitis et repellat voluptatum"
      card3hat="10+"
      card3headline="Lorem ipsum dolor sit amet"
      card3description="Aut doloribus maxime est fuga molestiae At eaque debitis et repellat voluptatum"
      card4hat="12+"
      card4headline="Lorem ipsum dolor sit amet"
      card4description="Aut doloribus maxime est fuga molestiae At eaque debitis et repellat voluptatum"
    />
  <CustomersSection 
      hatText="Our customers"
      headlineText="Lots of satisfied customers"
      :customers = "customers"
  />
  <ProjectsSection
      hatText="What’s happening"
      headlineText="Our latest projects"
      buttonText="Get In Touch"
      :projects = "projects"
  />

  <CtaSection
      hatText="Need a successful projects?"
      headlineText="Helping you overcome your any kind of technology challenges"
      buttonText="Estimate Projects"
      ctaButtonUrl="#"      
  />
  <TestimonialSection 
      hatText="What’s happening"
      headlineText="Our latest projects"
      :testimonial = "testimonial"
  />

</template>

<script>

import HomeSection from './../sections/HeroSection.vue';
import TechnologySection from './../sections/TechnologySection.vue';
import BrandingSection from './../sections/BrandingSection.vue';
import ServicesSection from './../sections/SevicesSection';
import CustomersSection from './../sections/CustomersSection.vue';
import ProjectsSection from './../sections/ProjectsSection';
import CtaSection from './../sections/CtaSection.vue';
import TestimonialSection from './../sections/TestimonialSection.vue'

export default {
  name: 'HomeView',
  components: {
    HomeSection,
    TechnologySection,
    BrandingSection,
    ServicesSection,
    CustomersSection,
    ProjectsSection,
    CtaSection,
    TestimonialSection
  },
  data() {
    return {
      socialTitle: "Connect with Us",
      socialIcons: 
      [
        { 
          className: "icon icon-twitter", 
          link: "https://twitter.com/" 
        },
        { 
          lassName: "icon icon-facebook", 
          link: "https://facebook.com/" 
        },
        { 
          className: "icon icon-instagram", 
          link: "https://instagram.com/" 
        },
      ],
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
      projects: [
      {
          id: 1,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"),
          logoAlt: "Project 1",
          hatText: "Logo",
          headlineText: "Project 1",
          descriptionText: "Short description of Project 1.",
          moreLink: "#",
          moreText: "More",
        }, 
        {
          id: 2,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"), 
          logoAlt: "Project 1",
          hatText: "Logo",
          headlineText: "Project 1",
          descriptionText: "Short description of Project 1.",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 3,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"), 
          logoAlt: "Project 1",
          hatText: "Logo",
          headlineText: "Project 1",
          descriptionText: "Short description of Project 1.",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 4,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"),
          logoAlt: "Project 1",
          hatText: "Logo",
          headlineText: "Project 1",
          descriptionText: "Short description of Project 1.",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 4,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"), 
          logoAlt: "Project 1",
          hatText: "Logo",
          headlineText: "Project 1",
          descriptionText: "Short description of Project 1.",
          moreLink: "#",
          moreText: "More",
        },
      ],
      testimonial: [
      {
          id: 1,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"), 
          logoAlt: "Project 1",
          hatText: "Logo",
          headlineText: "Project 1",
          descriptionText: "Short description of Project 1.",
          testimonialName: "Jonathon Rees",
          testimonialOffice:"CEO at Coffee"
        }, 
        {
          id: 2,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"), 
          logoAlt: "Project 1",
          hatText: "Logo",
          headlineText: "Project 1",
          descriptionText: "Short description of Project 1.",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 3,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"), 
          logoAlt: "Project 1",
          hatText: "Logo",
          headlineText: "Project 1",
          descriptionText: "Short description of Project 1.",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 4,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"), 
          logoAlt: "Project 1",
          hatText: "Logo",
          headlineText: "Project 1",
          descriptionText: "Short description of Project 1.",
          moreLink: "#",
          moreText: "More",
        },
        {
          id: 4,
          logoSrc: require("@/assets/customers-logo/ucari-logo.png"), 
          logoAlt: "Project 1",
          hatText: "Logo",
          headlineText: "Project 1",
          descriptionText: "Short description of Project 1.",
          moreLink: "#",
          moreText: "More",
        },
      ]
    };
  },
}
</script>