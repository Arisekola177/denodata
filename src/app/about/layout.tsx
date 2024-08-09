
export const metadata = {
    title: "About us || Denodata",
    description: "Supermarket Business Solutions",
  };

  export default function AboutLayout({
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

