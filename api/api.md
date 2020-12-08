---
order: 1
---

# REST API

```dipcli``` 开启rest-server后，浏览器访问 ```http://127.0.0.1:1317/swagger-ui/``` 可以看到所有的REST APIs

```bash
# 开启 rest-server
dipcli rest-server --node=http://127.0.0.1:26657
```

## 常用 API

### 查询节点信息

request：

```bash
curl http://127.0.0.1:1317/node_info
```

response：

```json
{
  "node_info": {
    "protocol_version": {
      "p2p": "7",
      "block": "10",
      "app": "1"
    },
    "id": "1952f8fd932b503ca4fcea26b22feb0c23e05ad7",
    "listen_addr": "tcp://0.0.0.0:26656",
    "network": "dipperhub",
    "version": "0.32.13",
    "channels": "4020212223303800",
    "moniker": "sun",
    "other": {
      "tx_index": "on",
      "rpc_address": "tcp://127.0.0.1:26657"
    }
  },
  "application_version": {
    "name": "dip",
    "server_name": "dipd",
    "client_name": "dipcli",
    "version": "mainnet-v1.0.0-12-g367d043",
    "app_version": "1",
    "commit": "367d0432ad45554ad00f6fec9b47831b0492f913",
    "build_tags": "netgo,",
    "go": "go version go1.15.5 darwin/amd64"
  }
}
```

### 查询节点同步状态

request:

```bash
curl http://127.0.0.1:1317/syncing
```

response:
```json
{
  "syncing": false   
}
```
true表示节点正在追赶最新区块，false表示节点已经处于最新区块状态

### 获取最新区块

request:

```bash
curl http://127.0.0.1:1317/blocks/latest
```

response:

