import { Request, Response } from 'express'
import { fetchGallery } from '$mod/cloudinary/services/fetchData'

const handler = async (req: Request, res: Response): Promise<Response> => {
  const data = await fetchGallery({ type: 'upload', prefix: 'gallery', max_results: 4444 })
  return res.status(200).json(data.entities)
}

export default handler
