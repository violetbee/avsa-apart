import { type AppType } from "next/app";
import "@/styles/globals.css";

const MyApp: AppType = ({ Component }) => {
  return <Component />;
};

export default MyApp;
