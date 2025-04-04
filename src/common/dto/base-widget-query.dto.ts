import { ApiPropertyOptional } from '@nestjs/swagger';

export class BaseWidgetQueryDto {
    @ApiPropertyOptional({ type: String, description: 'Filter JSON' })
    filter?: string;

    @ApiPropertyOptional({ type: String, description: 'JoinWhere JSON' })
    joinWhere?: string;

    @ApiPropertyOptional({ type: String, description: 'Group by fields (JSON Array)' })
    groupBy?: string;

    @ApiPropertyOptional({ type: String, description: 'Select fields (JSON Array)' })
    select?: string;

    @ApiPropertyOptional()
    sortKey?: string;

    @ApiPropertyOptional({ enum: ['ASC', 'DESC'] })
    sortValue?: 'ASC' | 'DESC';
}
