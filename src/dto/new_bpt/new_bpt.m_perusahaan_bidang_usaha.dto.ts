import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMPerusahaanBidangUsahaDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanBidangUsaha: number; // PK

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
