import { FaTelegramPlane, FaDiscord, FaGithub, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const dataContactList = [
  {
    name: "telegram",
    link: "https://t.me/Moniswap_Xyz",
    icon: <FaTelegramPlane />,
  },
  {
    name: "XTwitter",
    link: "https://x.com/Moniswap_",
    icon: <FaXTwitter />,
  },
  {
    name: "telegram",
    link: "https://discord.com",
    icon: <FaDiscord />,
  },
  {
    name: "telegram",
    link: "https://github.com",
    icon: <FaGithub />,
  },
  {
    name: "telegram",
    link: "https://medium.com",
    icon: <FaMedium />,
  },
];

export const dataPageLinkList = [
  {
    name: "Products",
    links: [
      {
        name: "Moniswap",
        link: "/",
        isNewPage: false,
      },
    ],
  },
  {
    name: "Services",
    links: [
      {
        name: "Swap",
        link: "/swap",
        isNewPage: false,
      },
      {
        name: "Yield Farming",
        link: "/farming",
        isNewPage: false,
      },
      {
        name: "Launchpad",
        link: "/launchpad",
        isNewPage: false,
      },
    ],
  },
  {
    name: "Support",
    links: [
      {
        name: "Contact",
        link: "/contact",
        isNewPage: false,
      },
      {
        name: "Privacy Policy",
        link: "/privacy_policy",
        isNewPage: false,
      },
      {
        name: "Terms & Conditions",
        link: "/terms_conditions",
        isNewPage: false,
      },
    ],
  },
  {
    name: "Resources",
    links: [
      {
        name: "Logo & Branding",
        link: "/logo_branding",
        isNewPage: false,
      },
      {
        name: "Docs",
        link: "/docs",
        isNewPage: false,
      },
      {
        name: "LightPaper",
        link: "/lightpaper",
        isNewPage: false,
      },
    ],
  },
  {
    name: "Others",
    links: [
      {
        name: "Medium Blog",
        link: "/medium_blog",
        isNewPage: false,
      },
    ],
  },
];
