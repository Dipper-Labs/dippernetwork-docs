# 节点状态

查询节点状态

**标志：**

| 名称，速记 | 默认                  | 描述                                    | 必须 |
| ---------- | --------------------- | --------------------------------------- | ---- |
| --node，-n | tcp://localhost:26657 | \<host>:\<port> Tendermint节点的rpc地址 |      |

## 查询节点状态

```bash
dipcli status
```

示例输出：

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
  "sync_info": {
    "latest_block_hash": "E55E114C5AF9C4ADD52A16A639519E108A575F4DC325F48803251D6EB2B6390B",
    "latest_app_hash": "BD652DAB49A36AFD811BE014D515D0023B8B8A4E48D651BCC32C2CC06F2DDE1B",
    "latest_block_height": "432867",
    "latest_block_time": "2020-12-05T15:47:12.730966741Z",
    "catching_up": false
  },
  "validator_info": {
    "address": "C7FF2E688DF59E5EA2CD2697DBA2E48839813DAB",
    "pub_key": {
      "type": "tendermint/PubKeyEd25519",
      "value": "8ktelL0b2BiIh22IOBzksqRrOLhIgCWey3Q0/fiSZpM="
    },
    "voting_power": "0"
  }
}
```
