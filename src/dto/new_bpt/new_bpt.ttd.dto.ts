import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTtdDto {
  @ApiProperty({ required: true, description: 'Primary Key' })
  idTtd: number; // PK

  @ApiProperty({ required: true })
  jabatan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  kop: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  nik: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sk: string;

  @ApiProperty({ required: true })
  status: boolean;
}
