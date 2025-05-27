import { ApiProperty } from '@nestjs/swagger';
import { AmimsLogTransferDto } from './amims.log_transfer.dto';

export class AmimsLogTransferWidgetDto extends AmimsLogTransferDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
