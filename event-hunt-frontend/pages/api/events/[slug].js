const { events } = require("./data.json");

export default function handler(req, res) {
  // Get the events related to the slug
  const slugEvents = events.filter((evt) => evt.slug == req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(slugEvents);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
