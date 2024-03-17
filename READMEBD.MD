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


ALTER TABLE `provinces`  ADD `defaut` TINYINT NULL DEFAULT NULL  AFTER `lat`;
ALTER TABLE `regions` ADD `defaut` TINYINT NULL DEFAULT NULL AFTER `users_id`
ALTER TABLE `donnees` ADD `localisation_id` INT(11) NULL AFTER `sous_indicateur_id`;

ALTER TABLE `communes` ADD `lat` VARCHAR(255) NULL AFTER `commune`
ALTER TABLE `communes` ADD `lon` VARCHAR(255) NULL AFTER `commune`

UPDATE `formation_sanitaires` SET `commune_id`=(SELECT id from communes where communes.province_id=formation_sanitaires.province_id)


ALTER TABLE `communes` ADD `categorie` INT(11) NULL AFTER `defaut`, ADD `urlSiteWeb` VARCHAR(255) NULL AFTER `categorie`;


SELECT * FROM `donnees`,indicateurs,sous_groupes WHERE donnees.indicateur_id=indicateurs.id and sous_groupes.id=indicateurs.sous_groupe_id

20240303
ALTER TABLE `dashboards` CHANGE `description` `description` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL;
20240310
ALTER TABLE `dashboard_items` ADD `type_seuil` ENUM('VALEUR_REFERENCE','DATE_REFERENCE','MOYENNE') NULL AFTER `description`, ADD `seuil_valeur_reference` FLOAT NULL AFTER `type_seuil`, ADD `seuil_periode` ENUM('TRIMESTRIEL','MENSUEL','ANNUEL') NULL AFTER `seuil_valeur_reference`, ADD `seuil_periode_value` INT(11) NULL AFTER `seuil_periode`, ADD `seuil_annee` INT(11) NULL AFTER `seuil_periode_value`, ADD `seuil_couleur` VARCHAR(255) NULL AFTER `seuil_annee`;
ALTER TABLE `dashboard_items` CHANGE `seuil_periode` `seuil_periode` ENUM('TRIMESTRIEL','MENSUEL','ANNUEL','SEMESTRIEL') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL;


exportation des donnees

SELECT donnees.`id`, `indicateur_id`,indicateurs.libelle as libelle_indicateur, `sous_indicateur_id`, `localisation_id`, CASE indicateurs.groupe_id WHEN 3 THEN (SELECT nom_structure FROM ecoles WHERE id=donnees.localisation_id) WHEN 2 THEN (SELECT nom_structure FROM formation_sanitaires WHERE id=donnees.localisation_id) ELSE '' END as localisation, `valeur`, donnees.`periode`, donnees.`periode_value`, donnees.`annee`, donnees.`source`, donnees.`updated_by`, donnees.`created_by`, donnees.`updated`, donnees.`created_at`, donnees.`updated_at` FROM `donnees`,indicateurs WHERE donnees.indicateur_id=indicateurs.id

ALTER TABLE `dashboard_items` ADD `seuil_segment_list` TEXT NULL AFTER `seuil_couleur`;
ALTER TABLE `dashboard_items` CHANGE `type_seuil` `type_seuil` ENUM('VALEUR_REFERENCE','DATE_REFERENCE','MOYENNE','INTERVALLE') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL;


SELECT donnees.*,indicateurs.libelle as indicateur,(select libelle from groupes where groupes.id=indicateurs.groupe_id) as groupe, (select libelle from sous_groupes where sous_groupes.id=indicateurs.sous_groupe_id) as sous_groupe FROM `donnees`, indicateurs  WHERE donnees.indicateur_id=indicateurs.id