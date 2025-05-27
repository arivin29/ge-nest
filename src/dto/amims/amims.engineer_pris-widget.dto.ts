import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerPrisDto } from './amims.engineer_pris.dto';

export class AmimsEngineerPrisWidgetDto extends AmimsEngineerPrisDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
