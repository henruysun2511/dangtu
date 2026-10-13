import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dang Tu | Data Analyst Portfolio & Business Intelligence',
  description: 'Data Analyst portfolio of Dang Tu. Specializing in advanced SQL, interactive Power BI / Tableau dashboards, Python data pipelines, cohort retention, and data-driven decision intelligence.',
  keywords: [
    'Dang Tu Data Analyst',
    'Data Analyst Portfolio',
    'Business Intelligence',
    'Power BI',
    'SQL Analytics',
    'Tableau',
    'Python Pandas',
    'Cohort Analysis',
    'A/B Testing',
    'Data Modeling'
  ],
  authors: [{ name: 'Dang Tu' }],
  openGraph: {
    title: 'Dang Tu | Data Analyst & BI Specialist',
    description: 'Transforming complex datasets into actionable business intelligence with SQL, Power BI, and Python.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f5f7] text-[#172b4d] font-sans">
        {children}
      </body>
    </html>
  );
}