```json
{
  "block_meta": {
    "block_id": {
      "hash": "A04233458E96AAFBD9C6D1618062DE4F1260A63973D85CA409173CFD7D47D0F3",
      "parts": {
        "total": "1",
        "hash": "D3F0C6D6DCEC02511396AE9F486DBFCCE0309B6846F4C5FE61B03FC11BC24189"
      }
    },
    "header": {
      "version": {
        "block": "10",
        "app": "0"
      },
      "chain_id": "dipperhub",
      "height": "470630",
      "time": "2020-12-08T02:47:54.11429947Z",
      "num_txs": "0",
      "total_txs": "379",
      "last_block_id": {
        "hash": "2F14CEA7BB71EB59E50D2EF89AC9D11E105C86EEBD8A5B07F30B56B81D04FFAD",
        "parts": {
          "total": "1",
          "hash": "B677DACF5D95BBF4FE5ACFB185DEB0EE417408446B22CC79B825222122541B67"
        }
      },
      "last_commit_hash": "04B0B86E040AC348CFBB944A64460182F9BBCC3BA6DF539F73A7950582672951",
      "data_hash": "",
      "validators_hash": "C93A326F6716F48DD9A6012055730D93D9170E0BF65A6657B949FD3B18D84285",
      "next_validators_hash": "C93A326F6716F48DD9A6012055730D93D9170E0BF65A6657B949FD3B18D84285",
      "consensus_hash": "B022130E7DA2B61ED09FCCCD08429870EEE0D330B646B0B9D065E255347FE1C3",
      "app_hash": "8EFDBE35F8899660C55E0C09212ACDD493B29AE9A7A149F0CA3C3818A59E4D36",
      "last_results_hash": "",
      "evidence_hash": "",
      "proposer_address": "F21DB1549416602F67E9A3E5D39EF7226F03FDC5"
    }
  },
  "block": {
    "header": {
      "version": {
        "block": "10",
        "app": "0"
      },
      "chain_id": "dipperhub",
      "height": "470630",
      "time": "2020-12-08T02:47:54.11429947Z",
      "num_txs": "0",
      "total_txs": "379",
      "last_block_id": {
        "hash": "2F14CEA7BB71EB59E50D2EF89AC9D11E105C86EEBD8A5B07F30B56B81D04FFAD",
        "parts": {
          "total": "1",
          "hash": "B677DACF5D95BBF4FE5ACFB185DEB0EE417408446B22CC79B825222122541B67"
        }
      },
      "last_commit_hash": "04B0B86E040AC348CFBB944A64460182F9BBCC3BA6DF539F73A7950582672951",
      "data_hash": "",
      "validators_hash": "C93A326F6716F48DD9A6012055730D93D9170E0BF65A6657B949FD3B18D84285",
      "next_validators_hash": "C93A326F6716F48DD9A6012055730D93D9170E0BF65A6657B949FD3B18D84285",
      "consensus_hash": "B022130E7DA2B61ED09FCCCD08429870EEE0D330B646B0B9D065E255347FE1C3",
      "app_hash": "8EFDBE35F8899660C55E0C09212ACDD493B29AE9A7A149F0CA3C3818A59E4D36",
      "last_results_hash": "",
      "evidence_hash": "",
      "proposer_address": "F21DB1549416602F67E9A3E5D39EF7226F03FDC5"
    },
    "data": {
      "txs": null
    },
    "evidence": {
      "evidence": null
    },
    "last_commit": {
      "block_id": {
        "hash": "2F14CEA7BB71EB59E50D2EF89AC9D11E105C86EEBD8A5B07F30B56B81D04FFAD",
        "parts": {
          "total": "1",
          "hash": "B677DACF5D95BBF4FE5ACFB185DEB0EE417408446B22CC79B825222122541B67"
        }
      },
      "precommits": [
        {
          "type": 2,
          "height": "470629",
          "round": "0",
          "block_id": {
            "hash": "2F14CEA7BB71EB59E50D2EF89AC9D11E105C86EEBD8A5B07F30B56B81D04FFAD",
            "parts": {
              "total": "1",
              "hash": "B677DACF5D95BBF4FE5ACFB185DEB0EE417408446B22CC79B825222122541B67"
            }
          },
          "timestamp": "2020-12-08T02:47:54.118447822Z",
          "validator_address": "9A91E6F9F030FAE8A658604319CD98A145567353",
          "validator_index": "0",
          "signature": "k1K1+lxDwTiaf3uw/2t5JSnR3MYU3nnCc6loOc2UZ5o2sU9BdqnVdFp3atzVEvAxxvbaB6JSafgdOL43e0Z8Dw=="
        },
        {
          "type": 2,
          "height": "470629",
          "round": "0",
          "block_id": {
            "hash": "2F14CEA7BB71EB59E50D2EF89AC9D11E105C86EEBD8A5B07F30B56B81D04FFAD",
            "parts": {
              "total": "1",
              "hash": "B677DACF5D95BBF4FE5ACFB185DEB0EE417408446B22CC79B825222122541B67"
            }
          },
          "timestamp": "2020-12-08T02:47:54.168519612Z",
          "validator_address": "B8BFCBDDF796B6C3CE3175561E04F2DAAED8857A",
          "validator_index": "1",
          "signature": "UyaoAmolIGTbSbWmLr+uJ+5t4oFVnvC+Hcjtfc35QmHEJW3dT0I1TSiMnJtxiX0PQWNe0zBrGitzjhaQ9y4MDw=="
        },
        {
          "type": 2,
          "height": "470629",
          "round": "0",
          "block_id": {
            "hash": "2F14CEA7BB71EB59E50D2EF89AC9D11E105C86EEBD8A5B07F30B56B81D04FFAD",
            "parts": {
              "total": "1",
              "hash": "B677DACF5D95BBF4FE5ACFB185DEB0EE417408446B22CC79B825222122541B67"
            }
          },
          "timestamp": "2020-12-08T02:47:54.11515602Z",
          "validator_address": "BFFF70834E9375E385393027B183201F681E2F36",
          "validator_index": "2",
          "signature": "YA4zjiMYLSxO4/YcG4ao7gOU4gg7kkcNwzwplHiooB+tc3GUgCbX2z9JDh60oEviTBHDQxpzU+3LBQFvCeLCAQ=="
        },
        {
          "type": 2,
          "height": "470629",
          "round": "0",
          "block_id": {
            "hash": "2F14CEA7BB71EB59E50D2EF89AC9D11E105C86EEBD8A5B07F30B56B81D04FFAD",
            "parts": {
              "total": "1",
              "hash": "B677DACF5D95BBF4FE5ACFB185DEB0EE417408446B22CC79B825222122541B67"
            }
          },
          "timestamp": "2020-12-08T02:47:54.11429947Z",
          "validator_address": "CEC23C1B79561370D996DA293AD7E7D0767A89C9",
          "validator_index": "3",
          "signature": "gRmSI6+aX0YeK+lG71FgyGewDgbIhz5x77yJ+AjUI4zZ+4H1Kof3u0lyFrF7+0Yw7LFLdUxBwVFEPtWorY+MCg=="
        },
        {
          "type": 2,
          "height": "470629",
          "round": "0",
          "block_id": {
            "hash": "2F14CEA7BB71EB59E50D2EF89AC9D11E105C86EEBD8A5B07F30B56B81D04FFAD",
            "parts": {
              "total": "1",
              "hash": "B677DACF5D95BBF4FE5ACFB185DEB0EE417408446B22CC79B825222122541B67"
            }
          },
          "timestamp": "2020-12-08T02:47:54.113455638Z",
          "validator_address": "D7749EB8D1D57B17B032088CA3A02A1FB9EF6711",
          "validator_index": "4",
          "signature": "tzed4w18CkjAd71Sh5unmnm6sxJqv+S8O+OZeqZLzZAkaPNa/vxmMrtp969YKNOmACD+G5T6JD+DO873vY21BA=="
        },
        {
          "type": 2,
          "height": "470629",
          "round": "0",
          "block_id": {
            "hash": "2F14CEA7BB71EB59E50D2EF89AC9D11E105C86EEBD8A5B07F30B56B81D04FFAD",
            "parts": {
              "total": "1",
              "hash": "B677DACF5D95BBF4FE5ACFB185DEB0EE417408446B22CC79B825222122541B67"
            }
          },
          "timestamp": "2020-12-08T02:47:54.108694708Z",
          "validator_address": "F21DB1549416602F67E9A3E5D39EF7226F03FDC5",
          "validator_index": "5",
          "signature": "WvLWEMO62i2ss66yKNgmzk/smAf1hBSLmaHI/+tHmcHdvDsqHOMp5EBNjOrUZucjpEFPtn/EvodheATNeJuvBQ=="
        }
      ]
    }
  }
}
```

