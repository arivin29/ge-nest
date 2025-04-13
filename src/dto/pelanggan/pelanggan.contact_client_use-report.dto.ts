import { ApiProperty } from '@nestjs/swagger';
import { PelangganContactClientUseDto } from './pelanggan.contact_client_use.dto';
import { PelangganClientContactDto } from './pelanggan.client_contact.dto';

export class PelangganContactClientUseReportDto extends PelangganContactClientUseDto {
  @ApiProperty({ type: PelangganClientContactDto })
  clientContact: PelangganClientContactDto;
}
