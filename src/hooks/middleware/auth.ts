import { usePathname } from "next/navigation";

export const useAuthRedirect = () => {
  const pathname = usePathname();

  console.log("useAuthRedirect - pathname:", pathname);

  // Quando o backend estiver pronto, descomente o código abaixo para ativar a lógica de redirecionamento baseada no token de autenticação.

  //   useEffect(() => {
  //     // TODO: Remover quando backend estiver pronto

  //     const token =
  //       typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
  //     const isLoginPage = pathname === "/login";

  //     // Se não tem token e não está na página de login, redireciona para login
  //     if (!token && !isLoginPage) {
  //       router.push("/login");
  //     }
  //   }, [router, pathname]);
};
