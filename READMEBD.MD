// Executé à Tenado
ALTER TABLE `pre_scolaires`  ADD `NbLatrine` INT(11) NULL  AFTER `NbTotalSalleActivite`,  ADD `NbPoubelle` INT(11) NULL  AFTER `NbLatrine`,  ADD `ExistanceBacOrdure` TINYINT NULL  AFTER `NbPoubelle`,  ADD `ExistanceSourceEauAmeliore` TINYINT NULL  AFTER `ExistanceBacOrdure`;
ALTER TABLE `post_primaires`  ADD `NbLatrine` INT(11) NULL  AFTER `NbTotalSalleActivite`,  ADD `NbPoubelle` INT(11) NULL  AFTER `NbLatrine`,  ADD `ExistanceBacOrdure` TINYINT NULL  AFTER `NbPoubelle`,  ADD `ExistanceSourceEauAmeliore` TINYINT NULL  AFTER `ExistanceBacOrdure`;
ALTER TABLE `primaires`  ADD `NbLatrine` INT(11) NULL  AFTER `NbTotalSalleActivite`,  ADD `NbPoubelle` INT(11) NULL  AFTER `NbLatrine`,  ADD `ExistanceBacOrdure` TINYINT NULL  AFTER `NbPoubelle`,  ADD `ExistanceSourceEauAmeliore` TINYINT NULL  AFTER `ExistanceBacOrdure`;




// Local
UPDATE `indicateurs` SET `province_id`=(select province_id from communes where id=indicateurs.commune_id)
UPDATE `indicateurs` SET `region_id`=(select region_id from provinces where id=indicateurs.province_id)