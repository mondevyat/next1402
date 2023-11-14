import Footer from "./_components/Footer"
import Header from "./_components/Header"

interface Props {
  params: {
    lang: string,
  },
  children: React.ReactNode,
};

export default function RootLayout({ children, params: { lang } }: Props) {
  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  )
}
