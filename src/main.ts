import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as fs from 'fs';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: ['http://localhost:4200'], // atau '*' untuk semua origin (tidak disarankan untuk production)
        credentials: true,
    });
    const config = new DocumentBuilder()
        .setTitle('ERP API')
        .setDescription('Dokumentasi API ERP multi-tenant')
        .setVersion('1.0')
        .addTag('client')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); // akses di /api

    fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));

    await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
