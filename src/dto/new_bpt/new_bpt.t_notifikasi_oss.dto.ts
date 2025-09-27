import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTNotifikasiOssDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTNotifikasiOss: number; // PK

  @ApiProperty({ required: true })
  namaFile: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
