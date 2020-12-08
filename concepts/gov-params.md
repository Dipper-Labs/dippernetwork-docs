# 治理参数

在DipperNetwork中，存在一些特殊的参数，它们可通过链上治理被修改。持有DIP通证的用户都可以参与到参数修改的链上治理。
如果社区对某些可修改的参数不满意，可以发起[参数修改提案](../features/governance.md#usage-scenario-of-parameter-change)，社区投票通过后即可在线自动完成修改。

## Auth 模块可治理参数

| 字段                     | 描述             | 有效范围            | 当前值        |
| ------------------------ | ---------------- | ------------------- | ------------- |
| `auth/GasPriceThreshold` | 最小的gas单价    | (0, +∞) | 6000000(0.000006DIP) |
| `auth/MaxMemoCharacters` | 交易Memo最大长度    | (0, +∞) | 256 |
| `auth/TxSigLimit` | 交易的最大签名数    | (0, +∞) | 10 |
| `auth/TxSizeCostPerByte` | 交易中每个字节的Gas数量    | (0, +∞) | 10 |
| `auth/SigVerifyCostED25519` | 验证签名消耗Gas数量ED25519算法    | (0, +∞) | 590 |
| `auth/SigVerifyCostSecp256k1` | 验证签名消耗Gas数量Secp256k1算法    | (0, +∞) | 1000 |

## Staking 模块可治理参数

| 字段                  | 描述             | 有效范围    | 当前值   |
| --------------------- | ---------------- | ----------- | -------- |
| `staking/NextExtendingTime` | 下次扩展验证人数量的时间    |  | 创世时间+1年 |
| `staking/UnbondingTime` | 解绑时间         |  | 14天 |
| `staking/MaxLever` | 验证人抵押最大杠杆倍数 | [100, 200]  | 20      |
| `staking/MaxValidators` | 当前最大验证人数量         | [1, +∞) | 100 |
| `staking/MaxValidatorsExtendingLimit` | 最大验证人数量         | [100, 300] | 300 |
| `staking/MaxValidatorsExtendingSpeed` | 验证人数量增加的速度         | [1, 300) | 10 |
| `staking/MaxEntries` | 最大解绑/重新绑定记录数量         | [1, +∞) | 7 |


详见 [Staking](../features/staking.md)

## Distribution 模块可治理参数

| 字段                        | 描述                 | 有效范围  | 当前值 |
| --------------------------- | -------------------- | --------- | ------ |
| `distr/BaseProposerReward`  | 出块奖励的基准比例   | (0, 0.02] | 0.01   |
| `distr/BonusProposerReward` | 最大额外奖励比例     | (0, 0.08] | 0.04   |
| `distr/CommunityTax`        | 贡献给社区基金的比例 | (0, 0.2]  | 0.02   |

详见 [Distribution](../features/distribution.md)

## Mint 模块可治理参数

| 字段             | 描述     | 有效范围 | 当前值 |
| ---------------- | -------- | -------- | ------ |
| `mint/InflationRateChange` | 通胀率最大变化 | [0, 1] | 0.06   |
| `mint/InflationMax` | 最大通胀率 | [0, 1] | 0.1   |
| `mint/InflationMin` | 最小通胀率 | [0, 1] | 0.04   |
| `mint/GoalBonded` | 目标绑定率 | [0, 1] | 0.67   |
| `mint/MaxProvisions` | 最大通胀量 | [0, +∞) | 350000000DIP   |

详见 [Mint](../features/mint.md)

## Slashing 模块可治理参数

| 字段                               | 描述                       | 有效范围      | 当前值  |
| ---------------------------------- | -------------------------- | ------------- | ------- |
| `slashing/MaxEvidenceAge`          | 可接受的最早的作恶证据时间 | [1day, +∞)    | 86400秒   |
| `slashing/SignedBlocksWindow`      | slash统计窗口区块数        | [100, 140000] | 34560   |
| `slashing/MinSignedPerWindow`      | slash窗口中最小投票比例    | [0.5, 0.9]    | 0.7     |
| `slashing/DowntimeJailDuration`    | Downtime后Jail的时间       | (0, 4week)    | 36h0m0s |
| `slashing/SlashFractionDoubleSign` | DoubleSign后罚款的比例     | [0.01, 0.1]   | 0.01    |
| `slashing/SlashFractionDowntime`   | Downtime后罚款的比例       | [0.005, 0.1]  | 0.0003  |

详见 [Slashing](../features/slashing.md)