### 查询指定高度的区块

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| height | int | 指定区块高度 |

request:

```bash
curl http://127.0.0.1:1317/blocks/{height}
```

response 同上

### 查询帐户信息及余额

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| address | string | 帐户地址 |

request:

```bash
curl http://127.0.0.1:1317/auth/accounts/{address}
```

response:

```json
{
  "height": "470647",
  "result": {
    "type": "dip/Account",
    "value": {
      "address": "dip1cul6enyty8v0nwlgq8khfa5jme5n23gp4jsx4z",
      "coins": [
        {
          "denom": "pdip",
          "amount": "14422099336638"
        }
      ],
      "public_key": {
        "type": "tendermint/PubKeySecp256k1",
        "value": "Apao2u0qDhfjjNwuCW4t50KyEcp4n8o88RlNIFhZc+lK"
      },
      "account_number": "19",
      "sequence": "11",
      "code_hash": ""
    }
  }
}
```

### 查询账户余额

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| address | string | 帐户地址 |

request:

```bash
curl http://127.0.0.1:1317/bank/balances/{address}
```

response:

```json
{
  "height": "470652",
  "result": [
    {
      "denom": "pdip",
      "amount": "14422099336638"
    }
  ]
}
```

### 查询最新的活跃验证人集合

查询当前参与共识的前100名验证人集合：

request:

```bash
curl http://127.0.0.1:1317/validatorsets/latest
```

response:

```json
{
  "height": "0",
  "result": {
    "block_height": "408764",
    "validators": [
      {
        "address": "dipvalcons1yrc7zapq3pe4czflm3um324myqrlpw28cap5f8",
        "pub_key": "dipvalconspub1zcjduepqgucyytt4s4pntk87cesqs7jcagwf850fppkdkeel62a0pkc3z4qsg7ugjg",
        "proposer_priority": "13750000",
        "voting_power": "50000000"
      },
      {
        "address": "dipvalcons1vj73kl5znzz2x604t25j004ku2w92nyj8xsj40",
        "pub_key": "dipvalconspub1zcjduepqyteuk9ts78rq756w0v3kt0j0dxxt5z65k3mj5e9l0u22h5g8tw4qflpvcd",
        "proposer_priority": "-13750000",
        "voting_power": "10000000"
      }
    ]
  }
}
```

### 查询token供应量

查询dip供应量

```bash
curl http://127.0.0.1:1317/supply/total
```

response:

```json
{
  "height": "470664",
  "result": [
    {
      "denom": "pdip",
      "amount": "652048451228814232832"
    }
  ]
}
```

其中 ```1 dip = 10 ^ 12 pdip```

### 通过交易hash查询交易

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| txhash | string | 交易hash |

request:

```bash
curl http://127.0.0.1:1317/txs/{txhash}
```

response:

