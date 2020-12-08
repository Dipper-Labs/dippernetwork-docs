# 收益

distribution模块用于管理自己的 [Staking 收益](../concepts/general-concepts.md#staking-收益)。

## 可用命令

| 名称                                                                                    | 描述                                                                                           |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [commission](#dipcli-query-distribution-commission)                                       | 查询分配的验证人佣金                                                                           |
| [community-pool](#dipcli-query-distribution-community-pool)                               | 查询社区池总币数                                                                               |
| [params](#dipcli-query-distribution-params)                                               | 查询分配参数                                                                                   |
| [rewards](#dipcli-query-distribution-rewards)                                             | 查询所有分销委托人收益或来自指定验证人的收益                                                   |
| [slashes](#dipcli-query-distribution-slashes)                                             | 查询验证人指定块范围内的分割                                                                   |
| [validator-outstanding-rewards](#dipcli-query-distribution-validator-outstanding-rewards) | 查询验证人的未付奖励分配及其所有授权                                                           |
| [fund-community-pool](#dipcli-tx-distribution-fund-community-pool)                        | 为社区基金池提供指定数额的资金                                                                 |
| [set-withdraw-addr](#dipcli-tx-distribution-set-withdraw-addr)                            | 设置提现地址                                                                                   |
| [withdraw-all-rewards](#dipcli-tx-distribution-withdraw-all-rewards)                      | 取回委托人所有收益                                                                             |
| [withdraw-rewards](#dipcli-tx-distribution-withdraw-rewards)                              | 取回收益，有以下几种模式: 取回所有奖励、从指定的验证者取回委派奖励、验证人取回所有奖励以及佣金 |

## dipcli query distribution commission

查询分配的验证人佣金。

```bash
dipcli query distribution commission [validator] [flags]
```

## dipcli query distribution community-pool

查询社区池总币数。

```bash
dipcli query distribution community-pool [flags]
```

## dipcli query distribution params

查询分配参数。

```bash
 dipcli query distribution params [flags]
```

## dipcli query distribution rewards

查询所有分销委托人收益或来自指定验证人的收益。

```bash
dipcli query distribution rewards [delegator-addr] [validator-addr] [flags]
```

## dipcli query distribution slashes

查询验证人指定块范围内的分割。

```bash
dipcli query distribution slashes [validator] [start-height] [end-height] [flags]
```

## dipcli query distribution validator-outstanding-rewards

查询验证人的未付奖励分配及其所有授权。

```bash
dipcli query distribution validator-outstanding-rewards [validator] [flags]
```

## dipcli tx distribution set-withdraw-addr

设置提现地址。

```bash
dipcli tx distribution set-withdraw-addr [withdraw-addr] [flags]
```

## dipcli tx distribution withdraw-all-rewards

取回委托人所有收益。

```bash
dipcli tx distribution withdraw-all-rewards [flags]
```

## dipcli tx distribution withdraw-rewards

取回收益，有以下几种模式: 取回所有奖励、从指定的验证者取回委派奖励、验证人取回所有奖励以及佣金。

```bash
dipcli tx distribution withdraw-rewards [validator-addr] [flags]
```
