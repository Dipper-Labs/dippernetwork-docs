# 交易费用代付（元交易）

DipperNetwork在底层上原生支持第三方交易费用代付。本文介绍如何基于DipperNetwork区块链网络，将一笔交易的费用，由第三方来支付。  

## 流程

![流程图](../pics/fee_payment.png)

交易费用代付的原理，主要是基于：当一笔交易消息体中包含多个signatures时，DipperNetwork区块链网络将按交易签名顺序，选择排第一位的收取交易费用。关于交易结构，参考[这里](./transaction.md)。

以```alice```和```bob```为例，```bob```向DipperNetwork区块链网络发起一笔交易(以转帐为例)，交易费用由```alice```来代付。 ```alice``` 和```bob```可共同生成一笔交易，并且```alice```将自己的msg和签名放第一位。流程中将会涉及到```alice```和```bob```的几次交互。

### 1. bob 构造一笔转帐交易

```bash
dipcli send --from $(dipcli keys show bob -a) --to $(dipcli keys show dan -a) --amount 1pdip --generate-only > unsigned.json
```

上述命令构造一个未签名的转帐交易并输出到```unsigned.json```文件，```bob``` 向 ```dan```转帐 ```1pdip```， 其中 ```--generate-only``` 即构造一个未签名的交易。 ```unsigned.json```文件内容如下

```json
{
	"type": "dip/StdTx",
	"value": {
		"msg": [{
			"type": "dip/MsgSend",
			"value": {
				"from_address": "dip15uawqy70c0ew4y6nc3rdcsfs3lnr0p0e8svku0",
				"to_address": "dip12kl4e092s6lt7uzkcd820d24ayxyks8kzv2kqk",
				"amount": [{
					"denom": "pdip",
					"amount": "1"
				}]
			}
		}],
		"fee": {
			"amount": [{
				"denom": "pdip",
				"amount": "2000000000"
			}],
			"gas": "200000"
		},
		"signatures": null,
		"memo": ""
	}
}
```

### 2. bob 将未签名的交易文件，发送给alice

```alice``` 收到```bob```的未签名文件```unsigned.json```后，将：

#### (1) 构造一笔由```alice```发起的交易

以```alice```构造一笔转帐给自己的交易为例，```alice```执行如下命令，产生一个未签名的交易

```bash
dipcli send --from $(dipcli keys show alice -a) --to $(dipcli keys show alice -a) --amount 1pdip --generate-only
```

控制台输出如下

```bash
{
	"type": "dip/StdTx",
	"value": {
		"msg": [{
			"type": "dip/MsgSend",
			"value": {
				"from_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
				"to_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
				"amount": [{
					"denom": "pdip",
					"amount": "1"
				}]
			}
		}],
		"fee": {
			"amount": [{
				"denom": "pdip",
				"amount": "2000000000"
			}],
			"gas": "200000"
		},
		"signatures": null,
		"memo": ""
	}
}
```

#### (2) 将(1)中的msg部分，合并至```unsigned.json```文件，并作为第一个msg

将如下部分合并至```unsigned.json```文件:

```json
{
	"type": "dip/MsgSend",
	"value": {
		"from_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
		"to_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
		"amount": [{
			"denom": "pdip",
			"amount": "1"
		}]
	}
}
```

