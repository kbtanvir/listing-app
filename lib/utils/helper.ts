import { toast } from "../../pages/_app";

export function notify(props: {
  message: string;
  type?: "info" | "warning" | "success" | "error" | "loading";
}) {
  if (props.type) {
    toast({
      // title: "An error occurred.",
      description: props.message || "No message found",
      status: props.type || "info",
      duration: 9000,
      isClosable: true,
    });
  }
}

export function pathname(params: string) {
  let p: any = params.split("/");
  p = p[p.length - 1];
  p = p.replace(/-/g, " ");
  return capitalize(p);
}

// capitalized first letter
export function capitalize(string: String) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// capitalize sentence
export function pathToText(string: String) {
  return string
    .split("-")
    .map(word => capitalize(word))
    .join(" ");
}

export function finePath(pathname: string) {
  let value;
  value = pathname.replace(/-/g, " ");
  value.charAt(0) === "/" ? (value = value.slice(1)) : value;
  value = value.replace(/\//g, ">");
  value = pathToText(value);
  return value;
}
export function stringToPath(string: string) {
  let value = string;
  value = value.toLocaleLowerCase();
  value = value.replace(/ /g, "-");
  return value;
}

export const parse = (val: string) => val.replace(/^\$/, "");

export function makeQueryString(query: any) {
  if (!query) return "";
  const queryString = Object.keys(query)

    .map(key => {
      if (query[key]) {
        return `${key}=${query[key]}`;
      }
    })
    .join("&");

  return queryString;
}

export function objectToQueryParam(obj: any) {
  let queryString = "";
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      queryString += `${key}=${value}&`;
    }
  });
  return queryString;
}

export function queryParamsToObject(query: string) {
  let obj: any = {};
  query.split("&").forEach(item => {
    const [key, value] = item.split("=");
    obj[key] = value;
  });
  return obj;
}
