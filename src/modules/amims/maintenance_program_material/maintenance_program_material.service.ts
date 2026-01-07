import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { AmimsMaintenanceProgramItem } from 'src/entities/amims';
import { AmimsMaintenanceProgramMaterialDto } from 'src/dto/amims/amims.maintenance_program_material.dto';

@Injectable()
export class MaintenanceProgramMaterialService {
  constructor(
    @InjectRepository(AmimsMaintenanceProgramItem, 'amims')
    private readonly maintenanceProgramItemRepo: Repository<AmimsMaintenanceProgramItem>,
    @InjectDataSource('amims')
    private readonly dataSource: DataSource,
  ) {}

  async findAll(parsed: any): Promise<{ data: AmimsMaintenanceProgramMaterialDto[]; total: number }> {
    const { pageIndex, pageSize, filter } = parsed;
    const idMaintenanceProgram = filter?.id_maintenance_program || filter?.idMaintenanceProgram;
    const itemType = filter?.item_type || filter?.itemType;

    if (!idMaintenanceProgram) {
      return { data: [], total: 0 };
    }

    // Build WHERE clause with item_type filter
    let whereClause = `
      WHERE mpi.id_maintenance_program = ?
        AND mpi.is_active = 1
    `;
    const params: any[] = [idMaintenanceProgram];

    if (itemType) {
      whereClause += ` AND mm.item_type = ?`;
      params.push(itemType);
    }

    const query = `
      SELECT
        mm.item_type as itemType,
        mm.id_mpart as idMpart,
        COALESCE(mm.part_number, '') AS partNumber,
        COALESCE(mm.item_name, '') AS itemName,
        mm.unit,
        SUM(mm.quantity) AS totalQty
      FROM erp_amims.maintenance_program_item mpi
      JOIN erp_amims.maintenance m
        ON mpi.id_maintenance = m.id_maintenance
      JOIN erp_amims.maintenance_material mm
        ON mm.id_maintenance = m.id_maintenance
      ${whereClause}
      GROUP BY
        mm.item_type,
        mm.id_mpart,
        mm.part_number,
        mm.item_name,
        mm.unit
      ORDER BY mm.item_type, mm.item_name
      LIMIT ? OFFSET ?
    `;

    const countQuery = `
      SELECT COUNT(DISTINCT CONCAT(mm.item_type, '-', mm.id_mpart, '-', COALESCE(mm.part_number, ''))) as total
      FROM erp_amims.maintenance_program_item mpi
      JOIN erp_amims.maintenance m
        ON mpi.id_maintenance = m.id_maintenance
      JOIN erp_amims.maintenance_material mm
        ON mm.id_maintenance = m.id_maintenance
      ${whereClause}
    `;

    const offset = (pageIndex - 1) * pageSize;
    const data = await this.dataSource.query(query, [...params, pageSize, offset]);
    const countResult = await this.dataSource.query(countQuery, params);
    const total = countResult[0]?.total || 0;

    return { data, total };
  }

  async findOne(id: string): Promise<AmimsMaintenanceProgramMaterialDto | null> {
    // For findOne, we'll use id_mpart as the identifier
    const query = `
      SELECT
        mm.item_type as itemType,
        mm.id_mpart as idMpart,
        COALESCE(mm.part_number, '') AS partNumber,
        COALESCE(mm.item_name, '') AS itemName,
        mm.unit,
        SUM(mm.quantity) AS totalQty
      FROM erp_amims.maintenance_program_item mpi
      JOIN erp_amims.maintenance m
        ON mpi.id_maintenance = m.id_maintenance
      JOIN erp_amims.maintenance_material mm
        ON mm.id_maintenance = m.id_maintenance
      WHERE mm.id_mpart = ?
        AND mpi.is_active = 1
      GROUP BY
        mm.item_type,
        mm.id_mpart,
        mm.part_number,
        mm.item_name,
        mm.unit
      LIMIT 1
    `;

    const result = await this.dataSource.query(query, [id]);
    return result[0] || null;
  }
}
