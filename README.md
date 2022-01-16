# Projektaufteilung



## Alexander Töscher
- Entität:   course
- Features:  course-add/edit/search
- Shared:    validator -> enddate-validator
- 
## Lukas Hödl
 - Entität:   member
 - Features:  member-create/edit/search
 - Shared:    validator -> adult-validator

## Patrick Prettenhofer
 - Entität:   fitnessEquipment
 - Features:  fitnessEquipment-add/edit/search
 - Shared:    validator -> equipment-name

## Rick Tauss
 - Entität:   contract
 - Features:  contract-create/search/statistic/validation
 - Shared:    pipes -> currencyFormatter
