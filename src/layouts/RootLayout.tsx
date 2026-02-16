import "@/assets/globals.scss";
import Header from "@/components/Header";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>
        <p>Footer do Site</p>
      </footer>
    </div>
  );
}
