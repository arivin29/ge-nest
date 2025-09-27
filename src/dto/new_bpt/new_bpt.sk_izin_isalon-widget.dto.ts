import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIsalonDto } from './new_bpt.sk_izin_isalon.dto';

export class NewBptSkIzinIsalonWidgetDto extends NewBptSkIzinIsalonDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
