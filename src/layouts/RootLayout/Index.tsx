"use client";
import "@/assets/globals.scss";
import styles from "./styles.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout__body}>
        {pathname === "/" && <Sidebar />}

        <main className={styles.layout__main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
