<template>
  <HomeSection
    :headlineText="hero.headlineText"
    :descriptionText="hero.descriptionText"
    :ctaHero="ctaHero"
    :imageSourcePath="hero.featureImage"
    :imageAlt="hero.featureImageAlt"
  />
  <TechnologySection 
      :sectionTitle="technology.hatText"
      :sectionText="technology.description"
      :logos="technology.technologyGallery"
  />
  <BrandingSection 
      :hatText="branding.hat"
      :headlineText="branding.headline"
      :descriptionText="branding.description"
      :brandingIconList="brandingIconList"
      :featureGallery="BrandingGallery"
      :cta="brandingCta"
  />
  <ServicesSection 
    :hatText="services.hatText"
    :headlineText="services.headlineText"
    :descriptionText="services.descriptionText"
    :servicesBox="services.servicesBox"
  />

  <CustomersSection 
      :hatText="clients.hat"
      :headlineText="clients.headline"
      :customerData="clientsCards"
  />
  <ProjectsSection
      :hatText="projects.hat"
      :headlineText="projects.headline"
      :cta="projectsCta"
      :projects="projectsCards"
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

export default {
  name: 'HomeView',
  components: {
    HomeSection,
    TechnologySection,
    BrandingSection,
    ServicesSection,
    CustomersSection,
    ProjectsSection,
  },

  data() {
    return {
      URL: 'http://3.136.127.214',
      clientsCards: [], 
      clients: {
        headline: "",
        hat: "",
      }, 
      projectsCards: [], 
      projectsCta: [],
      projects:{
        headline: "",
        hat: "",
      },
      ctaHero: [],
      hero: {
        headlineText: "",
        descriptionText: "",
        featureImage: "",
        featureImageAlt: ""
      },
      services: {
        hatText: "",
        headlineText: "",
        descriptionText: "",
        servicesBox: [],
      },
      technology: {
        hatText: "",
        description: "",
        technologyGallery: [],
      },
      brandingCta:[],
      BrandingGallery:[],
      brandingIconList: [],
      branding: {
        hat: "",
        headline: "",
        description: "",
      },
      ctaSection: {
        headlineText: "",
        hat: "",
        label: "",
        url: "",
      },
    };
    
  },
  created() {
    this.getAllData();
  },
  methods: {
    async getAllData() {
      try {
        const response = await axios.get(this.URL + '/start');
        const responseData = response.data;

        console.log(responseData.projects.data);

        if (Array.isArray(responseData.clients.data)) {
          this.clientsCards = responseData.clients.data.map((card) => ({
            logoUrl: card.attributes.Client_logo.url,
            id: card.id,
            hat: card.attributes.Client_resume_hat,
            headlineText: card.attributes.Headline,
            descriptionText: card.attributes.Description,
            moreLink: '/clients/' + card.id,
            moreText: 'More ─',
          }));
        } else {
          console.error("responseData.clients.data não é uma array.");
        }

        this.clients = {
          hat: responseData.Page_Customers_Hat,
          headline: responseData.Page_Customers_Title,
        }
        if (Array.isArray(responseData.projects.data)) {
          this.projectsCards = responseData.projects.data.map((card) => ({
            logoUrl: card.attributes.Client_logo.url,
            id: card.id,
            headlineText: card.attributes.Card_Title,
            descriptionText: card.attributes.Card_Description,
            moreLink: '/projects/' + card.id,
            moreText: 'More ─',
          }));
        } else {
          console.error("responseData.clients.data não é uma array.");
        }

        this.projects = {
          hat: responseData.Page_Projects_Hat,
          headline: responseData.Page_Projects_Title,
          ctaText: responseData.Page_CTA.Label,
          ctaLink: responseData.Page_CTA.Link,
          ctaStyle: responseData.Page_CTA.Style,
        }

        this.ctaHero = responseData.Hero_cta.map((item) => ({
          Label: item.Label,
          Link: item.Link, 
          Style: item.Style,
        }));

        this.hero = {
          headlineText: responseData.Page_Hero_Title,
          descriptionText: responseData.Page_Hero_Description,
          featureImage: responseData.Feature_Image.url,
          featureImageAlt: responseData.Feature_Image.name,
        };

        const servicesData = responseData.Services_Cards;
        this.services = {
          hatText: responseData.Page_Service_Hat,
          headlineText: responseData.Page_Service_Title,
          descriptionText: responseData.Page_Service_Description,
          servicesBox: servicesData.map((box) => ({
            Subheadline: box.Hat,
            Headline: box.Title,
            Description: box.Description,
            Style: box.Style,
          })),
        };

        this.technology = {
          hatText: responseData.Page_Technologies_Title,
          description: responseData.Page_Technologies_Description,
          technologyGallery: responseData.Page_Technologies_Gallery.data.map((galleryItem) => ({
            url: galleryItem.attributes.url,
          })),
        };

        if (Array.isArray(responseData.Branding_cta) && responseData.Branding_cta.length > 0) {
          this.brandingCta = responseData.Branding_cta.map((item) => ({
            Label: item.Label,
            Link: item.Link, 
            Style: item.Style,
          }));
        } else {
          this.brandingCta = [
            {
              Label: responseData.Branding_cta.Label,
              Link: responseData.Branding_cta.Link, 
              Style: responseData.Branding_cta.Style,
            }
          ];
        }

        this.branding = {
          hat: responseData.Page_Brading_Hat,
          headline: responseData.Page_Brading_Title,
          description: responseData.Page_Branding_Description,
        };

        if (Array.isArray(responseData.Points_Branding)) {
          this.brandingIconList = responseData.Points_Branding.map((item) => ({
            iconUrl: item.icon.url,
            iconTitle: item.Addition_point_text
          }));
        } else {
          console.error("responseData.clients.data não é uma array.");
        }
        console.log(this.brandingIconList);

        this.BrandingGallery = responseData.Branding_Gallery.data.map((item) => ({
          url: item.attributes.url,
        }));

        if(Array.isArray(responseData.Page_CTA)  && responseData.Page_CTA.length > 0){
          this.projectsCta = responseData.Page_CTA.map((item) => ({
            Label: item.Label,
            Link: item.Link, 
            Style: item.Style,
          }))
        } else {
          this.projectsCta = [
            {
              Label: responseData.Page_CTA.Label,
              Link:  responseData.Page_CTA.Link, 
              Style:  responseData.Page_CTA.Style,
            }
          ];
        }

      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }
  },
};
</script>