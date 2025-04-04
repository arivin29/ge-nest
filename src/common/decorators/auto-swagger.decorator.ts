// src/common/decorators/auto-swagger.decorator.ts
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { generateSwaggerSchema } from '../helpers/swagger-schema-generator';
import { generateSwaggerResponse } from '../helpers/swagger-response.helper';

export function AutoSwagger(entity: Function, mode: 'get' | 'list' | 'create' | 'update' | 'delete') {
    const operationTitle = {
        get: 'Get item by ID',
        list: 'Get list',
        create: 'Create new item',
        update: 'Update item',
        delete: 'Delete item',
    };

    const responseType = generateSwaggerResponse(entity, mode);
    const requestBodyType = generateSwaggerSchema(entity);

    let status = 200;
    if (mode === 'create') status = 201;
    if (mode === 'delete') status = 204;

    const decorators = [
        ApiOperation({ summary: operationTitle[mode] }),
        ApiResponse({ type: responseType, status }),
    ];

    // Tambahkan @ApiBody hanya jika create/update
    if (['create', 'update'].includes(mode)) {
        decorators.push(ApiBody({ type: requestBodyType }));
    }

    return applyDecorators(...decorators);
}
