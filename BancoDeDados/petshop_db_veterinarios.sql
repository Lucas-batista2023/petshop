CREATE DATABASE  IF NOT EXISTS `petshop_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `petshop_db`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: petshop_db
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `veterinarios`
--

DROP TABLE IF EXISTS `veterinarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veterinarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `especialidade` varchar(100) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veterinarios`
--

LOCK TABLES `veterinarios` WRITE;
/*!40000 ALTER TABLE `veterinarios` DISABLE KEYS */;
INSERT INTO `veterinarios` VALUES (1,'Dr. Carlos Souza','Clínica Geral','1111111111','carlos.souza@example.com'),(2,'Dra. Fernanda Lima','Cardiologia','2222222222','fernanda.lima@example.com'),(3,'Dr. João Pedro','Dermatologia','3333333333','joao.pedro@example.com'),(4,'Dra. Ana Clara','Oftalmologia','4444444444','ana.clara@example.com'),(5,'Dr. Marcos Paulo','Ortopedia','5555555555','marcos.paulo@example.com'),(6,'Dra. Luiza Torres','Clínica Geral','6666666666','luiza.torres@example.com'),(7,'Dr. Ricardo Almeida','Neurologia','7777777777','ricardo.almeida@example.com'),(8,'Dra. Gabriela Santos','Oncologia','8888888888','gabriela.santos@example.com'),(9,'Dr. Eduardo Barros','Clínica Geral','9999999999','eduardo.barros@example.com'),(10,'Dra. Mariana Silva','Endocrinologia','1010101010','mariana.silva@example.com'),(11,'Dr. Felipe Costa','Hematologia','1212121212','felipe.costa@example.com'),(12,'Dra. Sofia Mendes','Cardiologia','1313131313','sofia.mendes@example.com'),(13,'Dr. Gustavo Ferreira','Clínica Geral','1414141414','gustavo.ferreira@example.com'),(14,'Dra. Camila Nunes','Cirurgia','1515151515','camila.nunes@example.com'),(15,'Dr. André Oliveira','Comportamental','1616161616','andre.oliveira@example.com');
/*!40000 ALTER TABLE `veterinarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-08  0:51:39
