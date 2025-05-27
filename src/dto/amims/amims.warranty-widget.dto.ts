import { ApiProperty } from '@nestjs/swagger';
import { AmimsWarrantyDto } from './amims.warranty.dto';

export class AmimsWarrantyWidgetDto extends AmimsWarrantyDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
