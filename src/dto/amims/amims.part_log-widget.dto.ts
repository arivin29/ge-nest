import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartLogDto } from './amims.part_log.dto';

export class AmimsPartLogWidgetDto extends AmimsPartLogDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
