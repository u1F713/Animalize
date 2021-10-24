import fs from 'fs';
import { Request, Response } from 'express';
import { ImageItemDto } from '../../common/gallery.dto';

// get static images
const handler = (req: Request, res: Response): Response => {
  const data: string[] = fs.readdirSync('public/gallery');
  const pictures = new Array<ImageItemDto>();

  data.map((elm) => {
    let pictureRestuct: ImageItemDto = {
      pictureSrc: `/gallery/${elm}`,
      alternativeText: elm,
    };
    pictures.push(pictureRestuct);
  });

  return res.status(200).send(pictures);
};

export default handler;
