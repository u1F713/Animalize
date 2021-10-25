import { Request, Response } from 'express';
import loadGallery from '../../utils/loadGallery';

// get static images
const handler = (req: Request, res: Response): Response => {
  const pictures = loadGallery();
  return res.status(200).send(pictures);
};

export default handler;
