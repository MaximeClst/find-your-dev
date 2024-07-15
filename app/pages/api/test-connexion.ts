import db from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await db.query("SELECT 'Connexion réussie' AS message");
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Erreur de connexion", error);
    res.status(500).json({ error: "Erreur de connexion à la base de données" });
  }
}
