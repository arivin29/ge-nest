import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UserGroupAccessDto {
  @ApiProperty({ required: true })
  
  idUserGroupAccess: string;
  @ApiProperty({ required: true })
  
  idUserGroup: string;
  @ApiProperty({ required: true })
  
  idModule: string;
  @ApiProperty({ required: false })
  @IsOptional()
  canList: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  canAdd: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  canEdit: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  canDelete: boolean;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
}
