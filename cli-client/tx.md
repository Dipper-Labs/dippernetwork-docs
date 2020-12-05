# Tx

签名、广播、查询交易

## 可用命令

| 名称                            | 描述                     |
| ------------------------------- | ------------------------ |
| [sign](#dipcli-tx-sign)           | 签名生成的离线交易文件   |
| [broadcast](#dipcli-tx-broadcast) | 广播一个已签名交易到网络 |
| [multisig](#dipcli-tx-multisign)  | 用多个账户为同一交易签名 |
| [tx](#dipcli-query-tx)            | 使用交易hash查询交易     |
| [txs](#dipcli-query-txs)          | 使用Tag查询交易          |

## dipcli tx sign

签名生成的离线交易文件。该文件由`generate-only`标志生成。

```bash
dipcli tx sign <file> [flags]
```

### 标志

| 命令，速记       | 类型   | 必须 | 默认  | 描述                             |
| ---------------- | ------ | ---- | ----- | -------------------------------- |
| -h，--help       |        |      |       | 打印帮助                         |
| --append         | bool   |      | true  | 将签名附加到现有签名             |
| --multisig       | string |      | true  | 代表交易签名的multisig帐户的地址 |
| --from           | string | 是   |       | 用于签名的私钥名称               |
| --offline        | bool   |      | false | 离线模式                         |
| --signature-only | bool   |      | false | 仅打印生成的签名，然后退出       |

### 生成离线交易

:::tip
任意类型的离线交易都可以通过追加`--generate-only`标志来生成
:::

下面示例中使用Transfer交易：

```bash
dipcli send --from dip14trcsjgecyu5slera7kwdgnlmcxwgqjt467yrf --to dip16wafa4gwzrtmx79y4udaqzqy6nfprz9ppd5mvp --amount 1pdip --chain-id=dipperhub --generate-only
```

`unsigned.json` 看起来是这样的：

```json
{
  "type":"dip/StdTx",
  "value":{
    "msg":[{
      "type":"dip/MsgSend",
      "value":{
        "from_address":"dip14trcsjgecyu5slera7kwdgnlmcxwgqjt467yrf",
        "to_address":"dip16wafa4gwzrtmx79y4udaqzqy6nfprz9ppd5mvp",
        "amount":[
          {
            "denom":"pdip",
            "amount":"1"
          }
        ]
      }
    }],
    "fee":{
      "amount":[
        {
          "denom":"pdip",
          "amount":"1200000000000"
        }
      ],
      "gas":"200000"
    },
    "signatures":null,
    "memo":""
   }
}
```

### 签名离线交易

```bash
dipcli tx sign unsigned.json --from=<key-name> > signed.tx
```

`signed.json` 看起来是这样的：

```json
{
  "type": "dip/StdTx",
  "value": {
    "msg": [
      {
        "type": "dip/MsgSend",
        "value": {
          "from_address": "dip14trcsjgecyu5slera7kwdgnlmcxwgqjt467yrf",
          "to_address": "dip16wafa4gwzrtmx79y4udaqzqy6nfprz9ppd5mvp",
          "amount": [
            {
              "denom": "pdip",
              "amount": "1"
            }
          ]
        }
      }
    ],
    "fee": {
      "amount": [
        {
          "denom": "pdip",
          "amount": "1200000000000"
        }
      ],
      "gas": "200000"
    },
    "signatures": [
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "AhX90C4WdA3kncHBmoMjRzZAKIjmED4n7AvgWlwtAHmV"
        },
        "signature": "uLJfynk7MaDWTe84sRjYtcVEg0hCPPpSeZXbX8nT4EI5XUBGIj7dner56pxVPUtRlqF94BMHxKh249deBSTnGg=="
      }
    ],
    "memo": ""
  }
}
```

签名之后，`signed.json`中的`signature`字段将不再为空。

现在准备[广播这个已签名交易](#dipcli-tx-broadcast)到DipperNetwork。

## dipcli tx broadcast

这个命令用于广播已离线签名的交易到网络。

### 广播离线签名的交易

```bash
dipcli tx broadcast signed.json --chain-id=dipperhub
```

## dipcli tx multisign

用多个账户为一个交易签名。这个交易只有在签名数满足multisig-threshold时才可以广播。

```bash
dipcli tx multisign <file> <key-name> <[signature]...> [flags]
```

### 用多签密钥创建离线交易

:::tip
没有多签密钥？[创建一个](keys.md#创建多签密钥)
:::

```bash
dipcli tx bank send <from> <to> 10pdip --chain-id=dipperhub --from=<multisig-keyname> --generate-only > unsigned.json
```

### 签名多签交易

#### 查询多签地址

```bash
iris keys show <multisig-keyname>
```

#### 签名`unsigned.json`

假定multisig-threshold是2，我们使用2个签名者签名`unsigned.json`

用signer-1签名：

```bash
dipcli tx sign unsigned.json --from=<signer-keyname-1> --chain-id=dipperhub --multisig=<multisig-address> --signature-only > signed-1.json
```

用signer-2签名：

```bash
dipcli tx sign unsigned.json --from=<signer-keyname-2> --chain-id=dipperhub --multisig=<multisig-address> --signature-only > signed-2.json
```

#### 合并签名

合并所有签名到 `signed.json`

```bash
dipcli tx multisign --chain-id=dipperhub unsigned.json <multisig-keyname> signed-1.json signed-2.json > signed.json
```

现在可以[广播](#dipcli-tx-broadcast)这个已签名交易了。

## dipcli query tx

```bash
iris query tx [hash] [flags]
```

## dipcli query txs

```bash
dipcli query txs --events 'message.sender=<iaa...>&message.action=xxxx' --page 1 --limit 30
```

其中`message.action`可取值：

| module       | Msg                                       | action               |
| ------------ | ----------------------------------------- | -------------------- |
| bank         | dip/MsgSend                        | transfer             |
|              | dip/MsgMultiSend                   | transfer             |
| distribution | dip/MsgModifyWithdrawAddress       | set_withdraw_address |
|              | dip/MsgWithdrawValidatorCommission | withdraw_commission  |
|              | dip/MsgWithdrawDelegatorReward     | withdraw_rewards     |
| gov          | dip/MsgSubmitProposal              | submit_proposal      |
|              | dip/MsgDeposit                     | proposal_deposit     |
|              | dip/MsgVote                        | proposal_vote        |
| stake        | dip/MsgCreateValidator             | create_validator     |
|              | dip/MsgEditValidator               | edit_validator       |
|              | dip/MsgDelegate                    | delegate             |
|              | dip/MsgBeginRedelegate             | redelegate           |
|              | dip/MsgUndelegate                  | unbond               |
| slashing     | dip/MsgUnjail                      | unjail               |