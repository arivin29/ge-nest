import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsLastMaintenance, AmimsMaintenanceCode } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

import { smartQueryEngineJoinMode, smartQueryRawJoinMode, SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { AmimsLastMaintenanceDto } from 'src/dto/amims/amims.last_maintenance.dto';

@Injectable()
export class LastMaintenanceService extends BaseService<AmimsLastMaintenance> {
  constructor(
    @InjectRepository(AmimsLastMaintenance, 'amims')
    repo: Repository<AmimsLastMaintenance>,
    @InjectRepository(AmimsMaintenanceCode, 'amims')
    private readonly maintenanceCodeRepo: Repository<AmimsMaintenanceCode>,
  ) {
    super(repo);
  }

  async findAll(parsed: any) {
    // Get data dari parent service
    const result = await super.findAll(parsed);

    // Inject maintenance data
    if (result.data && result.data.length > 0) {
      const dataWithMaintenance = await Promise.all(
        result.data.map(async (item: any) => {
          if (item.idMaintenance) {
            console.log('🔍 Looking for maintenance with ID:', item.idMaintenance);
            const maintenance = await this.maintenanceCodeRepo.findOne({
              where: { idMaintenanceCode: item.idMaintenance },
            });
            console.log('✅ Found maintenance:', maintenance);
            return {
              ...item,
              maintenance: maintenance || null,
            };
          }
          return item;
        }),
      );

      return {
        data: dataWithMaintenance,
        total: result.total,
      };
    }

    return result;
  }

  async findOne(id: string) {
    // Get data dari parent service
    const result = await super.findOne(id);

    // Inject maintenance data
    if (result && result.idMaintenance) {
      console.log('🔍 [findOne] Looking for maintenance with ID:', result.idMaintenance);
      const maintenance = await this.maintenanceCodeRepo.findOne({
        where: { idMaintenanceCode: result.idMaintenance },
      });
      console.log('✅ [findOne] Found maintenance:', maintenance);
      return {
        ...result,
        maintenance: maintenance || null,
      };
    }

    return result;
  }

  async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsLastMaintenanceDto);
    return smartQueryRawJoinMode(this.repo, 'e', query, AmimsLastMaintenanceDto);
  }
}
