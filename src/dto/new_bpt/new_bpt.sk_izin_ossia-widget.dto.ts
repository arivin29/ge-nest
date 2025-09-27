import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiaDto } from './new_bpt.sk_izin_ossia.dto';

export class NewBptSkIzinOssiaWidgetDto extends NewBptSkIzinOssiaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
