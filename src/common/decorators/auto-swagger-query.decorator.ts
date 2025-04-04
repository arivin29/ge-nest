// src/common/decorators/auto-swagger-query.decorator.ts
import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export function AutoSwaggerQuery() {
    return applyDecorators(
        ApiQuery({ name: 'pageIndex', required: false, type: Number }),
        ApiQuery({ name: 'pageSize', required: false, type: Number }),
        ApiQuery({ name: 'filter', required: false, type: String, description: 'JSON.stringify({})' }),
        ApiQuery({ name: 'sortKey', required: false, type: String }),
        ApiQuery({ name: 'sortValue', required: false, type: String }),
        ApiQuery({ name: 'search_field', required: false, isArray: true, type: String }),
        ApiQuery({ name: 'search_keyword', required: false, type: String }),
    );
}
