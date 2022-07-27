import cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
})

export const getGallery = async (data: {
  type: string
  prefix: string
  max_results: number
}): Promise<string[]> => {
  let result = await cloudinary.v2.api.resources(data)
  result = result.resources.map((item) => item.secure_url)
  return result
}

export const getImage = async (name: string): Promise<string> => {
  const result = await cloudinary.v2.url(`gallery/${name}`)
  return result
}
