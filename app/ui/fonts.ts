import { Inter, Lusitana } from 'next/font/google';

// Primary font (used on <body>)
export const inter = Inter({ subsets: ['latin'] });

// Secondary font (used on specific elements)
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