```json
{
  "height": "408786",
  "txhash": "630DC8FE53BA9EA241BFC3EB0B65A5C91327AFB5059A37C44F3366757893F22F",
  "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":null}]",
  "logs": [
    {
      "msg_index": 0,
      "success": true,
      "log": "",
      "events": null
    }
  ],
  "gas_wanted": "200000",
  "gas_used": "76029",
  "events": [
    {
      "type": "message",
      "attributes": [
        {
          "key": "action",
          "value": "send"
        },
        {
          "key": "sender",
          "value": "dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0"
        },
        {
          "key": "module",
          "value": "bank"
        }
      ]
    },
    {
      "type": "transfer",
      "attributes": [
        {
          "key": "recipient",
          "value": "dip1htgxvc8ewj20tlm4vf7ead7m4pllkgy63ecnp9"
        },
        {
          "key": "amount",
          "value": "100000000000pdip"
        }
      ]
    }
  ],
  "tx": {
    "type": "dip/StdTx",
    "value": {
      "msg": [
        {
          "type": "dip/MsgSend",
          "value": {
            "from_address": "dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0",
            "to_address": "dip1htgxvc8ewj20tlm4vf7ead7m4pllkgy63ecnp9",
            "amount": [
              {
                "denom": "pdip",
                "amount": "100000000000"
              }
            ]
          }
        }
      ],
      "fee": {
        "amount": [
          {
            "denom": "pdip",
            "amount": "200000000"
          }
        ],
        "gas": "200000"
      },
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A30tYxLMk3t/yKzGaTiPaNGvSnJ0YsXoGZWrQYPdS4+e"
          },
          "signature": "YpD2v3LfQqWV6zGECspW4tL4imgwreVcpF/NnuZdT/Z7lb8WHZTXb03lRlO0Al8VrMT4fgTxx78IiytfjW0YMA=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2020-10-12T06:45:47Z"
}
```

### 广播交易
  
```bash
curl -X POST "http://127.0.0.1:1317/txs" -H "accept: application/json" -H "Content-Type: application/json" -d "{transaction msg}"
```

示例：

```bash
curl -X POST "http://127.0.0.1:1317/txs" \
         -H "accept: application/json" \
         -H "Content-Type: application/json" \
         -d \
' {
 	"tx": {
      "msg": [
        {
          "type": "dip/MsgSend",
          "value": {
            "from_address": "dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0",
            "to_address": "dip1htgxvc8ewj20tlm4vf7ead7m4pllkgy63ecnp9",
            "amount": [
              {
                "denom": "pdip",
                "amount": "100000000000"
              }
            ]
          }
        }
      ],
      "fee": {
        "amount": [
          {
            "denom": "pdip",
            "amount": "200000000"
          }
        ],
        "gas": "200000"
      },
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "A30tYxLMk3t/yKzGaTiPaNGvSnJ0YsXoGZWrQYPdS4+e"
          },
          "signature": "dKkqnv9HKR9hfj3sQHJeH8LyrXlGJhb/r+2sobPYsFhmVXThbs2f8n9dzxBrCU2pTKqAM1NKbD1Zsi8N0/xr4w=="
        }
      ],
      "memo": ""
 	},
 	"mode": "block"
 }'

```

其中mode有三种：

* **block**: 交易被确认后返回,平均需等待2.5秒
* **sync**: 交易在当前节点通过后返回
* **async**: 立即返回,不对交易进行任何处理
  
## mint API

### 查询模块参数

```bash
curl http://127.0.0.1:1317/minting/parameters
```

response:

```json
{
  "height": "408921",
  "result": {
    "mint_denom": "pdip",
    "inflation_rate_change": "0.060000000000000000",
    "inflation_max": "0.100000000000000000",
    "inflation_min": "0.040000000000000000",
    "goal_bonded": "0.670000000000000000",
    "blocks_per_year": "6311520",
    "max_provisions": "350000000000000000000.000000000000000000"
  }
}
```

### 查询通胀率

```bash
curl http://127.0.0.1:1317/minting/inflation
```

response:

```json
{
  "height": "470678",
  "result": "0.044383296974657587"
}
```

### 查询年供应量

```bash
curl http://127.0.0.1:1317/minting/annual-provisions
```

response:

```json
{
  "height": "470681",
  "result": "28940081488938240393.675629801501580608"
}
```

## staking 相关

### 查询staking全局参数

```bash
curl http://127.0.0.1:1317/staking/parameters
```

response:

```json
{
  "height": "409004",
  "result": {
    "next_extending_time": "2021-09-18T12:44:16.516636Z", // 下一次增加验证人的时间
    "bond_denom": "pdip",
    "unbonding_time": "1209600000000000", // 解除绑定需要的时间，单位为秒
    "max_lever": "20.000000000000000000", // 验证人质押最大杠杆率
    "max_validators": 100, // 验证人最大数量
    "max_validators_extending_limit": 300, // 验证人数量上限
    "max_validators_extending_speed": 10, // 每年增加的验证人数量
    "max_entries": 7
  }
}
```

