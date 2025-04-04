// src/common/helpers/swagger-response.helper.ts
import { ApiProperty } from '@nestjs/swagger';

export function generateSwaggerResponse(entity: Function, mode: 'get' | 'list' | 'create' | 'update' | 'delete') {
    class ResponseWrapper {
        @ApiProperty({ example: 200 })
        code: number;

        @ApiProperty({ example: 'Success' })
        pesan: string;

        @ApiProperty({ type: entity })
        data: any;
    }

    if (mode === 'list') {
        class ListResponseWrapper extends ResponseWrapper {
            @ApiProperty({ type: [entity] })
            declare data: any[];

            @ApiProperty({ example: 123 })
            total: number;
        }
        return ListResponseWrapper;
    }

    return ResponseWrapper;
}
