import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./routes/Root.jsx";

// pages
import Discover from "./routes/discover.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Server from "./routes/server.jsx";
import Chat from "./routes/chat.jsx";
import VideoCallUI from "./routes/Call.jsx";
import Home from "./routes/home.jsx";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "discover",
          element: <Discover />,
        },
        {
          path: "chat",
          element: <Server />,
          children: [
            {
              path: "",
              element: <Chat />,
            },
            {
              path: "text",
              element: <Chat />,
            },
            {
              path: "call",
              element: <VideoCallUI />,
            },
          ],
        },
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );