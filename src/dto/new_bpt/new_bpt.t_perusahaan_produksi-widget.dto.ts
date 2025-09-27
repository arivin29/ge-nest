import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanProduksiDto } from './new_bpt.t_perusahaan_produksi.dto';

export class NewBptTPerusahaanProduksiWidgetDto extends NewBptTPerusahaanProduksiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
