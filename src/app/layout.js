import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'OzyAnimeList',
  description: 'WebAnime Made By Ozy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
