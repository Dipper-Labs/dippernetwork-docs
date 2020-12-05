---
order: 1
---

# 简介

dipd可执行程序是运行DipperNetwork节点的入口，包括验证人节点和其他全节点都需要通过安装dipd，并启动守护进程来加入到DipperNetwork网络。你也可以使用dipd在本地启动自己的测试网络。

## 硬件要求

建议在Linux服务器上运行DipperNetwork节点。

### 最低硬件要求

- 2 CPU
- 内存: 8GB
- 磁盘: 500GB SSD
- 系统: Ubuntu 20.04 LTS
- 带宽: 20Mbps
- 允许TCP端口26656和26657的所有传入连接

## 主目录

主目录是dipd节点的工作目录。主目录包含所有配置信息和节点运行的所有数据。

在`dipd`命令中，可以使用标识`--home`来指定节点的主目录。如果在同一台计算机上运行多个节点，则需要为其指定不同的主目录。如果dipd中未指定`--home`标识，则默认使用`$HOME/.dipd`作为主目录。

`dipd init`命令负责初始化指定的`--home`目录并创建默认配置文件。除`dipd init`命令外，任何其他`dipd`子命令使用的主目录必须初始化，否则将报错。

dipd节点的数据存储在主目录的“ data”目录中，包括区块链数据，应用程序层数据和索引数据。

所有配置文件都存储在`<home-dir>/config`目录中：

### genesis.json

genesis.json定义了创世块数据，该数据定义了系统参数，例如chain_id，共识参数，初始帐户通证分配，验证人的创建以及各模块的参数。详细信息参见[genesis-file](../concepts/genesis-file.md)。

### node_key.json

node_key.json is used to store the node's key. The node-id queried by `dipd tendermint show-node-id` is derived by the key, which is used to indicate the unique identity of the node. It is used in p2p connection.

node_key.json用于存储节点的密钥。`dipd tendermint show-node-id`查询的节点ID由该密钥派生，该ID是节点的唯一标识。它用于p2p连接。

### priv_validator.json

pri_validator.json是[Tendermint Key](../concepts/validator-faq.md#tendermint-密钥)文件，验证人节点将在每轮共识投票中使用该文件来签署Pre-vote/Pre-commit。随着共识的进行，tendermint共识引擎将不断更新`last_height` /`last_round` /`last_step`值。

### config.toml

config.toml是节点的非共识配置。不同的节点可以根据自己的情况进行配置。常见的修改是`persistent_peers` /`moniker` /`laddr`

### app.toml

app.toml为DipperNetwork提供了一些特殊的配置，例如`minimum-gas-prices`，`halt-height`。
