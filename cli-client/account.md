# Account

用于管理本地帐户中的资产

## 可用命令

| 名称                                  | 描述                         |
| ------------------------------------- | ---------------------------- |
| [account](#dipcli-query-balances) | 查询账户详情                 |
| [send](#dipcli-send)            | 创建、签名、广播一个转账交易 |

## dipcli query balances

该命令用于查询指定账户的余额信息。

```bash
dipcli query account [address] [flags]
```

## dipcli send

发送令牌到另一个地址，此命令包括 `generate`，`sign` 和 `broadcast` 这些步骤。

```bash
dipcli send --from [from_address] --to [to_address] --amount [amount] [flags]
```

**标识：**

| 名称，速记 | 类型 | 必须 | 默认 | 描述                       |
| ---------- | ---- | ---- | ---- | -------------------------- |
| -h, --help |      |      |      | `send`子命令的提示信息 |
