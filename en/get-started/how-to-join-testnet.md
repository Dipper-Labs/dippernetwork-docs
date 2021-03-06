# How to join the tesetnet
## 1. Install dip
 
Please follow the [tutorial](../software/how-to-install.md) to install dip

## 2. Settings

```bash
# usage: 
# dipd init <your_custom_name> --chain-id dip-testnet
# example:
dipd init jackson --chain-id dip-testnet

# Download genesis file  from github
wget https://raw.githubusercontent.com/Dipper-Labs/Dipper-Protocol/master/genesis.json -O  ~/.dipd/config/genesis.json

# Modify the configuration file:~/.dipd/config/config.toml， add seed-nodes as follows:
# Comma separated list of seed nodes to connect to
seeds = "1bff9bb3c0adec73c13ee54041f69cf3baf7aaf0@47.110.67.210:26656"

# Comma separated list of nodes to keep persistent connections to
persistent_peers = "1bff9bb3c0adec73c13ee54041f69cf3baf7aaf0@47.110.67.210:26656"
```

## 3. Start dipd

```bash
# After executing the following command, the console will print the log
dipd start
```

## 4. View node synchronization status

```bash
# Open a new terminal
curl http://127.0.0.1:26657/status

# The output is as follows:
{
  "jsonrpc": "2.0",
  "id": "",
  "result": {
    "node_info": {
      "protocol_version": {
        "p2p": "7",
        "block": "10",
        "app": "0"
      },
      "id": "204d94d5a6dbf73a89101a0d084c2fb56462963a", // Node id
      "listen_addr": "tcp://0.0.0.0:26656", // Node p2p connection listening address
      "network": "dip-testnet", //chain-id
      "version": "0.32.2",
      "channels": "4020212223303800",
      "moniker": "jackson", // Node name
      "other": {
        "tx_index": "on",
        "rpc_address": "tcp://127.0.0.1:26657"
      }
    },
    "sync_info": {  //Current node information
      "latest_block_hash": "A4E5D60DE7CFB6598846A4131302C8FD28F2697DF2291B33B0892A9EACB562D8", // Latest block hash
      "latest_app_hash": "32F0B29280EDF3BEAE98424D9AA256EDBEFC973D1C33431A8D74FCA3BC3B6582",
      "latest_block_height": "1489",     // The latest block height to which the current node is synchronized                                                      // Latest block height
      "latest_block_time": "2019-09-10T05:33:13.428333584Z",                                  // Latest block time
      "catching_up": false
    },
    "validator_info": { // Validator information
      "address": "92E0F0A50779E67A2AC25AAF6BCD1E5CF0841DFE",
      "pub_key": {
        "type": "tendermint/PubKeyEd25519",
        "value": "cGvHGxHXzOk/L5yVtxeyS9U1mGBNFszvAdYlQoQVGCw="
      },
      "voting_power": "0"
    }
  }
```

When the height of the block synchronized by the node is the same as that on the block browser，indicates that the nodes have completed synchronization. At this point, a full node is deployed.

Now, you can try to deploy a Validator on DipperNetwork chain. [Click here](./how-to-become-validator.md)

## More resources

* Blockchain browser address of the testnet : <https://explorer.dippernetwork.com>
* Apply for a token for test token, click [here](./testcoin.md)