### 查询staking pool

```bash
curl http://127.0.0.1:1317/staking/pool
```

response:

```json
{
  "height": "470699",
  "result": {
    "not_bonded_tokens": "980999999999999",
    "bonded_tokens": "9771171015775390947"
  }
}
```

### 查询指定地址的所有委托信息

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| address | string | 账户地址 |

以地址```dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0``` 为例

```bash
# curl http://127.0.0.1:1317/staking/delegators/{address}/delegations

curl http://127.0.0.1:1317/staking/delegators/dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0/delegations
```

response:

```json
{
  "height": "409067",
  "result": [
    {
      "delegator_address": "dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0", // 质押者地址
      "validator_address": "dipvaloper1dcu73lw9uqkygpde4z4z22f079skta49w2c089", // 验证人地址
      "shares": "5000000000000000000.000000000000000000", // 质押所得的股份
      "balance": {
        "denom": "pdip",
        "amount": "4999500000000000000" // 余额
      }
    }
  ]
}
```

其中```balance```字段即委托的pdip资产数量。

### 查询正在解除委托的信息

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| address | string | 账户地址 |

以地址```dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0``` 为例

```bash
# curl http://127.0.0.1:1317/staking/delegators/{address}/unbonding_delegations
curl http://127.0.0.1:1317/staking/delegators/dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0/unbonding_delegations
```

response:

```json
{
  "height": "297565",
  "result": [
    {
      "delegator_address": "dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0",// 质押者地址
      "validator_address": "dipvaloper13dwwe6pv92ve9uy8k2u7006a9fd9jwc6nr55u4",// 验证人地址
      "entries": [
        {
          "creation_height": "297562",// 质押所在高度
          "completion_time": "2020-05-08T02:21:26.09861357Z",// 质押在该时间后可到账
          "initial_balance": "100",
          "balance": "100"
        },
        {
          "creation_height": "297565",
          "completion_time": "2020-05-08T02:21:42.274943985Z",
          "initial_balance": "1000",
          "balance": "1000"
        }
      ]
    }
  ]
}
```

### 查询指定地址相关的staking交易

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| address | string | 账户地址 |

request:

```bash
# curl http://127.0.0.1:1317/staking/delegators/{address}/txs

curl http://127.0.0.1:1317/staking/delegators/dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0/txs
```

response:

```json
```

### 查询指定地址绑定(委托)的所有验证人

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| address | string | 账户地址 |

request:

```bash
#curl http://127.0.0.1:1317/staking/delegators/{address}/validators


curl http://127.0.0.1:1317/staking/delegators/dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0/validators
```

response:

```json
{
  "height": "409189",
  "result": [
    {
      "operator_address": "dipvaloper1dcu73lw9uqkygpde4z4z22f079skta49w2c089",
      "consensus_pubkey": "dipvalconspub1zcjduepqwez78elxpkp6rjn3qq5r9qku30u3uw8mhadxqdgghhhrl3hxjn3su4qpft",
      "jailed": true,
      "status": 1,
      "tokens": "9999000000000000000",
      "delegator_shares": "10000000000000000000.000000000000000000",
      "description": {
        "moniker": "sun",
        "identity": "B466EC1BAB817E35",
        "website": "",
        "details": ""
      },
      "unbonding_height": "199487",
      "unbonding_time": "2020-10-14T01:05:44.164508006Z",
      "commission": {
        "commission_rates": {
          "rate": "0.100000000000000000",
          "max_rate": "0.500000000000000000",
          "max_change_rate": "0.500000000000000000"
        },
        "update_time": "2020-09-29T07:06:40.788454941Z"
      },
      "min_self_delegation": "1",
      "self_delegation": "5000000000000000000.000000000000000000"
    }
  ]
}
```

### 查询指定地址和指定验证的人委托信息

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| address | string | 账户地址 |
| ValidatorAddress | string | 验证人地址 |

request:

```bash
# curl http://127.0.0.1:1317/staking/delegators/{address}/delegations/{ValidatorAddress}

curl http://127.0.0.1:1317/staking/delegators/dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0/delegations/dipvaloper1dcu73lw9uqkygpde4z4z22f079skta49w2c089 
```

response:

```json
{
  "height": "409212",
  "result": {
    "delegator_address": "dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0",
    "validator_address": "dipvaloper1dcu73lw9uqkygpde4z4z22f079skta49w2c089",
    "shares": "5000000000000000000.000000000000000000",
    "balance": {
      "denom": "pdip",
      "amount": "4999500000000000000"
    }
  }
}
```

