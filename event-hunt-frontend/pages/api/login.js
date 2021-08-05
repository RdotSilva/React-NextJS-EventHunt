import { API_URL } from "@/config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { identifier, password } = req.body;

    // TODO: Update logic to log user in, this will be called from AuthContext
    console.log(req.body);
    res.statis(200).json({});
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
