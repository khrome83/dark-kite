<template>
  <div>
    <the-sidebar>
      <the-sidebar-logo slot="logo" to="/app" />
      <div slot="primary">
        <the-sidebar-link to="/app/projects">
          <ProjectIcon slot="icon" />
          Projects
        </the-sidebar-link>
        <the-sidebar-link to="/app/features">
          <FeatureIcon slot="icon" />
          Features
        </the-sidebar-link>
        <the-sidebar-link to="/app/configurations">
          <ConfigurationIcon slot="icon" />
          Configurations
        </the-sidebar-link>
      </div>
      <div slot="secondary">
        <the-sidebar-link to="/app/help">
          <HelpIcon slot="icon" />
          Help
        </the-sidebar-link>
        <the-sidebar-link to="/app/billing">
          <BillingIcon slot="icon" />
          Billing
        </the-sidebar-link>
        <the-sidebar-link to="/app/organization">
          <OrganizationIcon slot="icon" />
          Organization
        </the-sidebar-link>
        <the-sidebar-link to="/app/profile">
          <ProfileIcon slot="icon" />
          Profile
        </the-sidebar-link>
      </div>
    </the-sidebar>
    <the-app-section>
      <nuxt/>
    </the-app-section>
    <the-over-panel />
  </div>
</template>

<script>
import TheSidebar from '~/components/TheSidebar';
import TheSidebarLink from '~/components/TheSidebarLink';
import TheSidebarLogo from '~/components/TheSidebarLogo';
import TheAppSection from '~/components/TheAppSection';
import TheOverPanel from '~/components/TheOverPanel';
import BillingIcon from '~/static/billing.svg';
import ConfigurationIcon from '~/static/configuration.svg';
import FeatureIcon from '~/static/feature.svg';
import HelpIcon from '~/static/help.svg';
import OrganizationIcon from '~/static/organization.svg';
import ProfileIcon from '~/static/profile.svg';
import ProjectIcon from '~/static/project.svg';

export default {
  components: {
    TheSidebar,
    TheSidebarLink,
    TheSidebarLogo,
    TheAppSection,
    TheOverPanel,
    BillingIcon,
    ConfigurationIcon,
    FeatureIcon,
    HelpIcon,
    OrganizationIcon,
    ProfileIcon,
    ProjectIcon,
  },
};
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  overflow: hidden;
}

h1, h2, h3, h4 {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
  text-align: left;
}

h2 {
  font-size: 2.25rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

h3 {
  font-size: 1.75rem;
}

h4 {
  font-size: 1rem;
  color: #526488;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  display: block;
  color: #000;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 500;
}

input,
textarea {
  border: 1px solid #d6d5d5;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  display: block;
  width: 100%;
}

textarea {
  min-height: 9rem;
  margin-bottom: 2rem;
}

fieldset {
  border-width: 0;
  margin: 0;
  padding: 0;
}
</style>

