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
      :customerData="cards"
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
import axios from "axios";

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
      cards: [],
      projects: [],
      testimonial: [],
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
    };
  },
  created(){
    this.getCustomers();
    this.getProjects();
    this.getTestimonial();
  },
  methods: {
    getCustomers() {
      axios
      .get("http://192.168.0.157:1337/api/home?&populate[1]=Customers&populate[2]=Customers.Cards&populate[3]=Customers.Cards.Featured_image&populate[4]=Customers.Cards.Link")
      .then((response) => {
        const cardsData = response.data.data.attributes.Customers.Cards;
        const formattedCards = cardsData.map((card) => {
          return {
            id: card.Identity,
            logoSrc: "http://192.168.0.157:1337" + card.Featured_image.data.attributes.url,
            logoAlt: "Project " + card.Featured_image.data.attributes.name,
            headlineText: card.Headline,
            descriptionText: card.Description,
            moreLink: "/projects/" + card.Identity,
            moreText: "More ─",
          };
        });
        console.log(cardsData);
        this.cards = formattedCards;
      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
    },
    getProjects() {
      axios
      .get("http://192.168.0.157:1337/api/home?&populate[1]=Projects&populate[2]=Projects.Cards&populate[3]=Projects.Cards.Featured_image&populate[4]=Projects.Cards.Link")
      .then((response) => {
        const projectsData = response.data.data.attributes.Projects;

        if (projectsData && projectsData.Cards && Array.isArray(projectsData.Cards)) {
          const formattedCards = projectsData.Cards.map((card) => {
            return {
              id: card.Identity,
              logoSrc: "http://192.168.0.157:1337" + card.Featured_image.data.attributes.url,
              logoAlt: "Project " + card.Featured_image.data.attributes.name,
              headlineText: card.Headline,
              descriptionText: card.Description,
              moreLink: "/projects/" + card.Identity,
              moreText: "More ─",
            };
          });

          this.projects = formattedCards;
        } else {
          console.error("Erro ao obter os dados: Formato inválido dos dados recebidos.");
        }
      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
    },
    getTestimonial() {
      axios
      .get("http://192.168.0.157:1337/api/home?&populate[1]=Testimonial&populate[2]=Testimonial.Cards&populate[3]=Testimonial.Cards.Icon")
      .then((response) => {
        const testimonialData = response.data.data.attributes.Testimonial;
        console.log(testimonialData);

        if (testimonialData && testimonialData.Cards && Array.isArray(testimonialData.Cards)) {
          const formattedCards = testimonialData.Cards.map((card) => {
            return {
              id: card.id,
              descriptionText: card.Description,
              testimonialName : card.Testifies,
              testimonialOffice: card.Position
            };
          });

          this.testimonial = formattedCards;
        } else {
          console.error("Erro ao obter os dados: Formato inválido dos dados recebidos.");
        }
      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
    },
  },
}
</script>