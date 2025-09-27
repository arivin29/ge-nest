import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanCabangAlamatDto } from './new_bpt.t_perusahaan_cabang_alamat.dto';

export class NewBptTPerusahaanCabangAlamatWidgetDto extends NewBptTPerusahaanCabangAlamatDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
