import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinBjbDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTIzinBjb: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  ntb: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ntp: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  tglTransaksi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
