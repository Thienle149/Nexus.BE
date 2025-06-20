import { Request, Response } from "express";

export const insertRFIDLog = async (req: Request, res: Response) => {
  const hex = req.body["hex"];

  res.json({ success: true });
};