### 查询所有的验证人

```bash
curl http://127.0.0.1:1317/staking/validators
```

response:

```json
{
  "height": "409215",
  "result": [
    {
      "operator_address": "dipvaloper1d0mhm9a2t8u0fmh0mql2mjcaexq0fdl9q5s638",
      "consensus_pubkey": "dipvalconspub1zcjduepqgucyytt4s4pntk87cesqs7jcagwf850fppkdkeel62a0pkc3z4qsg7ugjg",
      "jailed": false,
      "status": 2,
      "tokens": "50000000000000000000",
      "delegator_shares": "50000000000000000000.000000000000000000",
      "description": {
        "moniker": "dipd-official",
        "identity": "",
        "website": "",
        "details": ""
      },
      "unbonding_height": "0",
      "unbonding_time": "1970-01-01T00:00:00Z",
      "commission": {
        "commission_rates": {
          "rate": "0.100000000000000000",
          "max_rate": "0.200000000000000000",
          "max_change_rate": "0.100000000000000000"
        },
        "update_time": "2020-09-18T06:44:16.516854Z"
      },
      "min_self_delegation": "1",
      "self_delegation": "50000000000000000000.000000000000000000"
    },
    {
      "operator_address": "dipvaloper1dmnuy5vj0hmkg2usdhm8c8agdrqutmr293f7kq",
      "consensus_pubkey": "dipvalconspub1zcjduepqyteuk9ts78rq756w0v3kt0j0dxxt5z65k3mj5e9l0u22h5g8tw4qflpvcd",
      "jailed": false,
      "status": 2,
      "tokens": "10000000000000000000",
      "delegator_shares": "10000000000000000000.000000000000000000",
      "description": {
        "moniker": "highstreet",
        "identity": "",
        "website": "http://www.highstreet.com",
        "details": "highsteet is a fashion company"
      },
      "unbonding_height": "0",
      "unbonding_time": "1970-01-01T00:00:00Z",
      "commission": {
        "commission_rates": {
          "rate": "0.100000000000000000",
          "max_rate": "0.200000000000000000",
          "max_change_rate": "0.010000000000000000"
        },
        "update_time": "2020-09-18T08:14:07.092281418Z"
      },
      "min_self_delegation": "100",
      "self_delegation": "10000000000000000000.000000000000000000"
    }
  ]
}
```

### 根据验证人地址，获取验证人信息

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| ValidatorAddress | string | 验证人地址 |

```bash
# curl http://127.0.0.1:1317/staking/validators/{ValidatorAddress}

curl http://127.0.0.1:1317/staking/validators/dipvaloper1d0mhm9a2t8u0fmh0mql2mjcaexq0fdl9q5s638
```

response:

```json
{
  "height": "409228",
  "result": {
    "operator_address": "dipvaloper1d0mhm9a2t8u0fmh0mql2mjcaexq0fdl9q5s638",
    "consensus_pubkey": "dipvalconspub1zcjduepqgucyytt4s4pntk87cesqs7jcagwf850fppkdkeel62a0pkc3z4qsg7ugjg",
    "jailed": false,
    "status": 2,
    "tokens": "50000000000000000000", // 总token数量
    "delegator_shares": "50000000000000000000.000000000000000000", // 总股份数量
    "description": {
      "moniker": "dipd-official",
      "identity": "",
      "website": "",
      "details": ""
    },
    "unbonding_height": "0",
    "unbonding_time": "1970-01-01T00:00:00Z",
    "commission": {
      "commission_rates": {
        "rate": "0.100000000000000000",
        "max_rate": "0.200000000000000000",
        "max_change_rate": "0.100000000000000000"
      },
      "update_time": "2020-09-18T06:44:16.516854Z"
    },
    "min_self_delegation": "1",
    "self_delegation": "50000000000000000000.000000000000000000" // 自抵押数量
  }
}
```

## distribution API

### 查询模块参数

```bash
curl http://127.0.0.1:1317/distribution/parameters
```

response:

```json
{
  "height": "0",
  "result": {
    "community_tax": "0.010000000000000000",
    "base_proposer_reward": "0.010000000000000000",
    "bonus_proposer_reward": "0.040000000000000000",
    "withdraw_addr_enabled": true
  }
}
```

### 查询指定地址的所有委托收益

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| address | string | 账户地址 |

```bash
# curl http://127.0.0.1:1317/distribution/delegators/{address}/rewards

curl http://127.0.0.1:1317/distribution/delegators/dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0/rewards
```

