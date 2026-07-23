import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Vehicles',
      href: getPermalink('/vehicles'),
    },
    {
      text: 'Documentation',
      href: getPermalink('/docs'),
    },
    {
      text: 'Build Log',
      href: getBlogPermalink(),
    },
    {
      text: 'Team',
      href: getPermalink('/team'),
    },
    {
      text: 'Sponsors',
      href: getPermalink('/sponsors'),
    },
    {
      text: 'Search',
      href: getPermalink('/search'),
    },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Vehicles', href: getPermalink('/vehicles') },
        { text: 'Documentation', href: getPermalink('/docs') },
        { text: 'Build Log', href: getBlogPermalink() },
        { text: 'Team', href: getPermalink('/team') },
        { text: 'Sponsors', href: getPermalink('/sponsors') },
      ],
    },
  ],
  secondaryLinks: [],
  // TODO: add the team's real social/GitHub links once known.
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `UMBC Small Unmanned Aircraft Systems Team · All rights reserved.`,
};
