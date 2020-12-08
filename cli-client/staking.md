# 抵押

Staking模块提供了一系列查询staking状态和发送staking交易的命令。

## 可用命令

| 名称                                                                         | 描述                                                         |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [validator](#dipcli-query-staking-validator)                                   | 查询某个验证者                                               |
| [validators](#dipcli-query-staking-validators)                                 | 查询所有的验证者                                             |
| [delegation](#dipcli-query-staking-delegation)                                 | 基于委托者地址和验证者地址的委托查询                         |
| [delegations](#dipcli-query-staking-delegations)                               | 基于委托者地址的所有委托查询                                 |
| [delegations-to](#dipcli-query-staking-delegations-to)                         | 查询在某个验证人上的所有委托                                 |
| [unbonding-delegation](#dipcli-query-staking-unbonding-delegation)             | 基于委托者地址和验证者地址的unbonding-delegation记录查询     |
| [unbonding-delegations](#dipcli-query-staking-unbonding-delegations)           | 基于委托者地址的所有unbonding-delegation记录查询             |
| [unbonding-delegations-from](#dipcli-query-staking-unbonding-delegations-from) | 基于验证者地址的所有unbonding-delegation记录查询             |
| [redelegations-from](#dipcli-query-staking-redelegations-from)                 | 基于某一验证者的所有转委托查询                               |
| [redelegation](#dipcli-query-staking-redelegation)                             | 基于委托者地址，原验证者地址和目标验证者地址的转委托记录查询 |
| [redelegations](#dipcli-query-staking-redelegations)                           | 基于委托者地址的所有转委托记录查询                           |
| [pool](#dipcli-query-staking-pool)                                             | 查询最新的权益池                                             |
| [params](#dipcli-query-staking-params)                                         | 查询最新的权益参数信息                                       |
| [create-validator](#dipcli-tx-staking-create-validator)                        | 以自委托的方式创建一个新的验证者                             |
| [edit-validator](#dipcli-tx-staking-edit-validator)                            | 编辑已存在的验证者信息                                       |
| [delegate](#dipcli-tx-staking-delegate)                                        | 委托一定代币到某个验证者                                     |
| [unbond](#dipcli-tx-staking-unbond)                                            | 从指定的验证者解绑一定的股份                                 |
| [redelegate](#dipcli-tx-staking-redelegate)                                    | 转委托一定的token从一个验证者到另一个验证者                  |

## dipcli query staking validator

### 通过地址查询验证人

```bash
dipcli query staking validator <dipvaloper...>
```

## dipcli query staking validators

### 查询所有验证人

```bash
dipcli query staking validators
```

## dipcli query staking delegation

通过委托人地址和验证人地址查询委托交易。

```bash
dipcli query staking delegation [delegator-addr] [validator-addr]
```

### 查询委托交易

```bash
dipcli query staking delegation <dip...> <dipvaloper...>
```

示例输出:

```bash
{
  "delegator_address": "dip1cul6enyty8v0nwlgq8khfa5jme5n23gp4jsx4z",
  "validator_address": "dipvaloper1cul6enyty8v0nwlgq8khfa5jme5n23gph7cr3g",
  "shares": "1193213931902751.825547664299289787",
  "balance": {
    "denom": "pdip",
    "amount": "1192855967723181"
  }
}
```

## dipcli query staking delegations

查询某个委托人发起的所有委托记录。

```bash
dipcli query staking delegations [delegator-address] [flags]
```

### 查询某个委托人发起的所有委托记录

```bash
dipcli query staking delegations <dip...>
```

## dipcli query staking delegations-to

查询某个验证人接受的所有委托。

```bash
dipcli query staking delegations-to [validator-address] [flags]
```

### 查询某个验证人接受的所有委托

```bash
dipcli query staking delegations-to <dipvaloper...>
```

示例输出:

```bash
[
  {
    "delegator_address": "dip1g5mqyj8vk7nxusncl23mws0h0akfnw6mxht4uj",
    "validator_address": "dipvaloper1cul6enyty8v0nwlgq8khfa5jme5n23gph7cr3g",
    "shares": "80024007202160.648194458337501250",
    "balance": {
      "denom": "pdip",
      "amount": "80000000000000"
    }
  },
  {
    "delegator_address": "dip1cul6enyty8v0nwlgq8khfa5jme5n23gp4jsx4z",
    "validator_address": "dipvaloper1cul6enyty8v0nwlgq8khfa5jme5n23gph7cr3g",
    "shares": "1193213931902751.825547664299289787",
    "balance": {
      "denom": "pdip",
      "amount": "1192855967723181"
    }
  },
  {
    "delegator_address": "dip1a6j9yw0ke2c5cl7l5ydwx9ywzrtxrv8nkxu4qn",
    "validator_address": "dipvaloper1cul6enyty8v0nwlgq8khfa5jme5n23gph7cr3g",
    "shares": "19005701710513153.946183855156546954",
    "balance": {
      "denom": "pdip",
      "amount": "19000000000000000"
    }
  }
]
```

## dipcli query staking unbonding-delegation

通过委托人与验证人地址查询unbonding-delegation记录。

```bash
dipcli query staking unbonding-delegation [delegator-addr] [validator-addr] [flags]```
```

### 查询unbonding-delegation记录

```bash
dipcli query staking unbonding-delegation [delegator-addr] [validator-addr] [flags]```
```

## dipcli query staking unbonding-delegations

### 查询委托人的所有未绑定委托记录

```bash
dipcli query staking unbonding-delegations <dip...>
```

## dipcli query staking unbonding-delegations-from

### 查询验证人的所有未绑定委托记录

```bash
dipcli query staking unbonding-delegations-from <dipvaloper...>
```

## dipcli query staking redelegations-from

查询验证人的所有转委托记录。

```bash
dipcli query staking redelegations-from [validator-address] [flags]
```

### 查询验证人的所有转委托记录

```bash
dipcli query staking redelegations-from <dipvaloper...>
```

## dipcli query staking redelegation

通过委托人地址、原验证人地址、目标验证人地址查询转委托记录。

```bash
dipcli query staking redelegation [delegator-addr] [src-validator-addr] [dst-validator-addr] [flags]
```

### 查询转委托记录

```bash
dipcli query staking redelegation <dip...> <dipvaloper...> <dipvaloper...>
```

## dipcli query staking redelegations

### 查询委托人的所有转委托记录

```bash
dipcli query staking redelegations <dip...>
```

## dipcli query staking pool

### 查询当前权益池

```bash
dipcli query staking pool
```

示例输出:

```bash
{
  "not_bonded_tokens": "980999999999999",
  "bonded_tokens": "9731054855967723181"
}
```

## dipcli query staking params

### 查询当前权益参数信息

```bash
dipcli query staking params
```

## dipcli tx staking create-validator

发送交易申请成为验证人，并委托一定数量的dipcli到该验证人。

```bash
dipcli tx staking create-validator [flags]
```

**标志：**

| 名称，速记                   | 类型   | 必须 | 默认  | 描述                                |
| ---------------------------- | ------ | ---- | ----- | ----------------------------------- |
| --amount                     | string | 是   |       | 委托金额                            |
| --commission-rate            | float  | 是   | 0.0   | 初始佣金比例                        |
| --commission-max-rate        | float  |      | 0.0   | 最大佣金比例                        |
| --commission-max-change-rate | float  |      | 0.0   | 最高佣金变更率百分比（每天）        |
| --min-self-delegation        | string |      |       | 验证人要求的最小抵押                |
| --details                    | string |      |       | 验证人节点的详细信息                |
| --identity                   | string |      |       | 身份信息的签名                      |
| --ip                         | string |      |       | 验证人节点的IP                      |
| --node-id                    | string |      |       | 节点ID                              |
| --moniker                    | string | 是   |       | 验证人节点名称                      |
| --pubkey                     | string | 是   |       | Amino编码的验证人公钥               |
| --website                    | string |      |       | 验证人节点的网址                    |

### 创建验证人

```bash
dipcli tx staking create-validator --chain-id=dipperhub --from=<key-name> --pubkey=<validator-pubKey> --commission-rate=0.1 --amount=100pdip --moniker=<validator-name>
```

:::tip
查看 [主网](../get-started/mainnet.md#升级为验证人节点) 说明以了解更多。
:::

## dipcli tx staking edit-validator

修改验证的的参数，包括佣金比率，验证人节点名称以及其他描述信息。

```bash
dipcli tx staking edit-validator [flags]
```

**标志：**

| 名称，速记            | 类型   | 必须 | 默认 | 描述                             |
| --------------------- | ------ | ---- | ---- | -------------------------------- |
| --commission-rate     | float  |      | 0.0  | 佣金比率                         |
| --moniker             | string |      |      | 验证人名称                       |
| --identity            | string |      |      | 身份签名                         |
| --website             | string |      |      | 网址                             |
| --details             | string |      |      | 验证人节点详细信息               |
| --min-self-delegation | string |      |      | 验证人要求的最小抵押             |

### 编辑验证人信息

```bash
dipcli tx staking edit-validator --from=<key-name> --chain-id=dipperhub --commission-rate=0.10 --moniker=<validator-name>
```

### 上传验证人头像

请参考 [如何将验证人的Logo上传到区块浏览器](../concepts/validator-faq.md#如何将验证人的logo上传到区块浏览器)。

## dipcli tx staking delegate

向验证人委托通证。

```bash
dipcli tx staking delegate [validator-addr] [amount] [flags]
```

```bash
dipcli tx staking delegate <dipvaloper...> <amount> --chain-id=dipperhub --from=<key-name>
```

## dipcli tx staking unbond

从验证人解委托通证。

```bash
dipcli tx staking unbond [validator-addr] [amount] [flags]
```

### 从验证人中解委托一定数量的代币

```bash
dipcli tx staking unbond <dipvaloper...> 10pdip --from=<key-name> --chain-id=dipperhub
```

## dipcli tx staking redelegate

把某个委托的一部分或者全部从一个验证人转移到另外一个验证人。

:::tip
转委托没有`unbonding time`，所以你不会错过奖励。但是对每个验证人的转委托，在一个`unbonding time`区间内只能操作一次。
:::

```bash
dipcli tx staking redelegate [src-validator-addr] [dst-validator-addr] [amount] [flags]
```

### 转委托一定数量代币到其他验证人

```bash
dipcli tx staking redelegate <dipvaloper...> <dipvaloper...> 10pdip --chain-id=dipperhub --from=<key-name>
dipcli tx staking redelegate <dipvaloper...> <dipvaloper...> 10pdip --chain-id=dipperhub --from=<key-name>
```
