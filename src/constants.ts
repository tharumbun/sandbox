import IconMail from "@/assets/icons/IconMail.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS = [
    {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tharum/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Telegram",
    href: "https://t.me/tharum",
    linkTitle: `Telegram ${SITE.title}`,
    icon: IconTelegram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+85578555659",
    linkTitle: `Telegram ${SITE.title}`,
    icon: IconWhatsapp,
  },
  {
    name: "Mail",
    href: "mailto:hi@tharum.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
  {
    name: "X",
    href: "https://x.com/tharum",
    linkTitle: `${SITE.title} on X`,
    icon: IconBrandX,
  },
    {
    name: "Bluesky",
    href: "https://tharum.bsky.social/",
    linkTitle: `${SITE.title} on Bluesky`,
    icon: IconBrandX,
  },
] as const;

export const SHARE_LINKS = [
    {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
