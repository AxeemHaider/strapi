import React from 'react';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import {
  SubNav,
  SubNavHeader,
  SubNavSection,
  SubNavSections,
  SubNavLink,
} from '@strapi/design-system/v2/SubNav';
import { auth } from '@strapi/helper-plugin';
import { getSectionsToDisplay } from '../../utils';

const SettingsNav = ({ menu }) => {
  const { formatMessage } = useIntl();
  const user = auth.getUserInfo();
  const isProvincialAccount = user.roles ? user.roles.find((r) => r.code === 'provincial') : false;

  const filteredMenu = getSectionsToDisplay(menu);

  const sections = filteredMenu.map((section) => {
    return {
      ...section,
      title: section.intlLabel,
      links: section.links.map((link) => {
        return {
          ...link,
          title: link.intlLabel,
          name: link.id,
        };
      }),
    };
  });

  const label = formatMessage({
    id: 'global.settings',
    defaultMessage: 'Settings',
  });

  return (
    <SubNav ariaLabel={label}>
      <SubNavHeader label={label} />
      <SubNavSections>
        {sections.map((section) => (
          <SubNavSection key={section.id} label={formatMessage(section.intlLabel)}>
            {section.links.map((link) => {
              if (isProvincialAccount && link.id === 'roles') {
                return null;
              }

              return (
                <SubNavLink
                  as={NavLink}
                  withBullet={link.hasNotification}
                  to={link.to}
                  key={link.id}
                >
                  {formatMessage(link.intlLabel)}
                </SubNavLink>
              );
            })}
          </SubNavSection>
        ))}
      </SubNavSections>
    </SubNav>
  );
};

SettingsNav.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default SettingsNav;
