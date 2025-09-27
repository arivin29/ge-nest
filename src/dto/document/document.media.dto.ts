import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class DocumentMediaDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idMedia: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idUser: string;

  @ApiProperty({ required: false })
  @IsOptional()
  modul: string;

  @ApiProperty({ required: false })
  @IsOptional()
  moduleId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaFile: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
