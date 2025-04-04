import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);


    const config = new DocumentBuilder()
        .setTitle('ERP API')
        .setDescription('Dokumentasi API ERP multi-tenant')
        .setVersion('1.0')
        .addTag('client')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); // akses di /api

    await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
