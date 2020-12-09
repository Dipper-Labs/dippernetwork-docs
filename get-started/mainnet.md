---
order: 2
---

# 加入主网

:::tip
需要先 [安装 DipperNetwork](install.md)
:::

## 运行全节点

```bash
# 初始化节点
dipd init <your-custom-name> --chain-id=dipperhub

# 下载主网公开的 config.toml 和 genesis.json
curl -o ~/.dipd/config/config.toml https://raw.githubusercontent.com/Dipper-Labs/mainnet/master/config/config.toml
curl -o ~/.dipd/config/genesis.json https://raw.githubusercontent.com/Dipper-Labs/mainnet/master/config/genesis.json

# 启动节点（也可使用 nohup 或 systemd 等方式后台运行）
dipd start
```

:::tip
从零开始追赶区块需要很长时间，您也可以下载[主网数据快照](#TODO)以减少同步时间
:::

## 升级为验证人节点

### 创建钱包

您可以[创建新的钱包](../cli-client/keys.md#创建密钥)或[导入现有的钱包](../cli-client/keys.md#通过助记词恢复密钥)，然后从交易所或其他任何地方转入一些DIP到您刚刚创建的钱包中：

```bash
# 创建一个新钱包
dipcli keys add <key-name>
```

:::warning
在安全的地方备份好助记词！如果您忘记密码，这是恢复帐户的唯一方法。
:::

### 确认节点同步状态

```bash
# 可以使用此命令安装 jq
# apt-get update && apt-get install -y jq

# 如果输出为 false，则表明您的节点已经完成同步
dipcli status | jq .sync_info.catching_up
```

### 创建验证人

只有节点已完成同步时，才可以运行以下命令将您的节点升级为验证人：

```bash
dipcli tx staking create-validator \
    --pubkey=$(dipcli tendermint show-validator) \
    --moniker=<your-validator-name> \
    --amount=<amount-to-be-delegated, e.g. 1000000000000pdip> \
    --commission-rate=0.1 \
    --gas=200000 \
    --chain-id=dipperhub \
    --from=<key-name>
```

:::warning
**重要**

一定要备份好 home（默认为〜/.dipd/）目录中的 `config` 目录！如果您的服务器磁盘损坏或您准备迁移服务器，这是恢复验证人的唯一方法。
:::

如果以上命令没有出现错误，则您的节点已经是验证人或候选人了（取决于您的Voting Power是否在前100名中）

## 主网区块浏览器
- [Big-Dipper](https://explorer.dippernetwork.com/)