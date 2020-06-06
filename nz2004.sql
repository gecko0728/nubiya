# Host: localhost  (Version: 5.0.45-community-nt)
# Date: 2020-06-04 21:16:05
# Generator: MySQL-Front 5.3  (Build 4.43)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "shop"
#

DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL auto_increment,
  `name` text,
  `price` int(11) default NULL,
  `num` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

#
# Data for table "shop"
#

INSERT INTO `shop` VALUES (1,'鸡架',5,20),(2,'鸡叉骨',20,20),(3,'鸡排',20,20),(4,'烤肠',2,100),(5,'靠冷面',6,100),(6,'靠冷面',6,100),(7,'鸡排',55,55),(8,'鸡排',20,20);

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL auto_increment,
  `name` text,
  `pwd` text,
  PRIMARY KEY  (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

INSERT INTO `user` VALUES (1,'ssss','sss'),(2,'999','666');
