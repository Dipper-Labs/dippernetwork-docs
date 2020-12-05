# Params

Params模块允许查询系统里预设的参数，查询结果中除了Gov模块的参数，其他都可以通过[Gov模块](./gov.md)发起提议来修改。

```bash
dipcli query [subspace] [flags]
```

`subspace`目前支持：`auth`，`staking`，`mint`，`distribution`，`slashing`，`gov`，`vm`。
其中，每个`subspace`查询的参数说明如下：

## auth

| name                      | description                    | default |
| ------------------------ | ------------------------------ | ------- |
| `max_memo_characters`      | 交易字段中备注的最大字符数     | 256     |
| `tx_sig_limit`             | 每笔交易的最大签名数量         | 10       |
| `tx_size_cost_per_byte`      | 交易的每个字节消耗的Gas        | 10      |
| `sig_verify_cost_ed25519`   | edd2519算法签名验证消耗的Gas   | 590     |
| `sig_verify_cost_secp256k1` | secp256k1算法签名验证消耗的Gas | 1000    |
| `gas_price_threshold`        | 最小gasprice           | 6000000pdip  

## staking

| name                 | description            | default |
| ------------------- | ---------------------- | ------- |
| `unbonding_time`     | 抵押解绑时间           | 2week      |
| `max_validators`     | 当前最大验证人数量         | 100     |
| `max_entries`        | 解绑、转委托的最大数量 | 7       |
| `bond_denom`         | 可抵押的代币           | pdip   |
| `next_extending_time` | 下一次扩展最大验证人数量的时间  | 创世时间+1year     |
| `max_lever`     | 抵押的最大杠杆           | 20      |
| `max_validators_extending_limit`     | 最大验证人数量           | 300      |
| `max_validators_extending_speed`     | 验证人每次增加的数量           | 10      |

## mint

| name         | description    | default |
| ----------- | -------------- | ------- |
| `mint_denom` | 增发的代币名称 | pdip   |
| `inflation_rate_change` | 通胀率最大增幅   | 0.06    |
| `inflation_max` | 最大通胀率 | 0.10   |
| `inflation_min` | 最小通胀率 | 0.04   |
| `goal_bonded` | 目标抵押率 | 0.67   |
| `blocks_per_year` | 每年预计区块数 | 6311520   |
| `max_provisions` | 增发的代币上限 | 3.5亿dip   |

## distribution

| name                   | description            | default |
| --------------------- | ---------------------- | ------- |
| `community_tax`        | 提现收取的手续费率     | 0.02    |
| `base_proposer_reward`  | 区块提议者的基础奖励率 | 0.01    |
| `bonus_proposer_reward` | 区块提议者的奖励率     | 0.04    |
| `withdraw_addr_enabled` | 是否支持设置提现地址   | true    |

## slashing

| name                       | description              | default |
| ------------------------- | ------------------------ | ------- |
| `signed_blocks_window`      | 验证人下线的滑动窗口大小 | 34560     |
| `min_signed_per_window`      | 每个窗口最低投票率       | 0.7     |
| `downtime_jail_duration`    | 验证人最大的下线时间     | 36h     |
| `slash_fraction_double_sign` | 双重签名的惩罚系数       | 1/100    |
| `slash_fraction_downtime`   | 验证人下线的惩罚系数     | 3/10000   |

## gov

| name             | description            | default |
| --------------- | ---------------------- | ------- |
| `deposit_params` | 提议抵押阶段的相关参数 |         |
| `voting_params`  | 提议投票阶段的相关参数 |         |
| `tally_params`   | 投票统计阶段的相关参数 |         |

## vm

| name                    | description                 | default   |
| ---------------------- | --------------------------- | --------- |
| `vm_contract_creation_gas_params`    | 创建合约的gas参数            |  |
| `vm_op_gas_params`   | 合约指令gas参数                |        |
| `max_code_size`           | 合约最大字节数                | 1M  |
| `max_call_create_depth`        | 递归最大深度                    | 1024       |