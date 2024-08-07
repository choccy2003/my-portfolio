import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="drW0IRp98szdEDFEIjaFlm-Qo_1R-PtytQmNTN3CGo4" />
        <title>
          Portfolio
        </title>
      </head>
      <body className="text-white" style={{backgroundColor:"#020c1b"}} >{children}</body>
    </html>
  );
}
