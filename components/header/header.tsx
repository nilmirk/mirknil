import './header.scss';
import { NilmirkLogo, UserCircle } from '@/public/icons/icons';
import { Text, Color, A } from 'mirk-ui';

export default function Header() {

  const links = ["projects", "donate"]

  return (
    <header className='padh-128'>
      <div className="header-container flex-r a-center j-between padh-24 padv-8 bg-blackHover rad-16">
        <A text={Text.Body2} href='/'><NilmirkLogo /></A>
        <ul className='gap-16 flex-r'>
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
        <A text={Text.Button2} href='/login'><UserCircle />Login</A>
      </div>
    </header>
  );
}