<template>
  <div>
    <side-navigation>
      <large-logo slot="logo" to="/app" />
      <div slot="primary">
        <side-navigation-link to="/app/projects">
          <ProjectIcon slot="icon" />
          Projects
        </side-navigation-link>
        <side-navigation-link to="/app/features">
          <FeatureIcon slot="icon" />
          Features
        </side-navigation-link>
        <side-navigation-link to="/app/configurations">
          <ConfigurationIcon slot="icon" />
          Configurations
        </side-navigation-link>
      </div>
      <div slot="secondary">
        <side-navigation-link to="/app/help">
          <HelpIcon slot="icon" />
          Help
        </side-navigation-link>
        <side-navigation-link to="/app/billing">
          <BillingIcon slot="icon" />
          Billing
        </side-navigation-link>
        <side-navigation-link to="/app/organization">
          <OrganizationIcon slot="icon" />
          Organization
        </side-navigation-link>
        <side-navigation-link to="/app/profile">
          <ProfileIcon slot="icon" />
          Profile
        </side-navigation-link>
      </div>
    </side-navigation>
    <app-section>
      <nuxt/>
    </app-section>
    <over-panel />
  </div>
</template>

<script>
import AppSection from '~/components/AppSection';
import SideNavigation from '~/components/SideNavigation';
import SideNavigationLink from '~/components/SideNavigationLink';
import OverPanel from '~/components/OverPanel';
import LargeLogo from '~/components/LargeLogo';
import BillingIcon from '~/static/billing.svg';
import ConfigurationIcon from '~/static/configuration.svg';
import FeatureIcon from '~/static/feature.svg';
import HelpIcon from '~/static/help.svg';
import OrganizationIcon from '~/static/organization.svg';
import ProfileIcon from '~/static/profile.svg';
import ProjectIcon from '~/static/project.svg';

export default {
  components: {
    AppSection,
    SideNavigation,
    SideNavigationLink,
    OverPanel,
    LargeLogo,
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
</style>

