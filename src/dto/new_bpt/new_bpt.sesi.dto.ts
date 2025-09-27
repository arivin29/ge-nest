import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSesiDto {
  @ApiProperty({ required: false })
  @IsOptional()
  bidang: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSesi: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jamAkhir: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jamAwal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jenisLayanan: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  jumlah: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  sesi: boolean;
}
