import { ApiProperty } from '@nestjs/swagger';
import { PelangganClientContactDto } from './pelanggan.client_contact.dto';

export class PelangganClientContactWidgetDto extends PelangganClientContactDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
