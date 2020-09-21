-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.6-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para encuestas
CREATE DATABASE IF NOT EXISTS `encuestas` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `encuestas`;

-- Volcando estructura para tabla encuestas.preguntas
CREATE TABLE IF NOT EXISTS `preguntas` (
  `id` int(11) NOT NULL,
  `servicio` int(11) NOT NULL,
  `sector` int(11) NOT NULL,
  `pregunta` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Servicio` (`servicio`),
  KEY `Sector` (`sector`),
  CONSTRAINT `Sector` FOREIGN KEY (`sector`) REFERENCES `sectores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Servicio` FOREIGN KEY (`servicio`) REFERENCES `servicios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla encuestas.preguntas: ~18 rows (aproximadamente)
DELETE FROM `preguntas`;
/*!40000 ALTER TABLE `preguntas` DISABLE KEYS */;
INSERT INTO `preguntas` (`id`, `servicio`, `sector`, `pregunta`) VALUES
	(1, 1, 1, '¿Dispone de ordenador en casa?'),
	(2, 1, 1, 'Salario mensual total'),
	(3, 1, 2, '¿Hace frío en las clases?'),
	(4, 1, 2, '¿Son adecuadas las sillas?'),
	(5, 1, 3, '¿Funciona el proyector correctamente?'),
	(6, 1, 3, '¿Hay impresora en la clase?'),
	(7, 2, 1, '¿Han tenido problemas para hablar con los profesores?'),
	(8, 2, 1, '¿Disponen de teléfono para contactar con ellos?'),
	(9, 2, 2, '¿Hay ordenadores disponibles para alumnos?'),
	(10, 2, 2, '¿La cantidad de ordenadores es suficiente?'),
	(11, 2, 3, '¿El temario es suficiente para los alumnos?'),
	(12, 2, 3, '¿Dispone de pizarra?'),
	(13, 3, 1, '¿Alguno miembro de la familia esta interesado en acudir a clase?'),
	(14, 3, 1, '¿Crees que el ciclo formativo es suficiente?'),
	(15, 3, 2, '¿Crees que el contenido es suficiente en cada módulo?'),
	(16, 3, 2, '¿Crees que el ciclo formativo tiene futuro?'),
	(17, 3, 3, '¿Crees que los temas impartidos son adecuados para cada módulo?'),
	(18, 3, 3, '¿Crees que hay que modernizar el temario de los módulos?');
/*!40000 ALTER TABLE `preguntas` ENABLE KEYS */;

-- Volcando estructura para tabla encuestas.respuesta
CREATE TABLE IF NOT EXISTS `respuesta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pregunta` int(11) NOT NULL,
  `nota` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_pregunta` (`id_pregunta`),
  CONSTRAINT `FK_pregunta` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=249 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla encuestas.respuesta: ~199 rows (aproximadamente)
DELETE FROM `respuesta`;
/*!40000 ALTER TABLE `respuesta` DISABLE KEYS */;
INSERT INTO `respuesta` (`id`, `id_pregunta`, `nota`) VALUES
	(13, 1, 3),
	(14, 2, 3),
	(15, 7, 4),
	(16, 8, 4),
	(17, 13, 4),
	(18, 14, 3),
	(33, 5, 4),
	(34, 6, 5),
	(35, 11, 3),
	(36, 12, 1),
	(37, 17, 4),
	(38, 18, 5),
	(39, 1, 4),
	(40, 2, 3),
	(41, 7, 5),
	(42, 8, 3),
	(43, 13, 4),
	(44, 14, 3),
	(51, 1, 4),
	(52, 2, 5),
	(53, 7, 4),
	(54, 8, 3),
	(55, 13, 4),
	(56, 14, 4),
	(57, 1, 3),
	(58, 2, 5),
	(59, 7, 2),
	(60, 8, 3),
	(61, 13, 3),
	(62, 14, 4),
	(63, 1, 5),
	(64, 2, 2),
	(65, 7, 2),
	(66, 8, 4),
	(67, 13, 3),
	(68, 14, 2),
	(69, 1, 5),
	(70, 2, 5),
	(71, 7, 2),
	(72, 8, 4),
	(73, 13, 3),
	(74, 14, 4),
	(75, 3, 4),
	(76, 4, 3),
	(77, 9, 3),
	(78, 10, 5),
	(79, 15, 3),
	(80, 16, 5),
	(81, 3, 3),
	(82, 4, 3),
	(83, 9, 3),
	(84, 10, 2),
	(85, 15, 3),
	(86, 16, 5),
	(87, 3, 3),
	(88, 4, 5),
	(89, 9, 3),
	(90, 10, 2),
	(91, 15, 3),
	(92, 16, 2),
	(93, 3, 3),
	(94, 4, 2),
	(95, 9, 3),
	(96, 10, 2),
	(97, 15, 3),
	(98, 16, 2),
	(99, 3, 2),
	(100, 4, 5),
	(101, 9, 3),
	(102, 10, 2),
	(103, 15, 2),
	(104, 16, 2),
	(105, 3, 2),
	(106, 4, 2),
	(107, 9, 3),
	(108, 10, 2),
	(109, 15, 2),
	(110, 16, 4),
	(111, 5, 5),
	(112, 6, 1),
	(113, 11, 3),
	(114, 12, 1),
	(115, 17, 1),
	(116, 18, 1),
	(117, 5, 5),
	(118, 6, 1),
	(119, 11, 3),
	(120, 12, 1),
	(121, 17, 1),
	(122, 18, 4),
	(123, 5, 5),
	(124, 6, 1),
	(125, 11, 3),
	(126, 12, 4),
	(127, 17, 1),
	(128, 18, 4),
	(129, 5, 3),
	(130, 6, 4),
	(131, 11, 2),
	(132, 12, 4),
	(133, 17, 1),
	(134, 18, 4),
	(135, 5, 3),
	(136, 6, 4),
	(137, 11, 4),
	(138, 12, 4),
	(139, 17, 1),
	(140, 18, 4),
	(141, 5, 3),
	(142, 6, 4),
	(143, 11, 4),
	(144, 12, 4),
	(145, 17, 4),
	(146, 18, 4),
	(147, 5, 3),
	(148, 6, 4),
	(149, 11, 4),
	(150, 12, 4),
	(151, 17, 4),
	(152, 18, 2),
	(153, 5, 3),
	(154, 6, 2),
	(155, 11, 4),
	(156, 12, 4),
	(157, 17, 4),
	(158, 18, 2),
	(159, 1, 4),
	(160, 2, 5),
	(161, 7, 3),
	(162, 8, 3),
	(163, 13, 5),
	(164, 14, 4),
	(165, 1, 4),
	(166, 2, 4),
	(167, 7, 1),
	(168, 8, 3),
	(169, 13, 4),
	(170, 14, 5),
	(171, 5, 4),
	(172, 6, 5),
	(173, 11, 5),
	(174, 12, 5),
	(175, 17, 3),
	(176, 18, 4),
	(177, 3, 4),
	(178, 4, 3),
	(179, 9, 5),
	(180, 10, 4),
	(181, 15, 5),
	(182, 16, 5),
	(183, 3, 4),
	(184, 4, 5),
	(185, 9, 3),
	(186, 10, 5),
	(187, 15, 5),
	(188, 16, 1),
	(189, 1, 4),
	(190, 2, 5),
	(191, 7, 5),
	(192, 8, 5),
	(193, 13, 4),
	(194, 14, 1),
	(195, 5, 5),
	(196, 6, 4),
	(197, 11, 4),
	(198, 12, 4),
	(199, 17, 5),
	(200, 18, 4),
	(201, 5, 5),
	(202, 6, 5),
	(203, 11, 4),
	(204, 12, 5),
	(205, 17, 4),
	(206, 18, 4),
	(207, 3, 5),
	(208, 4, 5),
	(209, 9, 4),
	(210, 10, 5),
	(211, 15, 4),
	(212, 16, 4),
	(213, 1, 5),
	(214, 2, 5),
	(215, 7, 4),
	(216, 8, 4),
	(217, 13, 3),
	(218, 14, 5),
	(219, 3, 1),
	(220, 4, 1),
	(221, 9, 1),
	(222, 10, 1),
	(223, 15, 1),
	(224, 16, 1),
	(225, 5, 1),
	(226, 6, 1),
	(227, 11, 1),
	(228, 12, 1),
	(229, 17, 1),
	(230, 18, 1),
	(231, 1, 4),
	(232, 2, 4),
	(233, 7, 5),
	(234, 8, 2),
	(235, 13, 5),
	(236, 14, 5),
	(237, 1, 4),
	(238, 2, 2),
	(239, 7, 5),
	(240, 8, 5),
	(241, 13, 1),
	(242, 14, 1),
	(243, 1, 4),
	(244, 2, 5),
	(245, 7, 4),
	(246, 8, 3),
	(247, 13, 3),
	(248, 14, 3);
/*!40000 ALTER TABLE `respuesta` ENABLE KEYS */;

-- Volcando estructura para tabla encuestas.sectores
CREATE TABLE IF NOT EXISTS `sectores` (
  `id` int(11) NOT NULL,
  `sector` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla encuestas.sectores: ~2 rows (aproximadamente)
DELETE FROM `sectores`;
/*!40000 ALTER TABLE `sectores` DISABLE KEYS */;
INSERT INTO `sectores` (`id`, `sector`) VALUES
	(1, 'Familias'),
	(2, 'Alumnos'),
	(3, 'Profesores');
/*!40000 ALTER TABLE `sectores` ENABLE KEYS */;

-- Volcando estructura para tabla encuestas.servicios
CREATE TABLE IF NOT EXISTS `servicios` (
  `id` int(11) NOT NULL,
  `servicio` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla encuestas.servicios: ~3 rows (aproximadamente)
DELETE FROM `servicios`;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` (`id`, `servicio`) VALUES
	(1, 'Instalaciones'),
	(2, 'Recursos'),
	(3, 'Oferta Educativa');
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
