import { ApiProperty } from '@nestjs/swagger';
import { PelangganCustomFieldDto } from './pelanggan.custom_field.dto';

export class PelangganCustomFieldWidgetDto extends PelangganCustomFieldDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
