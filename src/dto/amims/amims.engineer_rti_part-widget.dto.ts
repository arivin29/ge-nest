import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerRtiPartDto } from './amims.engineer_rti_part.dto';

export class AmimsEngineerRtiPartWidgetDto extends AmimsEngineerRtiPartDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
