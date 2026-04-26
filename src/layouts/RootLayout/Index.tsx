import "@/assets/globals.scss";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const router = useRouter();

  return (
    <div className={styles["layout"]}>
      <Toaster position="top-right" />
      <Header />
      <div className={styles["layout__body"]}>
        {router.pathname === "/" && <Sidebar />}

        <main className={styles["layout__main"]}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
