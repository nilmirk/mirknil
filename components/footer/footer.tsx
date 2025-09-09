import '@/components/footer/footer.scss';
import { NilmirkLogo, Telegram, Twitch, GitHub, YouTube } from '@/public/icons/icons';
import { Text, Color, A } from 'mirk-ui';
import { ReactNode } from 'react';

export default function Footer() {

  const links = ["projects", "donate", "login"];
  const contacts = [{
    name: 'Telegram',
    link: 'https://nilmirk.vercel.app/Telegram',
    icon: <Telegram />
  },
  {
    name: 'GitHub',
    link: 'https://nilmirk.vercel.app/GitHub',
    icon: <GitHub />
  },
  {
    name: 'YouTube',
    link: 'https://nilmirk.vercel.app/YouTube',
    icon: <YouTube />
  },
  {
    name: 'Twicth',
    link: 'https://nilmirk.vercel.app/Twicth',
    icon: <Twitch />
  }]

  return (
    <footer className='bg-blackHover padh-128 padv-32 flex-r a-center j-between'>
      <ul className='gap-16 flex-c'>
        {links.map((link: string) => {
          return (
            <li key={link}>
              <A text={Text.Button2} href={`/${link}`}>
                {link}
              </A>
            </li>
          );
        })}
      </ul>
      <div className="footer-center flex-c gap-16">
        <NilmirkLogo />
        <A text={Text.Button2} href='mailto:nilmrik.partner@gmail.com'>nilmrik.partner@gmail.com</A>
      </div>
      <ul className='gap-16 flex-c'>
        {contacts.map((item: {name: string, link: string, icon: ReactNode}) => {
          return (
            <li key={item.name}>
              <A text={Text.Button2} href={item.link}>
                {item.icon}
                {item.name}
              </A>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}