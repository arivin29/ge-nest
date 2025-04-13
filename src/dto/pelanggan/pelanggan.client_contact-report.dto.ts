import { ApiProperty } from '@nestjs/swagger';
import { PelangganClientContactDto } from './pelanggan.client_contact.dto';
import { PelangganClientDto } from './pelanggan.client.dto';

export class PelangganClientContactReportDto extends PelangganClientContactDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;
}
