import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import serverless from "serverless-http";
import express, { Request, Response } from "express";

const app = express();

app.get("/hello", (req: Request, res: Response) => {
  res.send({ message: "Hello Express!" });
});

export const handler: APIGatewayProxyHandlerV2 = serverless(app);
