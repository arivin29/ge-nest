import { ApiProperty } from '@nestjs/swagger';
import { NewBptMigrationsDto } from './new_bpt.migrations.dto';

export class NewBptMigrationsWidgetDto extends NewBptMigrationsDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
