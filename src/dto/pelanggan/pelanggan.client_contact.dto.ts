import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganClientContactDto {
  @ApiProperty({ required: true })
  idClientContact: string;

  @ApiProperty({ required: true })
  idClient: string;

  @ApiProperty({ required: false })
  namaContact: string;

  @ApiProperty({ required: false })
  email: string;

  @ApiProperty({ required: false })
  telepon: string;

  @ApiProperty({ required: false })
  jabatan: string;

  @ApiProperty({ required: false })
  divisi: string;

  @ApiProperty({ required: false })
  jenisContact: any;

  @ApiProperty({ required: false })
  isPrimary: boolean;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
