import "@/assets/globals.scss";
import styles from "./styles.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout__body}>
        <Sidebar />
        <main className={styles.layout__main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
