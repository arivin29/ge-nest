import { ApiProperty } from '@nestjs/swagger';
import { NewBptUserKecamatanDto } from './new_bpt.user_kecamatan.dto';

export class NewBptUserKecamatanWidgetDto extends NewBptUserKecamatanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
