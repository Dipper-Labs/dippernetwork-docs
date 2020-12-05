---
order: 1
---

# 安装

## 最新版本

Dipper Network 主网的最新版本是[v1.0.1](https://github.com/Dipper-Labs/Dipper-Protocol/releases/tag/mainnet-v1.0.1)

## 服务器配置

* CPU 核数：2
* 内存：8GB
* 磁盘：500GB SSD
* 操作系统：Ubuntu 20.04
* 带宽：10Mbps
* 开放端口：26656

## 安装`go`

:::tip
编译安装 Dipper Network Hub 软件依赖 **Go 1.13+**。
:::

按照[官方文档](https://golang.org/doc/install)安装`go`。

别忘记设置您的$GOPATH，$GOBIN和$PATH环境变量，例如：

```bash
mkdir -p $HOME/go/bin
echo "export GOPATH=$HOME/go" >> ~/.bashrc
source ~/.bashrc
echo "export GOBIN=$GOPATH/bin" >> ~/.bashrc
source ~/.bashrc
echo "export PATH=$PATH:$GOBIN" >> ~/.bashrc
source ~/.bashrc
```

确认已成功安装`go`

```bash
go version
```

## 安装`Dipper Network Hub`

正确配置`go`之后，您应该可以编译并运行`Dipper Network Hub`了。

请确保您的服务器可以访问 google.com，因为我们的项目依赖于google提供的某些库（如果您无法访问google.com，也可以尝试添加代理：`export GOPROXY=https://goproxy.io`）

```bash
git clone https://github.com/Dipper-Labs/Dipper-Protocol.git
cd Dipper-Protocol && git checkout mainnet-v1.0.1
make install
```

如果环境变量配置无误，则通过运行以上命令即可完成`dipd`的安装。现在检查您的`dipd`版本是否正确：

```bash
dipd version
dipcli version
```