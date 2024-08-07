import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Portfolio
        </title>
      </head>
      <body className="text-white" style={{backgroundColor:"#020c1b"}} >{children}</body>
    </html>
  );
}
