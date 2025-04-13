import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class DocumentDocumentDto {
  @ApiProperty({ required: true })
  idDocument: string;

  @ApiProperty({ required: false })
  forModule: string;

  @ApiProperty({ required: false })
  forTable: string;

  @ApiProperty({ required: false })
  forModuleId: string;

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
  revisi: string;

  @ApiProperty({ required: false })
  nomor: string;

  @ApiProperty({ required: false })
  tanggal: string;

  @ApiProperty({ required: false })
  idUsers: string;

  @ApiProperty({ required: false })
  fileName: string;

  @ApiProperty({ required: false })
  fileExt: string;

  @ApiProperty({ required: false })
  fileLocation: string;

  @ApiProperty({ required: false })
  enableDownload: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: any;
}
