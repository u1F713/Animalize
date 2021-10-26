import cloudinary from 'cloudinary';
import ConfigService from '../libs/configService';

const config = new ConfigService();

const storage = (): void => {
  cloudinary.v2.config({
    cloud_name: config.get('CLOUDINARY_NAME'),
    api_key: config.get('CLOUDINARY_API_KEY'),
    api_secret: config.get('CLOUDINARY_API_SECRET'),
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
