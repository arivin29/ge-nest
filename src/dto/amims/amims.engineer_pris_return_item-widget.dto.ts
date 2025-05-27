import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerPrisReturnItemDto } from './amims.engineer_pris_return_item.dto';

export class AmimsEngineerPrisReturnItemWidgetDto extends AmimsEngineerPrisReturnItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
