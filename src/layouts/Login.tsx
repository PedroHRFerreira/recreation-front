import "@/assets/globals.scss";
interface LoginLayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
