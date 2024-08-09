
export const metadata = {
    title: "Services || Denodata",
    description: "Supermarket Business Solutions",
  };

  export default function ServiceLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
       {children}
    </div>
  )
}

