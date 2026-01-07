import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { AmimsMaintenanceProgramItem } from 'src/entities/amims';
import { AmimsMaintenanceProgramDocumentDto } from 'src/dto/amims/amims.maintenance_program_document.dto';

@Injectable()
export class MaintenanceProgramDocumentService {
  constructor(
    @InjectRepository(AmimsMaintenanceProgramItem, 'amims')
    private readonly maintenanceProgramItemRepo: Repository<AmimsMaintenanceProgramItem>,
    @InjectDataSource('amims')
    private readonly dataSource: DataSource,
  ) {}

  async findAll(parsed: any): Promise<{ data: AmimsMaintenanceProgramDocumentDto[]; total: number }> {
    const { pageIndex, pageSize, filter } = parsed;
    const idMaintenanceProgram = filter?.id_maintenance_program || filter?.idMaintenanceProgram;

    if (!idMaintenanceProgram) {
      return { data: [], total: 0 };
    }

    const query = `
      SELECT
        md.id_maintenance_document as idMaintenanceDocument,
        md.document_type as documentType,
        md.document_title as documentTitle,
        md.revision,
        md.status_aktif as statusAktif,
        md.id_maintenance as idMaintenance,
        mpi.id_maintenance_program_item as idMaintenanceProgramItem
      FROM erp_amims.maintenance_program_item mpi
      JOIN erp_amims.maintenance_document md
        ON md.id_maintenance = mpi.id_maintenance
      WHERE mpi.id_maintenance_program = ?
        AND mpi.is_active = 1
      ORDER BY md.document_type, md.document_title
      LIMIT ? OFFSET ?
    `;

    const countQuery = `
      SELECT COUNT(*) as total
      FROM erp_amims.maintenance_program_item mpi
      JOIN erp_amims.maintenance_document md
        ON md.id_maintenance = mpi.id_maintenance
      WHERE mpi.id_maintenance_program = ?
        AND mpi.is_active = 1
    `;

    const offset = (pageIndex - 1) * pageSize;
    const data = await this.dataSource.query(query, [idMaintenanceProgram, pageSize, offset]);
    const countResult = await this.dataSource.query(countQuery, [idMaintenanceProgram]);
    const total = countResult[0]?.total || 0;

    return { data, total };
  }

  async findOne(id: string): Promise<AmimsMaintenanceProgramDocumentDto | null> {
    const query = `
      SELECT
        md.id_maintenance_document as idMaintenanceDocument,
        md.document_type as documentType,
        md.document_title as documentTitle,
        md.revision,
        md.status_aktif as statusAktif,
        md.id_maintenance as idMaintenance,
        mpi.id_maintenance_program_item as idMaintenanceProgramItem
      FROM erp_amims.maintenance_program_item mpi
      JOIN erp_amims.maintenance_document md
        ON md.id_maintenance = mpi.id_maintenance
      WHERE md.id_maintenance_document = ?
        AND mpi.is_active = 1
      LIMIT 1
    `;

    const result = await this.dataSource.query(query, [id]);
    return result[0] || null;
  }
}
