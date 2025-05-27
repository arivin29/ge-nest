import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerPrisItemDto } from './amims.engineer_pris_item.dto';

export class AmimsEngineerPrisItemWidgetDto extends AmimsEngineerPrisItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
