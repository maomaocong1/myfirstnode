/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : myphp

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2015-10-11 20:41:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for baidunews
-- ----------------------------
DROP TABLE IF EXISTS `baidunews`;
CREATE TABLE `baidunews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgpath` varchar(255) DEFAULT NULL,
  `newstitle` varchar(255) DEFAULT NULL,
  `newscontent` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `buttonname` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of baidunews
-- ----------------------------
INSERT INTO `baidunews` VALUES ('1', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', '置顶');
INSERT INTO `baidunews` VALUES ('2', '../images/news_2.jpg', '马云揭秘创业导师：他介绍我第一次接触电脑', '据马云描述，恰好是20年前在西雅图，他实现了“人生第一次使用电脑第一次上网”的经历，并“感受到互联网的巨大魅力和市场机会”，回国之后走便走上了创业之路。', '2015-09-26 18:47:28', '网易新闻');
INSERT INTO `baidunews` VALUES ('3', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', '新浪新闻');
INSERT INTO `baidunews` VALUES ('4', '../images/news_2.jpg', '马云揭秘创业导师：他介绍我第一次接触电脑', '据马云描述，恰好是20年前在西雅图，他实现了“人生第一次使用电脑第一次上网”的经历，并“感受到互联网的巨大魅力和市场机会”，回国之后走便走上了创业之路。', '2015-09-26 18:47:28', null);
INSERT INTO `baidunews` VALUES ('5', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', null);
INSERT INTO `baidunews` VALUES ('6', '../images/news_2.jpg', '马云揭秘创业导师：他介绍我第一次接触电脑', '据马云描述，恰好是20年前在西雅图，他实现了“人生第一次使用电脑第一次上网”的经历，并“感受到互联网的巨大魅力和市场机会”，回国之后走便走上了创业之路。', '2015-09-26 18:47:28', null);
INSERT INTO `baidunews` VALUES ('7', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', null);
INSERT INTO `baidunews` VALUES ('8', '../images/news_2.jpg', '马云揭秘创业导师：他介绍我第一次接触电脑', '据马云描述，恰好是20年前在西雅图，他实现了“人生第一次使用电脑第一次上网”的经历，并“感受到互联网的巨大魅力和市场机会”，回国之后走便走上了创业之路。', '2015-09-26 18:47:28', null);
INSERT INTO `baidunews` VALUES ('9', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', null);
INSERT INTO `baidunews` VALUES ('10', '../images/news_2.jpg', '马云揭秘创业导师：他介绍我第一次接触电脑', '据马云描述，恰好是20年前在西雅图，他实现了“人生第一次使用电脑第一次上网”的经历，并“感受到互联网的巨大魅力和市场机会”，回国之后走便走上了创业之路。', '2015-09-26 18:47:28', null);
INSERT INTO `baidunews` VALUES ('11', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', null);
INSERT INTO `baidunews` VALUES ('12', '../images/news_2.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', null);
INSERT INTO `baidunews` VALUES ('13', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', '');
INSERT INTO `baidunews` VALUES ('14', '../images/news_2.jpg', '马云揭秘创业导师：他介绍我第一次接触电脑', '据马云描述，恰好是20年前在西雅图，他实现了“人生第一次使用电脑第一次上网”的经历，并“感受到互联网的巨大魅力和市场机会”，回国之后走便走上了创业之路。', '2015-09-26 18:47:28', null);
INSERT INTO `baidunews` VALUES ('15', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', null);
INSERT INTO `baidunews` VALUES ('16', '../images/news_2.jpg', '马云揭秘创业导师：他介绍我第一次接触电脑', '据马云描述，恰好是20年前在西雅图，他实现了“人生第一次使用电脑第一次上网”的经历，并“感受到互联网的巨大魅力和市场机会”，回国之后走便走上了创业之路。', '2015-09-26 18:47:28', null);
INSERT INTO `baidunews` VALUES ('17', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', null);
INSERT INTO `baidunews` VALUES ('18', '../images/news_2.jpg', '马云揭秘创业导师：他介绍我第一次接触电脑', '据马云描述，恰好是20年前在西雅图，他实现了“人生第一次使用电脑第一次上网”的经历，并“感受到互联网的巨大魅力和市场机会”，回国之后走便走上了创业之路。', '2015-09-26 18:47:28', null);
INSERT INTO `baidunews` VALUES ('19', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', null);
INSERT INTO `baidunews` VALUES ('20', '../images/news_2.jpg', '马云揭秘创业导师：他介绍我第一次接触电脑', '据马云描述，恰好是20年前在西雅图，他实现了“人生第一次使用电脑第一次上网”的经历，并“感受到互联网的巨大魅力和市场机会”，回国之后走便走上了创业之路。', '2015-09-26 18:47:28', null);
INSERT INTO `baidunews` VALUES ('21', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多次掌声。', '2015-09-27 18:43:48', null);
INSERT INTO `baidunews` VALUES ('22', '../images/news_2.jpg', '马云揭秘创业导师：他介绍我第一次接触电脑', '据马云描述，恰好是20年前在西雅图，他实现了“人生第一次使用电脑第一次上网”的经历，并“感受到互联网的巨大魅力和市场机会”，回国之后走便走上了创业之路。', '2015-09-26 18:47:27', '');
INSERT INTO `baidunews` VALUES ('24', '../images/news_1.jpg', '习近平在联合国发展峰会上讲了啥 赢得满场掌声1？', '中国国家主席习近平26日上午在纽约联合国总部出席联合国发展峰会，发表题为《谋共同永续发展 做合作共赢伙伴》的重要讲话。这是习近平就任中国最高领导人之后首次亮相联合国总部，讲话赢得全场多1次掌声。', '0000-00-00 00:00:00', '置顶1');
