import { ApiProperty } from '@nestjs/swagger';
import { PelangganCustomFieldValueDto } from './pelanggan.custom_field_value.dto';
import { PelangganCustomFieldDto } from './pelanggan.custom_field.dto';

export class PelangganCustomFieldValueReportDto extends PelangganCustomFieldValueDto {
  @ApiProperty({ type: PelangganCustomFieldDto })
  customField: PelangganCustomFieldDto;
}
