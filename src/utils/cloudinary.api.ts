import cloudinary from 'cloudinary';

const storage = (): void => {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
};

const apiSearch = async (data: { type: string; prefix: string }) => {
  storage();
  let result = await cloudinary.v2.api.resources(data);
  result = result.resources.map((item) => item.secure_url);
  return result;
};

export default apiSearch;
