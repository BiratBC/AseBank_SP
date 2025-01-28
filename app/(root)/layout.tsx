export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    SIDEBAR 
    {/* Here we render */}
    {children} 
   </main>
  );
}
