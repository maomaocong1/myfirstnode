/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : myphp

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2015-10-11 20:41:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for usrinfo
-- ----------------------------
DROP TABLE IF EXISTS `usrinfo`;
CREATE TABLE `usrinfo` (
  `ID` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of usrinfo
-- ----------------------------
INSERT INTO `usrinfo` VALUES ('1', 'admin', 'admin');
