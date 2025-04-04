// src/common/decorators/api-response-entity.ts
import { applyDecorators, Type } from '@nestjs/common';
import {
    ApiOkResponse,
    ApiCreatedResponse,
    ApiBadRequestResponse,
    ApiResponse,
    getSchemaPath,
    ApiExtraModels,
} from '@nestjs/swagger';

export function ApiResponseEntity(
    entity: Type<any>,
    mode: 'get' | 'list' | 'post' | 'put' | 'delete' = 'get'
) {
    const decorators: (MethodDecorator | ClassDecorator)[] = [];

    decorators.push(ApiExtraModels(entity)); // 💡 Agar $ref bisa muncul

    const schema = {
        properties: {
            code: { type: 'number', example: 200 },
            pesan: { type: 'string', example: 'Berhasil' },
            data:
                mode === 'list'
                    ? { type: 'array', items: { $ref: getSchemaPath(entity) } }
                    : { $ref: getSchemaPath(entity) },
            ...(mode === 'list' && {
                total: { type: 'number', example: 123 },
            }),
        },
    };

    if (mode === 'post') {
        decorators.push(ApiCreatedResponse({ description: `Create ${entity.name}`, schema }));
    } else {
        decorators.push(ApiOkResponse({ description: `Success response for ${mode} ${entity.name}`, schema }));
    }

    return applyDecorators(...decorators);
}
