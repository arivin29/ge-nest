import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsDataFlowDetailDto {
  @ApiProperty({ required: true })
  idDataFlowDetail: string;

  @ApiProperty({ required: false })
  idDataFlow: string;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: false })
  idPegawai: string;

  @ApiProperty({ required: false })
  sebagai: string;

  @ApiProperty({ required: false })
  buttonNextText: string;

  @ApiProperty({ required: false })
  pesan: string;

  @ApiProperty({ required: false })
  menuTest: string;

  @ApiProperty({ required: false })
  menuName: string;

  @ApiProperty({ required: false })
  enableUpdate: string;

  @ApiProperty({ required: false })
  reject: number;

  @ApiProperty({ required: false })
  orderBy: string;

  @ApiProperty({ required: false })
  keterangan: string;

  @ApiProperty({ required: false })
  createdAt: any;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  idJabatan: string;
}
