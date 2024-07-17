import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import HandshakeIcon from '@mui/icons-material/Handshake';
const routes = [
  {
    path: "/main",
    content: "Service", 
    icon: <LocalPostOfficeIcon/>,  
  },
  {
    path: "/main/order",
    content: "Orders",
    icon: <DryCleaningIcon/>,
  },
  {
    path: "/main/client",
    content: "Client",
    icon: <HandshakeIcon/>,
  },
];

export default routes;
