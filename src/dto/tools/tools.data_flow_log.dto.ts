import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsDataFlowLogDto {
  @ApiProperty({ required: true })
  idDataFlowLog: string;

  @ApiProperty({ required: false })
  idDataFlow: string;

  @ApiProperty({ required: false })
  idDataFlowDetail: string;

  @ApiProperty({ required: false })
  actionFlow: string;

  @ApiProperty({ required: false })
  pesan: string;

  @ApiProperty({ required: false })
  idUsers: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  forModuleId: string;
}
