export default function handler(req, res) {
  if (req.method === "POST") {
    res.json({ data: { message: "Ok got it!!!!" } });
  }
}
