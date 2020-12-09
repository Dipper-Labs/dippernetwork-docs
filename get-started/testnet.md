---
order: 3
---

# 加入测试网

## 最新版本

DipperNetwork 测试网的最新版本是[v4.0.2](https://github.com/Dipper-Labs/Dipper-Protocol/releases/tag/v4.0.2)

## 安装

```bash
git clone -b testnet https://github.com/Dipper-Labs/Dipper-Protocol.git
cd Dipper-Protocol && git checkout v4.0.2
make install
```

编译安装完成后，检查版本号

```bash
dipd version
4.0.2-0

dipcli version
4.0.2-0
```

## 运行全节点

```bash
# 初始化节点
dipd init <your-custom-name> --chain-id=dip-testnet

# 下载主网公开的 config.toml 和 genesis.json
curl -o ~/.dipd/config/config.toml https://raw.githubusercontent.com/Dipper-Labs/testnet/master/config/config.toml
curl -o ~/.dipd/config/genesis.json https://raw.githubusercontent.com/Dipper-Labs/testnet/master/config/genesis.json

# 启动节点（也可使用 nohup 或 systemd 等方式后台运行）
dipd start
```

## 申领测试token
将以下链接的\<address\>替换为你的测试网地址，浏览器访问该地址即可申请测试token
```
https://faucet.testnet.dippernetwork.com/get_token?<address>
```

## 测试网相关链接

- RPC：<http://rpc.testnet.dippernetwork.com>

- 区块浏览器：<https://explorer.testnet.dippernetwork.com>

- 水龙头：<https://faucet.testnet.dippernetwork.com/get_token?your_address>