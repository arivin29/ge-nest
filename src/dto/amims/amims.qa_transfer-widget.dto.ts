import { ApiProperty } from '@nestjs/swagger';
import { AmimsQaTransferDto } from './amims.qa_transfer.dto';

export class AmimsQaTransferWidgetDto extends AmimsQaTransferDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
