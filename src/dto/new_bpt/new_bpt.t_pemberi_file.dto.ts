import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPemberiFileDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  dateUpload: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTPemberiKolom: number; // PK

  @ApiProperty({ required: true })
  namaFile: string;

  @ApiProperty({ required: true })
  note: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