合并后的``unsigned.json```文件内容如下

```json
{
	"type": "dip/StdTx",
	"value": {
		"msg": [{
			"type": "dip/MsgSend",
			"value": {
				"from_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
				"to_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
				"amount": [{
					"denom": "pdip",
					"amount": "1"
				}]
			}
		}, {
			"type": "dip/MsgSend",
			"value": {
				"from_address": "dip15uawqy70c0ew4y6nc3rdcsfs3lnr0p0e8svku0",
				"to_address": "dip12kl4e092s6lt7uzkcd820d24ayxyks8kzv2kqk",
				"amount": [{
					"denom": "pdip",
					"amount": "1"
				}]
			}
		}],
		"fee": {
			"amount": [{
				"denom": "pdip",
				"amount": "2000000000"
			}],
			"gas": "200000"
		},
		"signatures": null,
		"memo": ""
	}
}
```

#### (3) alice 调整交易所需的gas

```unsigned.json```文件中目前包含了2个msg，交易被执行时会消耗更多的gas，此处```alice```将交易gas乘以2。 ```unsigned.json```文件如下:

```json
{
	"type": "dip/StdTx",
	"value": {
		"msg": [{
				"from_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
				"to_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
				"amount": [{
					"denom": "pdip",
					"amount": "1"
				}]
			},
			{
				"type": "dip/MsgSend",
				"value": {
					"from_address": "dip15uawqy70c0ew4y6nc3rdcsfs3lnr0p0e8svku0",
					"to_address": "dip12kl4e092s6lt7uzkcd820d24ayxyks8kzv2kqk",
					"amount": [{
						"denom": "pdip",
						"amount": "1"
					}]
				}
			}
		],
		"fee": {
			"amount": [{
				"denom": "pdip",
				"amount": "4000000000"
			}],
			"gas": "400000"
		},
		"signatures": null,
		"memo": ""
	}
}
```

#### (4) 签名

```alice``` 对```unsigned.json```文件进行签名，结果输出到```signed-1.json```文件

```bash
dipcli tx sign unsigned.json --from $(dipcli keys show alice -a) > signed-1.json
```

签名后得到的```signed-1.json```文件如下：

```json
{
  "type": "dip/StdTx",
  "value": {
    "msg": [
      {
        "type": "dip/MsgSend",
        "value": {
          "from_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
          "to_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
          "amount": [
            {
              "denom": "pdip",
              "amount": "1"
            }
          ]
        }
      },
      {
        "type": "dip/MsgSend",
        "value": {
          "from_address": "dip15uawqy70c0ew4y6nc3rdcsfs3lnr0p0e8svku0",
          "to_address": "dip12kl4e092s6lt7uzkcd820d24ayxyks8kzv2kqk",
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
          "amount": "4000000000"
        }
      ],
      "gas": "400000"
    },
    "signatures": [
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "AyNWrU4el+6kra99X5B1RuC7znqc2bdMkkXgyBrzZW+x"
        },
        "signature": "hujTY3yaVJVcl+4uGV7+8hOvyd6EvLpdITjVoX5fa91rJ+q93qVxYrIVjbZEC4hyQnWv2t6yY6ffGRuU9AmXtA=="
      }
    ],
    "memo": ""
  }
}
```

### 3. alice将签过名的文件，返还给bob

```bob```收到```alice```签名过的```signed-1.json```文件后， 对```signed-1.json```文件进行签名

```bash
dipcli tx sign signed-1.json --from $(dipcli keys show bob -a) > signed-2.json
```

签名后得到的```signed-2.json```如下：

```json
{
  "type": "dip/StdTx",
  "value": {
    "msg": [
      {
        "type": "dip/MsgSend",
        "value": {
          "from_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
          "to_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
          "amount": [
            {
              "denom": "pdip",
              "amount": "1"
            }
          ]
        }
      },
      {
        "type": "dip/MsgSend",
        "value": {
          "from_address": "dip15uawqy70c0ew4y6nc3rdcsfs3lnr0p0e8svku0",
          "to_address": "dip12kl4e092s6lt7uzkcd820d24ayxyks8kzv2kqk",
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
          "amount": "4000000000"
        }
      ],
      "gas": "400000"
    },
    "signatures": [
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "AyNWrU4el+6kra99X5B1RuC7znqc2bdMkkXgyBrzZW+x"
        },
        "signature": "hujTY3yaVJVcl+4uGV7+8hOvyd6EvLpdITjVoX5fa91rJ+q93qVxYrIVjbZEC4hyQnWv2t6yY6ffGRuU9AmXtA=="
      },
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "AqhO46Gf2J/WCj2/MgbcjkZDd+jZoaZUFWSj018+AIwi"
        },
        "signature": "or/oLTp2hUR36sILYVcKRQG8+31DcQd5aEu4FpLy670QLnsEcQPhff9lW3qxF0szjo0ED0STzLYuyqNkeBhUKQ=="
      }
    ],
    "memo": ""
  }
}
```

### 4. bob将最终的文件发送到网络

```bob```将最终产生的```signed-2.json```文件广播到区块链网络。

```bash
dipcli tx broadcast signed-2.json
```

响应如下:

```json
{
  "height": "0",
  "txhash": "7B7DA9B0F9398134AF1782A4E438505C61CAECCA500673C73D6F9BC3B59FF8F8",
  "raw_log": "[]"
}
```

发送后，可根据txHash查询交易详情：

```bash
dipcli q tx 7B7DA9B0F9398134AF1782A4E438505C61CAECCA500673C73D6F9BC3B59FF8F8
```

查询结果如下：
```json
{
  "height": "1330",
  "txhash": "7B7DA9B0F9398134AF1782A4E438505C61CAECCA500673C73D6F9BC3B59FF8F8",
  "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":null},{\"msg_index\":1,\"success\":true,\"log\":\"\",\"events\":null}]",
  "logs": [
    {
      "msg_index": 0,
      "success": true,
      "log": "",
      "events": null
    },
    {
      "msg_index": 1,
      "success": true,
      "log": "",
      "events": null
    }
  ],
  "gas_wanted": "400000",
  "gas_used": "104507",
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
          "value": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa"
        },
        {
          "key": "module",
          "value": "bank"
        },
        {
          "key": "action",
          "value": "send"
        },
        {
          "key": "sender",
          "value": "dip15uawqy70c0ew4y6nc3rdcsfs3lnr0p0e8svku0"
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
          "value": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa"
        },
        {
          "key": "amount",
          "value": "1pdip"
        },
        {
          "key": "recipient",
          "value": "dip12kl4e092s6lt7uzkcd820d24ayxyks8kzv2kqk"
        },
        {
          "key": "amount",
          "value": "1pdip"
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
            "from_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
            "to_address": "dip1pgd5p27eg9s9mhqq63nauexjfhg8mhfz2rpdsa",
            "amount": [
              {
                "denom": "pdip",
                "amount": "1"
              }
            ]
          }
        },
        {
          "type": "dip/MsgSend",
          "value": {
            "from_address": "dip15uawqy70c0ew4y6nc3rdcsfs3lnr0p0e8svku0",
            "to_address": "dip12kl4e092s6lt7uzkcd820d24ayxyks8kzv2kqk",
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
            "amount": "4000000000"
          }
        ],
        "gas": "400000"
      },
      "signatures": [
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "AyNWrU4el+6kra99X5B1RuC7znqc2bdMkkXgyBrzZW+x"
          },
          "signature": "hujTY3yaVJVcl+4uGV7+8hOvyd6EvLpdITjVoX5fa91rJ+q93qVxYrIVjbZEC4hyQnWv2t6yY6ffGRuU9AmXtA=="
        },
        {
          "pub_key": {
            "type": "tendermint/PubKeySecp256k1",
            "value": "AqhO46Gf2J/WCj2/MgbcjkZDd+jZoaZUFWSj018+AIwi"
          },
          "signature": "or/oLTp2hUR36sILYVcKRQG8+31DcQd5aEu4FpLy670QLnsEcQPhff9lW3qxF0szjo0ED0STzLYuyqNkeBhUKQ=="
        }
      ],
      "memo": ""
    }
  },
  "timestamp": "2020-03-15T10:15:12Z"
}
```