export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen">
      <main className="flex flex-col items-center">{children}</main>
    </div>
  );
}
