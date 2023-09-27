<template>
  <HomeSection
    :headlineText="hero.headlineText"
    :descriptionText="hero.descriptionText"
    :ctaHero="ctaHero"
    :imageSourcePath="hero.featureImage"
    :imageAlt="hero.featureImageAlt"
    width="300px"
      height="100%"
      margin="0px"
      padding="0px"
  />
  <BrandingSection 
    :hatText="branding.hat"
    :headlineText="branding.headline"
    :descriptionText="branding.description"
    :brandingIconList="brandingIconList"
    :featureGallery="BrandingGallery"
    :cta="brandingCta"
  />
  <TechnologySection 
      :sectionTitle="technology.hatText"
      :sectionText="technology.description"
      :logos="technology.technologyGallery"
  />
  <ProjectsSection
      :hatText="projects.hat"
      :headlineText="projects.headline"
      :projects="projectsCards"
  />
  <div class="spacer"></div>
  
</template>

<script>

import axios from "axios";

import HomeSection from './../sections/HeroSection.vue';
import TechnologySection from './../sections/TechnologySection.vue';
import BrandingSection from './../sections/BrandingSection.vue';
import ProjectsSection from './../sections/ProjectsSection';

export default {
  name: 'CustomersView',
  components: {
    HomeSection,
    TechnologySection,
    BrandingSection,
    ProjectsSection,
  },
  data() {
    return {
      URL: 'http://3.136.127.214',

      projectsCards: [], 
      projects:{
        headline: "",
        hat: "",
      },
      ctaHero: [],
      hero: {
        headlineText: "",
        descriptionText: "",
        featureImage: "",
        featureImageAlt: "",
      },
      technology: {
        hatText: "",
        description: "",
        technologyGallery: [],
      },
      brandingCta: [],
      BrandingGallery:[],
      brandingIconList: [],
      branding: {
        hatText: "",
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
        const customerId = this.$route.params.id;

        const response = await axios.get(this.URL + `/customers/${customerId}`);
        const responseData = response.data;

        if (Array.isArray(responseData.projects)) {
          this.projectsCards = responseData.projects.map((card) => ({
            logoUrl: card.Client_logo.url,
            id: card.id,
            headlineText: card.Card_Title,
            descriptionText: card.Card_Description,
            moreLink: '/projects/' + card.id,
            moreText: 'More ─',
          }));
        } else {
          console.error("responseData.clients.data não é uma array.");
        }

        this.projects = {
          hat: responseData.Page_Projects_Hat,
          headline: responseData.Page_Projects_Title,
        }

        this.hero = {
          headlineText: responseData.Headline,
          descriptionText: responseData.Description,
          featureImage: responseData.Client_logo.url,
         // featureImageAlt: responseData.Client_logo.data.attributes.name,
        };

        this.ctaHero = responseData.Client_hero_cta.map((item) => ({
          Label: item.Label,
          Link: item.Link, 
          Style: item.Style,
        }));

        this.technology = {
          hatText: responseData.Technologies_Title,
          description: responseData.Technologies_Description,
          technologyGallery: responseData.Technologies_Gallery.map((galleryItem) => ({
            url: galleryItem.url,
            label: galleryItem.alternativeText
          })),
        };

        this.branding = {
          hatText: responseData.Client_resume_hat,
          headline: responseData.Client_resume_title,
          description: responseData.Client_resume_description,
          iconList: responseData.Client_points.map((point) => point.Addition_point_text),
        };

        this.BrandingGallery = responseData.Client_resume_gallery.map((item) => ({
          url: item.url,
        }));

        if (Array.isArray(responseData.Client_points)) {
          this.brandingIconList = responseData.Client_points.map((item) => ({
            iconUrl: item.icon.url,
            iconTitle: item.Addition_point_text
          }));
        } else {
          console.error("responseData.clients.data não é uma array.");
        }

        if (Array.isArray(responseData.Client_resume_cta) && responseData.Client_resume_cta.length > 0) {
          this.brandingCta = responseData.Client_resume_cta.map((item) => ({
            Label: item.Label,
            Link: item.Link, 
            Style: item.Style,
          }));
        } else {
          this.brandingCta = [
            {
              Label: responseData.Client_resume_cta.Label,
              Link: responseData.Client_resume_cta.Link, 
              Style: responseData.Client_resume_cta.Style,
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
<style scoped>
.responsive-img {
    max-width: 300px !important;
    max-height: 100% !important;
    margin-bottom: 0 !important;
}
.cta-icon img {
    width: 34px;
}

@media (max-width: 767px) {
  .spacer{
    margin-top: 200px;
  }
}

</style>

