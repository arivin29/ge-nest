# Maintenance Program API Changes

## Overview
Perubahan pada 2 controller untuk menjadikan read-only API dengan data yang di-generate dari join multiple tables.

---

## 1. Maintenance Program Document

### Endpoint
- **GET** `/maintenance_program_document`
- **GET** `/maintenance_program_document/:id`

### Query SQL
```sql
SELECT
  md.id_maintenance_document,
  md.document_type,          -- 'form' / 'reference'
  md.document_title,
  md.revision,
  md.status_aktif,
  md.id_maintenance,
  mpi.id_maintenance_program_item
FROM erp_amims.maintenance_program_item mpi
JOIN erp_amims.maintenance_document md
  ON md.id_maintenance = mpi.id_maintenance
WHERE mpi.id_maintenance_program = :id
  AND mpi.is_active = 1
ORDER BY md.document_type, md.document_title;
```

### Filter Parameters
- **Required**: `id_maintenance_program` atau `idMaintenanceProgram` (dalam filter)

### Response DTO
```typescript
{
  idMaintenanceDocument: string;
  documentType: string;        // 'form' or 'reference'
  documentTitle: string;
  revision: string;
  statusAktif: string;         // 'yes' or 'no'
  idMaintenance: string;
  idMaintenanceProgramItem: string;
}
```

### Usage Example
```javascript
// GET request
GET /maintenance_program_document?filter={"id_maintenance_program":"xxx-xxx-xxx"}
```

---

## 2. Maintenance Program Material

### Endpoint
- **GET** `/maintenance_program_material`
- **GET** `/maintenance_program_material/:id`

### Query SQL
```sql
SELECT
  mm.item_type,                 -- TOOL / CONSUMABLE / dll
  mm.id_mpart,
  COALESCE(mm.part_number, '') AS part_number,
  COALESCE(mm.item_name, '')   AS item_name,
  mm.unit,
  SUM(mm.quantity)             AS total_qty
FROM erp_amims.maintenance_program_item mpi
JOIN erp_amims.maintenance m
  ON mpi.id_maintenance = m.id_maintenance
JOIN erp_amims.maintenance_material mm
  ON mm.id_maintenance = m.id_maintenance
WHERE mpi.id_maintenance_program = :id
  AND mpi.is_active = 1
GROUP BY
  mm.item_type,
  mm.id_mpart,
  mm.part_number,
  mm.item_name,
  mm.unit
ORDER BY mm.item_type, mm.item_name;
```

### Filter Parameters
- **Required**: `id_maintenance_program` atau `idMaintenanceProgram` (dalam filter)
- **Optional**: `item_type` atau `itemType` (untuk filter berdasarkan tipe item)

### Response DTO
```typescript
{
  itemType: string;            // TOOL, CONSUMABLE, etc.
  idMpart: string;
  partNumber: string;
  itemName: string;
  unit: string;
  totalQty: number;            // Sum dari quantity yang di-group
}
```

### Usage Example
```javascript
// GET all materials
GET /maintenance_program_material?filter={"id_maintenance_program":"xxx-xxx-xxx"}

// GET with item_type filter (TOOL only)
GET /maintenance_program_material?filter={"id_maintenance_program":"xxx-xxx-xxx","item_type":"TOOL"}

// GET with item_type filter (CONSUMABLE only)
GET /maintenance_program_material?filter={"id_maintenance_program":"xxx-xxx-xxx","item_type":"CONSUMABLE"}
```

---

## Changes Summary

### Files Modified

#### maintenance_program_document
- ✅ `src/dto/amims/amims.maintenance_program_document.dto.ts` - Updated DTO structure
- ✅ `src/modules/amims/maintenance_program_document/maintenance_program_document.controller.ts` - Removed POST, PUT, DELETE methods
- ✅ `src/modules/amims/maintenance_program_document/maintenance_program_document.service.ts` - Custom query implementation
- ✅ `src/modules/amims/maintenance_program_document/maintenance_program_document.module.ts` - Updated entity import

#### maintenance_program_material
- ✅ `src/dto/amims/amims.maintenance_program_material.dto.ts` - Updated DTO structure
- ✅ `src/modules/amims/maintenance_program_material/maintenance_program_material.controller.ts` - Removed POST, PUT, DELETE methods
- ✅ `src/modules/amims/maintenance_program_material/maintenance_program_material.service.ts` - Custom query with filter support
- ✅ `src/modules/amims/maintenance_program_material/maintenance_program_material.module.ts` - Updated entity import

### Key Features
1. **Read-Only API** - Hanya GET method yang tersedia
2. **Virtual Tables** - Data di-generate dari join multiple tables, bukan dari tabel fisik
3. **Filtering Support** - Mendukung filter berdasarkan `id_maintenance_program` dan `item_type` (untuk material)
4. **Aggregation** - Material API menghitung total quantity dengan SUM dan GROUP BY
5. **Pagination** - Tetap support pagination seperti API lainnya

### Notes
- Tabel `maintenance_program_document` dan `maintenance_program_material` sudah tidak digunakan lagi
- Data sekarang di-fetch langsung dari relasi `maintenance_program_item` → `maintenance` → `maintenance_document`/`maintenance_material`
- Filter `item_type` pada material API berguna untuk memisahkan TOOL, CONSUMABLE, atau tipe lainnya di client side
