import {
    ArgumentMetadata,
    BadRequestException,
    Injectable,
    PipeTransform,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { getMetadataArgsStorage } from 'typeorm';
import {
    IsString,
    IsOptional,
    IsEnum,
    IsNumber,
    IsUUID,
} from 'class-validator';
import { ObjectLiteral } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

const validatorCache = new Map<string, any>();

function isTextType(type?: string): boolean {
    return ['varchar', 'text', 'datetime'].includes(type || '');
}

function isNumberType(type?: string): boolean {
    return ['int', 'tinyint', 'decimal', 'float'].includes(type || '');
}

function isDateType(type?: string): boolean {
    return ['datetime', 'timestamp'].includes(type || '');
}

@Injectable()
export class BaseRequestPipe<T extends ObjectLiteral> implements PipeTransform {
    constructor(private readonly entity: new () => T) { }

    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        const cacheKey = this.entity.name;
        let DynamicDto: any;

        if (validatorCache.has(cacheKey)) {
            DynamicDto = validatorCache.get(cacheKey);
        } else {
            DynamicDto = class { };

            const columns = getMetadataArgsStorage().columns.filter(
                (col) => col.target === this.entity,
            );

            for (const col of columns) {
                const name = col.propertyName;
                if (name.toLowerCase().includes('created') || name.toLowerCase().includes('updated')) continue;


                const isOptional = col.options.nullable || col.options.default !== undefined;

                if (isOptional) {
                    IsOptional()(DynamicDto.prototype, name);
                }

                if (col.options.enum) {
                    IsEnum(col.options.enum)(DynamicDto.prototype, name);
                } else {
                    const type = col.options.type;

                    if (type === 'uuid' || name.startsWith('id_')) {
                        // IsUUID()(DynamicDto.prototype, name);
                    } else if (typeof type === 'string') {
                        if (isTextType(type)) {
                            IsString()(DynamicDto.prototype, name);
                        } else if (isNumberType(type)) {
                            IsNumber()(DynamicDto.prototype, name);
                        }
                    }
                }
            }

            validatorCache.set(cacheKey, DynamicDto);
        }
        // Auto UUID + normalize number/date
        const columns = getMetadataArgsStorage().columns.filter(
            col => col.target === this.entity,
        );

        for (const key of Object.keys(value)) {
            const column = columns.find(c => c.propertyName === key);
            if (!column) continue;

            const type = column.options?.type?.toString();
            const val = value[key];

            if (column.options?.primary && (!val || val === '')) {
                value[key] = uuidv4();
            } else if (isNumberType(type)) {
                value[key] = val !== null && val !== undefined ? Number(val) : val;
            } else if (isDateType(type)) {
                value[key] = val ? new Date(val) : null;
            }
        }


        const dtoInstance = plainToInstance(DynamicDto, value);
        const errors = await validate(dtoInstance);

        if (errors.length > 0) {
            throw new BadRequestException(errors);
        }

        

        return value;
    }
}
