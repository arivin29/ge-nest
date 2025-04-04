import { getMetadataArgsStorage } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import 'reflect-metadata';

const swaggerDtoCache = new Map<string, any>();

export function generateSwaggerSchema(entity: Function): any {
    const cacheKey = entity.name;
    if (swaggerDtoCache.has(cacheKey)) {
        return swaggerDtoCache.get(cacheKey);
    }

    const DynamicDto = new Function(`return class ${entity.name}SwaggerDto {}`)();
    const columns = getMetadataArgsStorage().columns.filter(
        (col) =>
            col.target === entity ||
            (typeof col.target === 'function' && col.target.name === entity.name)
    );

    for (const col of columns) {
        const name = col.propertyName;

        if (['created_at', 'updated_at'].includes(name)) continue;

        const options: any = {
            required: !col.options.nullable && col.options.default === undefined,
            type: mapType(col.options.type),
        };

        if (col.options.enum) {
            options.enum = col.options.enum;
        }

        // Inject swagger property + metadata
        ApiProperty(options)(DynamicDto.prototype, name);
        Reflect.metadata('design:type', options.type)(DynamicDto.prototype, name);
    }

    swaggerDtoCache.set(cacheKey, DynamicDto);
    return DynamicDto;
}

function mapType(type: any) {
    if (typeof type !== 'string') return String;

    const stringTypes = ['varchar', 'text', 'datetime', 'date'];
    const numberTypes = ['int', 'tinyint', 'decimal', 'float', 'double'];
    const booleanTypes = ['boolean', 'bit'];

    if (stringTypes.includes(type)) return String;
    if (numberTypes.includes(type)) return Number;
    if (booleanTypes.includes(type)) return Boolean;

    return String;
}
