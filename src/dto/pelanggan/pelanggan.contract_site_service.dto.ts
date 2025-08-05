import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganContractSiteServiceDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  deskripsiService: string;

  @ApiProperty({ required: true })
  idContractSite: string;

  @ApiProperty({ required: true })
  idContractSiteService: string;

  @ApiProperty({ required: true })
  idService: string;

  @ApiProperty({ required: false })
  qty: number;

  @ApiProperty({ required: false })
  spesifikasiService: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
