import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';

export class SelectFieldDto {
    @ApiPropertyOptional()
    @IsEnum(['count', 'sum', 'avg', 'min', 'max'])
    type: 'count' | 'sum' | 'avg' | 'min' | 'max';

    @ApiPropertyOptional()
    @IsString()
    field: string;

    @ApiPropertyOptional()
    @IsString()
    alias: string;
}

export class BaseWidgetQueryDto {
    @ApiPropertyOptional({ type: Object, description: 'Filter object' })
    @IsOptional()
    @IsObject()
    filter?: Record<string, any>;

    @ApiPropertyOptional({ type: Object, description: 'JoinWhere object' })
    @IsOptional()
    @IsObject()
    joinWhere?: Record<string, Record<string, any>>;

    @ApiPropertyOptional({
        type: [SelectFieldDto],
        description: 'Select fields with aggregation, e.g. [{ type: "sum", field: "nilai", alias: "totalNilai" }]',
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SelectFieldDto)
    select?: SelectFieldDto[];

    @ApiPropertyOptional({
        type: [String],
        description: 'Fields to group by',
    })
    @IsOptional()
    @IsArray()
    @Type(() => String)
    groupBy?: string[];

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    sortKey?: string;

    @ApiPropertyOptional({ enum: ['ASC', 'DESC'] })
    @IsOptional()
    @IsEnum(['ASC', 'DESC'])
    sortValue?: 'ASC' | 'DESC';
}
