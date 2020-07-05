import { Server } from "miragejs";
import { getRestList } from "./src/utils/DataModel";

export const initServer = () => {
  if (window.server) {
    server.shutdown();
  }

  window.server = new Server({
    routes() {
      this.get("/api/movies", () => {
        return getRestList();
      });
    },
  });
};
