import { ApiProperty } from '@nestjs/swagger';
import { NewBptTKelembagaanDto } from './new_bpt.t_kelembagaan.dto';

export class NewBptTKelembagaanWidgetDto extends NewBptTKelembagaanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
