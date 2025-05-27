import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerRtiIdentifyDto } from './amims.engineer_rti_identify.dto';

export class AmimsEngineerRtiIdentifyWidgetDto extends AmimsEngineerRtiIdentifyDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
