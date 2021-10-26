import { join } from 'path';
import { readFileSync } from 'fs';
import { parse as parseDotenv } from 'dotenv';

export default class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    if (process.env.NODE_ENV !== 'production') {
      const envFile = join(process.cwd(), '.env.local');
      this.envConfig = parseDotenv(readFileSync(envFile));
    } else {
      this.envConfig = {
        CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
      };
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
