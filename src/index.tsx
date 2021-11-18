import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Transaction 1",
          value: 4000,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Transaction 2",
          value: 2000,
          type: "withdraw",
          category: "Food",
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 3,
          title: "Transaction 3",
          value: 3000,
          type: "deposit",
          category: "Food",
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 4,
          title: "Transaction 4",
          value: 1000,
          type: "withdraw",
          category: "Food",
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 5,
          title: "Transaction 5",
          value: 2000,
          type: "deposit",
          category: "Food",
          createdAt: new Date("2021-02-12 09:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
