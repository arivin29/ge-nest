import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLibUploadDto {
  @ApiProperty({ required: true })
  idLibUpload: string;

  @ApiProperty({ required: false })
  fileName: string;

  @ApiProperty({ required: false })
  forModule: string;

  @ApiProperty({ required: false })
  idModule: string;

  @ApiProperty({ required: false })
  fileNumber: string;

  @ApiProperty({ required: false })
  category: string;

  @ApiProperty({ required: false })
  fileDate: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
