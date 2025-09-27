import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinJenisNakesDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinJenisNakes: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  kode: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: number;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ver: string;
}
