---
order: 2
---

# 扫描所有交易

## 1.获取最新区块高度
```bash
curl -s http://127.0.0.1:1317/blocks/latest | jq .block.header.height
```

## 2.获取指定区块的所有交易
以主网区块高度72296为例，该区块只有一笔交易，交易hash：0E7E6328D4A70BC96AE2ECD16545DDBC4D189FF961DCF33B777869A6FC4EAE74

- 获取区块92296的所有交易，返回值是1个包含该区块所有交易的数组
```bash
curl -s http://127.0.0.1:1317/blocks/72296 | jq .block.data.txs
```

结果：
```json
[
  "2gGfv6E0CksYVDXeChQW0DxAf7hP9mFBfHuqQMzdTdmIIRIUB88vMcTN2sQ5Qc5gMxGS40t7+cMaGQoEcGRpcBIRMTAwMDAwMDAwMDAwMDAwMDASGwoVCgRwZGlwEg0xMjAwMDAwMDAwMDAwEMCaDBpqCibrWumHIQMvATpKM/M9yoY9k5zYMmwW/SJ9S4S8Rm677/v5TWpDhBJAljuE0NSHwBcj9jpCbLv8pYt+BQx0xXG022L7JchjjMtTWPVWuJ3XW6qD2Vzrhv4E/nBDodXLZleq6nyb+Bl1Fw=="
]
```

## 3.计算交易hash
- 遍历步骤2中返回的交易数组，对每笔交易，做base64解码，解码后对交易内容做hash得到交易hash
- 参考golang代码如下：

```
package main

import (
	"encoding/base64"
	"fmt"

	"github.com/Dipper-Labs/Dipper-Protocol/hexutil"
	"github.com/tendermint/tendermint/crypto/tmhash"
)

func main() {
	// height: 72296
	// tx_hash: 0E7E6328D4A70BC96AE2ECD16545DDBC4D189FF961DCF33B777869A6FC4EAE74
	base64Tx := "2gGfv6E0CksYVDXeChQW0DxAf7hP9mFBfHuqQMzdTdmIIRIUB88vMcTN2sQ5Qc5gMxGS40t7+cMaGQoEcGRpcBIRMTAwMDAwMDAwMDAwMDAwMDASGwoVCgRwZGlwEg0xMjAwMDAwMDAwMDAwEMCaDBpqCibrWumHIQMvATpKM/M9yoY9k5zYMmwW/SJ9S4S8Rm677/v5TWpDhBJAljuE0NSHwBcj9jpCbLv8pYt+BQx0xXG022L7JchjjMtTWPVWuJ3XW6qD2Vzrhv4E/nBDodXLZleq6nyb+Bl1Fw=="
	tx, err := base64.StdEncoding.DecodeString(base64Tx)
	if err != nil {
		fmt.Errorf("decode bash64 failed, err:%s", err)
		return
	}

	txHash := tmhash.Sum(tx)
	txHashStr := hexutil.Encode(txHash)
	fmt.Println(txHashStr)
}

```

- 最终得到交易hash：0e7e6328d4a70bc96ae2ecd16545ddbc4d189ff961dcf33b777869a6fc4eae74

## 4.根据交易hash查询交易
对步骤3中计算的hash做交易查询，得到交易详情
```bash
curl -s http://127.0.0.1:1317/txs/0e7e6328d4a70bc96ae2ecd16545ddbc4d189ff961dcf33b777869a6fc4eae74
```

## 5.从创世区块扫描所有交易
伪代码：
```
latestBlockHeight = getLatestBlock().blockHeight()
for height in range[1...latestBlockHeight] {
    block = getBlockByHeight(height)
    txs = getTxs(block)
    for base64Tx in range(txs) {
        tx = decodeBase64(base64Tx)
        txHash = calculateHash(tx)
        txJson = getTxByHash(txHash)
    }
}
```
