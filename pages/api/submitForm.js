import dbConnect from '@/utils/db.js';
import FIR from "@/models/FIR"; // Ensure this matches the exported model name

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await dbConnect();

    const {
      complaintFor,
      complaintType,
      location,
      complaintDetails,
      revealIdentity,
    } = req.body;
    console.log(req.body);
    try {
      const newFIR = new FIR({
        complaintFor,
        complaintType,
        location,
        complaintDetails,
        revealIdentity,
      });

      await newFIR.save();

      res.status(200).json(newFIR);
    } catch (error) {
      console.error(error);
      res.status(500).end('Internal Server Error');
    }
  } else {
    // Handle unsupported request methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
