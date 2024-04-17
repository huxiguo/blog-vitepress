# centOS 7 安装mysql8

从 CentOS 7 系统开始，MariaDB 成为 YUM 源中默认的数据库安装包。如果您的操作系统为 CentOS 7 及以上版本，使用 yum 命令安装 MySQL 包时将无法使用 MySQL。

使用前卸载MariaDB

查看 mariadb 的安装包
```sh
rpm -qa | grep mariadb

# mariadb-libs-5.5.68-1.el7.x86_64
```

显示出安装包则卸载

```sh
rpm -e mariadb-libs-5.5.68-1.el7.x86_64 –nodeps
```

创建文件夹安装mysql `/usr/local/lighthouse/mysql`

```sh
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
sudo rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
```

版本可以在[MySQL](https://dev.mysql.com/downloads/repo/yum/)找到