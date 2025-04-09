
                import { ApiProperty } from '@nestjs/swagger';
                import { ContractSiteDto } from './contract_site.dto';
                import { ContractDto } from '../../contract/dto/contract.dto';
import { ClientSiteDto } from '../../client_site/dto/client_site.dto';

                export class ContractSiteReportDto extends ContractSiteDto {
                  @ApiProperty({ type: ContractDto })
  contract: ContractDto;

  @ApiProperty({ type: ClientSiteDto })
  clientSite: ClientSiteDto;
                }
                