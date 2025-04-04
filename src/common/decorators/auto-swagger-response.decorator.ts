import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { generateSwaggerResponse } from '../helpers/swagger-response.helper';

export function AutoSwaggerResponse(entity: Function, mode: 'get' | 'list' | 'create' | 'update' | 'delete') {
    const type = generateSwaggerResponse(entity, mode);

    let status = 200;
    if (mode === 'create') status = 201;
    if (mode === 'delete') status = 204;

    return applyDecorators(
        ApiResponse({ type, status }),
    );
}
