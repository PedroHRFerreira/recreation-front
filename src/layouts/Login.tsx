import "@/assets/globals.scss";
interface LoginLayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div>
      <header>
        <h1>Login</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
