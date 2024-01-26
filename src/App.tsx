import { Box } from "@mui/material";
import styled from "styled-components";
import Home from "./pages/home/home";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import Layout from "./pages/layout/layout";

const App = () => {
  return (
    <StyledComponent>
      <Layout>
        <Home />
      </Layout>
      <NotificationContainer />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fefce9;
`;

export default App;
