import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class DocumentDocumentDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  enableDownload: string;

  @ApiProperty({ required: false })
  @IsOptional()
  fileExt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  fileLocation: string;

  @ApiProperty({ required: false })
  @IsOptional()
  fileName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  forModule: string;

  @ApiProperty({ required: false })
  @IsOptional()
  forModuleId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  forTable: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idDocument: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idUsers: string;

  @ApiProperty({ required: false })
  @IsOptional()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nomor: string;

  @ApiProperty({ required: false })
  @IsOptional()
  revisi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
