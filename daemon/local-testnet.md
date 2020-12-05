---
order: 3
---

# 本地测试网

出于测试或开发目的，您可能需要运行本地测试网。

## 单节点测试网

**需求:**

- [安装dipd](../get-started/install.md)

:::tip
对于以下示例，我们全部使用默认的[主目录](intro.md#主目录)
:::

### dipd init

初始化 genesis.json 文件，它将帮助你启动网络

```bash
dipd init testing --chain-id=testing
```

### 创建一个钱包

创建一个钱包作为您的验证人帐户

```bash
dipd keys add MyValidator
```

### dipd add-genesis-account

将该钱包地址添加到 genesis 文件中的 genesis.app_state.accounts 数组中

:::tip
此命令使您可以设置通证数量。确保此帐户有 pdip，这是 Dipper Network 上唯一的质押通证
:::

```bash
dipd add-genesis-account $(dipd keys show MyValidator --address) 150000000000000000000pdip
```

### dipd gentx

生成创建验证人的交易。gentx 存储在 `~/.dipd/config/` 中

```bash
dipd gentx MyValidator --chain-id=testing --amount 1000000000000000pdip
```

### dipd collect-gentxs

将生成的质押交易添加到创世文件

```bash
dipd collect-gentxs
```

### dipd start

现在可以启动 `dipd` 了

```bash
dipd start
```

### dipd unsafe-reset-all

可以使用此命令来重置节点，包括本地区块链数据库，地址簿文件，并将 priv_validator.json 重置为创世状态。

当本地区块链数据库以某种方式中断和无法同步或参与共识时，这是有用的。

```bash
dipd unsafe-reset-all
```

### dipd tendermint

查询可以在 p2p 连接中使用的唯一节点 ID，例如在 [config.toml](intro.md#config-toml) 中 `seeds` 和 `persistent_peers` 的格式 `<node-id>@ip:26656`。

节点 ID 存储在 [node_key.json](intro.md#node_key-json) 中。

```bash
dipd tendermint show-node-id
```

查询 [Tendermint Pubkey](../concepts/validator-faq.md#tendermint-密钥)，用于 [identify your validator](../cli-client/staking.md#dipd-tx-staking-create-validator)，并将用于在共识过程中签署 Pre-vote/Pre-commit。

[Tendermint Key](../concepts/validator-faq.md#tendermint-密钥) 存储在 [priv_validator.json](intro.md#priv_validator-json) 中，创建验证人后，请一定要记得[备份](../concepts/validator-faq.md#如何备份验证人节点)。

```bash
dipd tendermint show-validator
```

查询bech32前缀验证人地址

```bash
dipd tendermint show-address
```
