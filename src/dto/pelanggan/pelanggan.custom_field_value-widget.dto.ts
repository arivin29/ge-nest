import { ApiProperty } from '@nestjs/swagger';
import { PelangganCustomFieldValueDto } from './pelanggan.custom_field_value.dto';

export class PelangganCustomFieldValueWidgetDto extends PelangganCustomFieldValueDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
