import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-room-redesign_owner:t7eGOso0Wcqk@ep-sweet-sound-a4wexlsb.us-east-1.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});