response:

```json
{
  "height": "0",
  "result": {
    "rewards": [
      {
        "validator_address": "dipvaloper1dcu73lw9uqkygpde4z4z22f079skta49w2c089",
        "reward": [
          {
            "denom": "pdip",
            "amount": "4758646048972463.861500000000000000"
          }
        ]
      }
    ],
    "total": [
      {
        "denom": "pdip",
        "amount": "4758646048972463.861500000000000000"
      }
    ]
  }
}
```

### 指定地址和验证人地址，查询委托收益

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| address | string | 账户地址 |
| ValidatorAddress | string | 验证人地址 |

request: 

```bash
# curl http://127.0.0.1:1317/distribution/delegators/{address}/rewards/{ValidatorAddress}

curl http://127.0.0.1:1317/distribution/delegators/dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0/rewards/dipvaloper1dcu73lw9uqkygpde4z4z22f079skta49w2c089
```

response:

```json
{
  "height": "0",
  "result": [
    {
      "denom": "pdip",
      "amount": "4758646048972463.861500000000000000"
    }
  ]
}
```

### 查询收益的取现地址

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| delegatorAddr | string | 委托人的账户地址 |

request:

```bash
# curl http://127.0.0.1:1317/distribution/delegators/{delegatorAddr}/withdraw_address


curl http://127.0.0.1:1317/distribution/delegators/dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0/withdraw_address
```

response:

```json
{
  "height": "409275",
  "result": "dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0"
}
```

### 查询验证人收益

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| validatorAddr | string | 验证人地址 |

request:

```bash
# curl http://127.0.0.1:1317/distribution/validators/{validatorAddr}

curl http://127.0.0.1:1317/distribution/validators/dipvaloper13dwwe6pv92ve9uy8k2u7006a9fd9jwc6nr55u4
```

response:

```json
{
  "height": "0",
  "result": {
    "operator_address": "dip13dwwe6pv92ve9uy8k2u7006a9fd9jwc6gzqx0e",
    "self_bond_rewards": [
      {
        "denom": "pdip",
        "amount": "24600830777753870.939086144470712200"
      }
    ],
    "val_commission": [
      {
        "denom": "pdip",
        "amount": "207906177334510092.043971528899436676"
      }
    ]
  }
}
```

### 查询验证人自委托的金收益

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| validatorAddr | string | 验证人地址 |

request:

```bash
# curl http://127.0.0.1:1317/distribution/validators/{validatorAddr}/rewards

curl http://127.0.0.1:1317/distribution/validators/dipvaloper1dcu73lw9uqkygpde4z4z22f079skta49w2c089/rewards
```

response:

```json
{
  "height": "0",
  "result": [
    {
      "denom": "pdip",
      "amount": "4758646048972463.861500000000000000"
    }
  ]
}
```

## 提案相关API

### 查询所有提案

```bash
curl http://127.0.0.1:1317/gov/proposals
```

## 合约相关API

### 查询合约代码

参数说明：
| 参数名称 | 类型 | 说明 |
| ------- | --- | --- |
| address | string | 合约账户地址 |

request:

```bash
# curl http://localhost:1317/vm/code/{address}

curl http://localhost:1317/vm/code/dip19lhydp6k59c66x2vp3h4ua8r8535uh6dlmex6y
```

response:

```json
{
  "height": "1460",
  "result": "608060405234801561001057600080fd5b50600436106100a95760003560e01c80636b520757116100715780636b5207571461016e5780639cc7f7081461018c578063a17a9e66146101ce578063aef52a2c14610210578063cc445d4e1461022e578063dac0eb071461025c576100a9565b80631e1ed70b146100ae578063300308ba146100e65780633033413b146100f05780634903b0d11461010e5780635d33a27f14610150575b600080fd5b6100e4600480360360408110156100c457600080fd5b81019080803590602001909291908035906020019092919050505061028a565b005b6100ee6102a6565b005b6100f86102b0565b6040518082815260200191505060405180910390f35b61013a6004803603602081101561012457600080fd5b81019080803590602001909291905050506102b6565b6040518082815260200191505060405180910390f35b6101586102ce565b6040518082815260200191505060405180910390f35b6101766102d4565b6040518082815260200191505060405180910390f35b6101b8600480360360208110156101a257600080fd5b81019080803590602001909291905050506102dd565b6040518082815260200191505060405180910390f35b6101fa600480360360208110156101e457600080fd5b81019080803590602001909291905050506102fa565b6040518082815260200191505060405180910390f35b610218610315565b6040518082815260200191505060405180910390f35b61025a6004803603602081101561024457600080fd5b810190808035906020019092919050505061031b565b005b6102886004803603602081101561027257600080fd5b8101908080359060200190929190505050610329565b005b8060036000848152602001908152602001600020819055505050565b6064600081905550565b60005481565b60036020528060005260406000206000915090505481565b60015481565b60008054905090565b600060036000838152602001908152602001600020549050919050565b60008160008082825401925050819055506000549050919050565b60025481565b806001540160008190555050565b60016002540160028190555061033e816102fa565b6001600082825401925050819055505056fea26469706673582212207339ae9e785d6abe064a41bdebda6eb72d116c63a4382c77d452d75c3a7f4fa664736f6c63430006000033"
}
```

