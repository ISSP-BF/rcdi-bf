// Executé à Tenado
ALTER TABLE `pre_scolaires`  ADD `NbLatrine` INT(11) NULL  AFTER `NbTotalSalleActivite`,  ADD `NbPoubelle` INT(11) NULL  AFTER `NbLatrine`,  ADD `ExistanceBacOrdure` TINYINT NULL  AFTER `NbPoubelle`,  ADD `ExistanceSourceEauAmeliore` TINYINT NULL  AFTER `ExistanceBacOrdure`;
ALTER TABLE `post_primaires`  ADD `NbLatrine` INT(11) NULL  AFTER `NbTotalSalleActivite`,  ADD `NbPoubelle` INT(11) NULL  AFTER `NbLatrine`,  ADD `ExistanceBacOrdure` TINYINT NULL  AFTER `NbPoubelle`,  ADD `ExistanceSourceEauAmeliore` TINYINT NULL  AFTER `ExistanceBacOrdure`;
ALTER TABLE `primaires`  ADD `NbLatrine` INT(11) NULL  AFTER `NbTotalSalleActivite`,  ADD `NbPoubelle` INT(11) NULL  AFTER `NbLatrine`,  ADD `ExistanceBacOrdure` TINYINT NULL  AFTER `NbPoubelle`,  ADD `ExistanceSourceEauAmeliore` TINYINT NULL  AFTER `ExistanceBacOrdure`;




// Local
UPDATE `indicateurs` SET `province_id`=(select province_id from communes where id=indicateurs.commune_id)
UPDATE `indicateurs` SET `region_id`=(select region_id from provinces where id=indicateurs.province_id)

// Données Santé
Importantion

<!-- SELECT `id`, `region_id`,(select region from regions where formation_sanitaires.region_id=id) as region , `province_id`,(select province from provinces where formation_sanitaires.province_id=id) as province , `commune_id`,(select commune from communes where formation_sanitaires.commune_id=id) as commune , `district_id`, `code`, `nom_structure`, `lon`, `lat`, `type`, `adresse`, `adresse_postale`, `tel`, `fax`, `email`, `titre`, `proprietaire`, `qualificat`, `n_decision`, `date_autorisation`, `observations_qualification`, `observations_structure`, `autre_observations`, `date_fermeture`, `updated_by`, `created_by`, `updated`, `created_at`, `updated_at` FROM `formation_sanitaires` WHERE 1 -->