import { config as dotEnvConfig } from 'dotenv';
import { resolve } from 'path';
import fs from 'fs';

const rootDir = fs.realpathSync(process.cwd());

const dotEnvFiles = [resolve(rootDir, '.env.local'), resolve(rootDir, '.env')];

dotEnvFiles.forEach((dotEnvFile) => {
    if (fs.existsSync(dotEnvFile)) {
        dotEnvConfig({ path: dotEnvFile });
    }
});

type DevelopmentType = 'development' | 'staging' | 'production';

const developmentType: DevelopmentType = !process.env.NODE_ENV
    ? 'development'
    : process.env.NODE_ENV === 'production' && process.env.STAGING === 'true'
    ? 'staging'
    : 'production';

interface Config {
    isEnvProduction: boolean;
    isEnvDevelopment: boolean;
    isEnvStaging: boolean;
    baseApiUrl: string;
    port: string | number;
}

const config: Config = {
    isEnvProduction: developmentType === 'production',
    isEnvDevelopment: developmentType === 'development',
    isEnvStaging: developmentType === 'staging',
    baseApiUrl: process.env.BASE_API_URL ?? 'https://api.apps.digify.ir/',
    port: process.env.PORT ?? 4000,
};

export default config;
