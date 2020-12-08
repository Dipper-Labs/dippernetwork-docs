# 治理

此模块提供[治理](../../features/governance.md)的基本功能

## 可用命令

| 名称                                            | 描述                                                  |
| ----------------------------------------------- | ----------------------------------------------------- |
| [proposal](#dipcli-query-gov-proposal)            | 查询单个提案的详细信息                                |
| [proposals](#dipcli-query-gov-proposals)          | 使用可选过滤器提案                                    |
| [vote](#dipcli-query-gov-vote)                    | 查询一次投票的详细信息                                |
| [votes](#dipcli-query-gov-votes)                  | 查询提案的投票                                        |
| [deposit](#dipcli-query-gov-deposit)              | 查询摸个抵押人在某个提案的抵押信息                    |
| [deposits](#dipcli-query-gov-deposits)            | 查询提案的所有抵押信息                                |
| [tally](#dipcli-query-gov-tally)                  | 汇总提案投票                                          |
| [param](#dipcli-query-gov-param)                  | 查询参数                                              |
| [params](#dipcli-query-gov-params)                | 查询治理流程的参数                                    |
| [submit-proposal](#dipcli-tx-gov-submit-proposal) | 提交提案                                              |
| [deposit](#dipcli-tx-gov-deposit)                 | 为有效的提案抵押代币                                  |
| [vote](#dipcli-tx-gov-vote)                       | 为活跃的提案投票:可选值： yes/no/no_with_veto/abstain |

## dipcli query gov proposal

查询单个提案的详细信息

```bash
dipcli query gov proposal [proposal-id] [flags]
```

### 查询单个提案

```bash
dipcli query gov proposal <proposal-id>
```

## dipcli query gov proposals

使用可选过滤器提案

```bash
dipcli query gov proposals [flags]
```

**标识：**

| 名称, 速记  | 类型    | 必须 | 默认 | 描述                                  |
| ----------- | ------- | ---- | ---- | ------------------------------------- |
| --depositor | Address |      |      | 按抵押人地址过滤提案                  |
| --limit     | uint    |      |      | 返回最新[数量]个提案。 默认为所有提案 |
| --status    | string  |      |      | 按状态过滤提案                        |
| --voter     | Address |      |      | 按投票人地址过滤提案                  |

### 查询所有提案

```bash
dipcli query gov proposals
```

### 按条件查询提案

```bash
dipcli query gov proposals --limit=3 --status=Passed --depositor=<dip...>
```

## dipcli query gov vote

查询一次投票的详细信息

```bash
dipcli query gov vote [proposal-id] [voter-addr] [flags]
```

### 查询单个投票的信息

```bash
dipcli query gov vote <proposal-id> <dip...>
```

## dipcli query gov votes

查询提案的投票信息

```bash
dipcli query gov votes [proposal-id] [flags]
```

### 查询提案的所有投票

```bash
dipcli query gov votes <proposal-id>
```

## dipcli query gov deposit

通过提案ID查询提案中的某个抵押人的抵押信息

```bash
dipcli query gov deposit [proposal-id] [depositer-addr] [flags]
```

### 查询单个抵押信息

```bash
dipcli query gov deposit <proposal-id> <dip...>
```

## dipcli query gov deposits

查询提案中所有抵押信息

```bash
dipcli query gov deposits [proposal-id] [flags]
```

### 查询提案的所有抵押信息

```bash
dipcli query gov deposits <proposal-id>
```

## dipcli query gov tally

查询提案的计票结果。 您可以通过运行`dipcli query gov proposal`来查询提案ID。

```bash
dipcli query gov tally [proposal-id] [flags]
```

### 查询提案统计信息

```bash
dipcli query gov tally <proposal-id>
```

## dipcli query gov param

查询治理过程的参数。

```bash
dipcli query gov params [param-type] [flags]
```

例如:

```bash
> dipcli query gov param voting
> dipcli query gov param tallying
> dipcli query gov param deposit
```

## dipcli query gov params

查询治理过程的所有参数。

```bash
dipcli query gov param [param-type] [flags]
```

## dipcli tx gov submit-proposal

提交提案并附带初始委托。 提案标题、描述、类型和抵押可以直接提供，也可以通过JSON文件提供。
可用命令：`community-pool-spend`，`param-change`，`software-upgrade`

### dipcli tx gov submit-proposal community-pool-spend

提交提案并附带初始委托，提案详细信息必须通过JSON文件提供。

```bash
dipcli tx gov submit-proposal community-pool-spend <path/to/proposal.json> --from=<key_or_address>
```

`proposal.json` 包含:

```json
{
    "title": "Community Pool Spend",
    "description": "Pay me some DIPs!",
    "recipient": "dip16wafa4gwzrtmx79y4udaqzqy6nfprz9ppd5mvp",
    "amount": "1000pdip",
    "deposit": "1000pdip"
}
```

### dipcli tx gov submit-proposal param-change

提交参数修改提案。提案详细信息必须通过JSON文件提供。 对于包含的值，只有非空字段将被更新。

目前，参数更改已评估但尚未通过验证，因此
非常重要的一点是，任何“值”更改都是有效的（即正确的类型且在范围之内）
对于其各自的参数，例如。 `MaxValidators`应为整数而不是十进制。

```bash
dipcli tx gov submit-proposal param-change <path/to/proposal.json> --from=<key_or_address>
```

`proposal.json` 包含:

```json
{
    "title": "Staking Param Change",
    "description": "Update max validators",
    "changes": [
        {
        "subspace": "staking",
        "key": "MaxValidators",
        "value": 105
        }
    ],
    "deposit": "1000pdip"
}
```

### dipcli tx gov submit-proposal software-upgrade

提交软件升级提案，指定唯一的名称和高度或时间，以使升级生效。

```bash
dipcli tx gov submit-proposal software-upgrade [proposal.json] [flags]
```

proposal.json:
```json
{
    "title":"testnet-v4.1.0 upgrade",
    "description":"support vm fallback",
    "type":"SoftwareUpgrade",
    "deposit":{
        "denom":"pdip",
        "amount":"100000000000000000"
    },
    "version":1,
    "software":"https://github.com/Dipper-Labs/Dipper-Protocol/releases/tag/testnet-v4.1.0",
    "switch_height":1000,
    "threshold":"0.9"
}
```
**proposal.json 标识：**

| 名称, 速记       | 类型   | 必须 | 默认 | 描述                                                   |
| ---------------- | ------ | ---- | ---- | ------------------------------------------------------ |
| deposit        | Coin   | Yes  |      | 提案抵押的代币               |
| title          | string | Yes  |      | 提案的标题                    |
| description    | string | Yes  |      | 提案的描述                 |
| type           | string | Yes  |      | 提案类型                  |
| switch_height  | int64  | Yes  |      | 升级发生的高度              |
| threshold      | string | Yes  |      | 升级比例达到多少才执行升级                   |
| software       | string | Yes   |      | 此次升级的release链接 

## dipcli tx gov deposit

为某个提案抵押代币。 您可以通过运行`dipcli query gov proposal`来查询提案ID。

```bash
dipcli tx gov deposit [proposal-id] [deposit] [flags]
```

### 为有效的提案抵押

```bash
dipcli tx gov deposit [proposal-id] [deposit]
```

## dipcli tx gov vote

为一个活跃的提案投票， 可选值: yes/no/no_with_veto/abstain.

```bash
dipcli tx gov vote [proposal-id] [option] [flags]
```

### 为活跃的提案投票

```bash
dipcli tx gov vote <proposal-id> <option> --from=<key-name> --fees=0.3dipcli
```
