import { ApiProperty } from '@nestjs/swagger';
import { NewBptTNotifikasiOssDto } from './new_bpt.t_notifikasi_oss.dto';

export class NewBptTNotifikasiOssWidgetDto extends NewBptTNotifikasiOssDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
