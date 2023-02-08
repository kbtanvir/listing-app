import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import { authStore } from "../features/auth/logic/auth.store";
import { persistStore } from "../features/auth/logic/persist.store";
import { ProtectedLayout } from "../layouts/ProtectedLayout";
import "../lib/local/i18n";
import theme from "../lib/theme/theme";
export const { ToastContainer, toast } = createStandaloneToast();

persistStore(authStore, "AUTH");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer />
      <ProtectedLayout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ProtectedLayout>
    </ChakraProvider>
  );
}

export default MyApp;
