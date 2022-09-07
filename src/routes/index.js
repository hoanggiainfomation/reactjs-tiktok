//layous
import { HeaderOnly } from "~/component/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Gia from "~/pages/gia";
import Hoang from "~/pages/hoang";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
const publishRoutes = [
  {
    path: "/",
    component: Home,
  },
  { path: "/follwing", component: Following },
  { path: "/profile", component: Profile },
  { path: "/gia", component: Gia },
  { path: "/hoang", component: Hoang },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
]; // khong can dang nhap van xem duoc
const privateRoutes = []; // dang nhap moi xem duoc

export { publishRoutes, privateRoutes };
