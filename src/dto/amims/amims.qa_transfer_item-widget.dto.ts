import { ApiProperty } from '@nestjs/swagger';
import { AmimsQaTransferItemDto } from './amims.qa_transfer_item.dto';

export class AmimsQaTransferItemWidgetDto extends AmimsQaTransferItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
