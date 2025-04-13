import { ApiProperty } from '@nestjs/swagger';
import { PelangganContractDto } from './pelanggan.contract.dto';
import { PelangganClientDto } from './pelanggan.client.dto';
import { PelangganContractJenisDto } from './pelanggan.contract_jenis.dto';
import { PelangganKantorDto } from './pelanggan.kantor.dto';
import { DocumentDocumentDto } from '../document/document.document.dto';

export class PelangganContractReportDto extends PelangganContractDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;

  @ApiProperty({ type: PelangganContractJenisDto })
  contractJenis: PelangganContractJenisDto;

  @ApiProperty({ type: PelangganKantorDto })
  kantor: PelangganKantorDto;

  @ApiProperty({ type: DocumentDocumentDto })
  document: DocumentDocumentDto;
}
