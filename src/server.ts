import cep from "cep-promise";
import cors from "cors";
import express from "express";

import "./database";

const app = express();

app.use(express.json());
app.use(cors());

interface ICep {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}
const end = 2995000;

app.get("/cep", async (req, res) => {
  const cepRequest = end;

  const newCEP: ICep = await cep(cepRequest);

  return res.status(200).json(newCEP);
});

app.listen(3000, () => console.log("Server is Running!"));
