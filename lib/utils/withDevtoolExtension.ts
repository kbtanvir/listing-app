
import { ReturnStoreType, withDevTools } from "@poly-state/poly-state";


export function withDevToolsExtention(
  store: any,
  identifier: string
) {
  if (
    typeof window !== "undefined" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" as any]
  ) {
    withDevTools(store as any, identifier);
  }
}
