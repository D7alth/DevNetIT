<template>
  <HomeSection 
    :headlineText="heroHeadlineText"
    :descriptionText="heroDescriptionText"
    button1Text="Get in touch"
    button2Text="Discover More"
    :imageSourcePath="heroMediaUrl"
  />
  <TechnologySection 
      :sectionTitle="technologyHatText"
      :sectionText="technologyDescription"
      :logos="technologyGallery"
  />
  <BrandingSection 
      :hatText="brandingSectionHat"
      :headlineText="brandingSectionHeadline"
      :descriptionText="brandingSectionDescription"
      :pointText1="IconList[0]"
      :pointText2="IconList[1]"
      :featureImage="brandingSectionFeaturedImage"
      ctaButtonText="Get In Touch"
  />
  <ServicesSection 
  :hatText="servicesHatText"
  :headlineText="servicesHeadlineText"
  :descriptionText="servicesDescriptionText"
  :servicesBox="servicesBox"
  />

  <CustomersSection 
      :hatText="customersDataHat"
      :headlineText="customersDataHeadline"
      :customerData="cards"
  />
  <ProjectsSection
      :hatText="projectsDataHat"
      :headlineText="projectsDataHeadline"
      buttonText="Get In Touch"
      :projects = "projects"
  />

  <CtaSection
      :hatText="ctaSectionHeadlineText"
      :headlineText="ctaSectionHat"
      :buttonText="ctaSectionLabel"
      :ctaButtonUrl="ctaSectionUrl"      
  />
  <TestimonialSection 
      :hatText="testimonialDataHat"
      :headlineText="testimonialDataHeadline"
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
      customersDataHeadline: "",
      customersDataHat: "",
      projects: [],
      projectsDataHeadline: "",
      projectsDataHat: "",
      testimonial: [],
      testimonialDataHeadline: "",
      testimonialDataHat: "",
      heroHeadlineText: "",
      heroDescriptionText: "",
      heroMediaUrl: "",
      heroAltMedia: "",
      servicesBox: [],
      servicesHatText: "",
      servicesHeadlineText: "",
      servicesDescriptionText: "",
      technologyHatText: "",
      technologyDescription: "",
      technologyGallery: [],
      ctaSectionHeadlineText:"",
      ctaSectionHat:"",
      ctaSectionLabel:"",
      ctaSectionUrl: "",
      brandingSectionHeadline: "",
      brandingSectionDescription: "",
      brandingSectionFeaturedImage: "",
      IconList: [],

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
    this.getHero();
    this.getServices();
    this.getTechnologiesSection();
    this.getCtaSection();
    this.getBrandingSection();
  },
  methods: {
    getCustomers() {
      axios
      .get("http://192.168.0.157:1337/api/home?&populate[1]=Customers&populate[2]=Customers.Cards&populate[3]=Customers.Cards.Featured_image&populate[4]=Customers.Cards.Link")
      .then((response) => {
        const cardsData = response.data.data.attributes.Customers.Cards;
        const headlineText = response.data.data.attributes.Customers.Headline;
        const hatText = response.data.data.attributes.Customers.Subheadline;
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
        this.cards = formattedCards;
        this.customersDataHeadline = headlineText;
        this.customersDataHat = hatText;
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
        const headlineText = response.data.data.attributes.Projects.Headline;
        const hatText = response.data.data.attributes.Projects.Subheadline;

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
          this.projectsDataHeadline = headlineText;
          this.projectsDataHat = hatText;
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
        const headlineText = response.data.data.attributes.Testimonial.Headline;
        const hatText = response.data.data.attributes.Testimonial.Subheadline;

        if (testimonialData && testimonialData.Cards && Array.isArray(testimonialData.Cards)) {
          const formattedCards = testimonialData.Cards.map((card) => {
            return {
              id: card.id,
              descriptionText: card.Description,
              testimonialName : card.Testifies,
              testimonialOffice: card.Position
            };
          });
          this.testimonialDataHeadline = headlineText;
          this.testimonialDataHat = hatText;
          this.testimonial = formattedCards;
        } else {
          console.error("Erro ao obter os dados: Formato inválido dos dados recebidos.");
        }
      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
    },
    getHero() {
      axios
      .get("http://192.168.0.157:1337/api/home?&populate[1]=Hero&populate[2]=Hero.CTA&populate[3]=Hero.Media")
      .then((response) => {
        
        const headlineText = response.data.data.attributes.Hero.Headline;
        const descriptionText = response.data.data.attributes.Hero.Description;
        const mediaUrl = "http://192.168.0.157:1337" + response.data.data.attributes.Hero.Media.data.attributes.url;
        const altMedia = response.data.data.attributes.Hero.Media.data.attributes.name;

        this.heroHeadlineText = headlineText;
        this.heroDescriptionText = descriptionText;
        this.heroMediaUrl = mediaUrl;
        this.heroAltMedia = altMedia;

      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
    },
    getServices() {
    axios
      .get("http://192.168.0.157:1337/api/home?&populate[1]=Services&populate[2]=Services.Box")
      .then((response) => {
        const servicesBox = response.data.data.attributes.Services.Box;
        const headlineText = response.data.data.attributes.Services.Headline;
        const hatText = response.data.data.attributes.Services.Subheadline;
        const descriptionText = response.data.data.attributes.Services.Description;
  
        this.servicesHatText = hatText;
        this.servicesHeadlineText = headlineText;
        this.servicesDescriptionText = descriptionText;

        if (Array.isArray(servicesBox)) {
          this.servicesBox = servicesBox.map((box) => ({
            Subheadline: box.Subheadline,
            Headline: box.Headline,
            Description: box.Description,
            Style: box.Style, 
          }));
        } else {
          console.error("Erro ao obter os dados: Formato inválido dos dados recebidos.");
        }
      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
    },
    getTechnologiesSection() {
      axios
      .get("http://192.168.0.157:1337/api/home?&populate[1]=Technologies&populate[2]=Technologies.Gallery")
      .then((response) => {
        const technologyGallery = response.data.data.attributes.Technologies.Gallery.data;
        const headlineText = response.data.data.attributes.Technologies.Subheadline;
        const descriptionText = response.data.data.attributes.Technologies.Description;

        this.technologyHatText = headlineText;
        this.technologyDescription = descriptionText;

        if (Array.isArray(technologyGallery)) {
          this.technologyGallery = technologyGallery.map((galleryItem) => ({
            url: "http://192.168.0.157:1337" + galleryItem.attributes.url,
          }));
          console.log(this.technologyGallery);
        } else {
          console.error("Erro ao obter os dados: Formato inválido dos dados recebidos.");
        }
      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
    },
    getCtaSection() {
      axios
      .get("http://192.168.0.157:1337/api/home?&populate[1]=Sucessful_Projects&populate[2]=Sucessful_Projects.CTA")
      .then((response) => {
        
        const headlineText = response.data.data.attributes.Sucessful_Projects.Headline;
        const hat = response.data.data.attributes.Sucessful_Projects.Subheadline;
        const ctaLabel = response.data.data.attributes.Sucessful_Projects.CTA.Label;
        const ctaUrl = response.data.data.attributes.Sucessful_Projects.CTA.Url;

        this.ctaSectionHeadlineText = headlineText;
        this.ctaSectionHat = hat;
        this.ctaSectionLabel = ctaLabel;
        this.ctaSectionUrl = ctaUrl;

      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
    },
    getBrandingSection() {
      axios
      .get("http://192.168.0.157:1337/api/home?&populate[1]=Highlight&populate[2]=Highlight.Media&populate[3]=Highlight.Icon_list&populate[4]=Highlight.Icon_list.Icon")
      .then((response) => {
        
        const headlineText = response.data.data.attributes.Highlight.Headline;
        const description = response.data.data.attributes.Highlight.Description;
        const IconList = response.data.data.attributes.Highlight.Icon_list;
        const feturedImage = "http://192.168.0.157:1337" + response.data.data.attributes.Highlight.Media.data.attributes.url;

       

        if (Array.isArray(IconList)) {
          this.IconList = IconList.map((list) => list.Description);
        } else {
          console.error("Erro ao obter os dados: Formato inválido dos dados recebidos.");
        }

        this.brandingSectionHeadline = headlineText;
        this.brandingSectionDescription = description;
        this.brandingSectionFeaturedImage = feturedImage;


      })
      .catch((error) => {
        console.error("Erro ao obter os dados:", error);
      });
    },
  }, 
}
</script>