### 预估交易费用/调用合约方法

调用```estimate_gas``` API接口，可同时获取合约交易消耗的gas和合约方法的返回值，其中返回的gas只是预估值，真正发起链上记账时，建议适当上调，避免Out of Gas错误。

#### 创建合约

预估创建合约交易的gas，需要向接口post一个如下的结构体：

```json
{
	"from": "dip13f5tmt88z5lkx8p45hv7a327nc0tpjzlwsq35e",
	"to": "",
	"payload": "608060405234801561001057600080fd5b506509184e72a0006000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610344806100696000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327e235e31461005c57806370a08231146100b3578063a9059cbb1461010a575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610162565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100f4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061017a565b6040518082815260200191505060405180910390f35b610148600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101c2565b604051808215151515815260200191505060405180910390f35b60006020528060005260406000206000915090505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561021157600080fd5b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050929150505600a165627a7a7230582015481e18f5439ee76271037928d88d33cc7d7d4bf1e5e801b78db9e902f255560029",
	"amount": {
		"denom": "pdip",
		"amount": "0"
	}
}
```

其中from为交易发起的合约地址，to为空, payload为合约代码的十六进制形式，amount为向合约发送的资产数量。

可通过```dipcli```构造payload，，如下构造一个创建合约的交易消息，不做签名

```bash
dipcli vm create --code_file=./demo/demo.bc \
--from $(dipcli keys show -a alice) --amount=0pdip \
--gas=1000000 --generate-only
```

request:

```bash
curl -X POST localhost:1317/vm/estimate_gas -d '
{
	"from": "dip1dcu73lw9uqkygpde4z4z22f079skta49vxs2r0",
	"to": "",
	"payload": "608060405234801561001057600080fd5b506509184e72a0006000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610344806100696000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327e235e31461005c57806370a08231146100b3578063a9059cbb1461010a575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610162565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100f4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061017a565b6040518082815260200191505060405180910390f35b610148600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101c2565b604051808215151515815260200191505060405180910390f35b60006020528060005260406000206000915090505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561021157600080fd5b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050929150505600a165627a7a7230582015481e18f5439ee76271037928d88d33cc7d7d4bf1e5e801b78db9e902f255560029",
	"amount": {
		"denom": "pdip",
		"amount": "0"
	}
}'
```

response:

```bash
{
  "height": "409350",
  "result": {
    "Gas": "247832",
    "Res": "608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327e235e31461005c57806370a08231146100b3578063a9059cbb1461010a575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610162565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100f4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061017a565b6040518082815260200191505060405180910390f35b610148600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101c2565b604051808215151515815260200191505060405180910390f35b60006020528060005260406000206000915090505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561021157600080fd5b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050929150505600a165627a7a7230582015481e18f5439ee76271037928d88d33cc7d7d4bf1e5e801b78db9e902f255560029"
  }
}

# Gas为预估的费用
# Res为创建合约的返回值，即所部署的合约代码
```

#### 调用合约

request:

```bash
curl -X POST localhost:1317/vm/estimate_gas -d '
{
	"from": "dip13f5tmt88z5lkx8p45hv7a327nc0tpjzlwsq35e",
	"to": "dip1k2npq7lgmha23wy7e2swu2hqwta3fpt6agk47h",
	"payload": "70a082310000000000000000000000000000000000000000000000000000000000000000",
	"amount": {
		"denom": "pdip",
		"amount": "1000000"
	}
}'
```

response:

```json
{
  "height": "298",
  "result": {
    "Gas": "14924",
    "Res": "0000000000000000000000000000000000000000000000000000000000000001"
  }
}

# Gas为预估的费用
# Res为调用方法的返回值
```

其中post_data及payload的生成 ，可以借助dipcli工具，参考[这里](../vm/vm.md##调用智能合约)
