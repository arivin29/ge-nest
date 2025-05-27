import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerPrisReturnDto } from './amims.engineer_pris_return.dto';

export class AmimsEngineerPrisReturnWidgetDto extends AmimsEngineerPrisReturnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
