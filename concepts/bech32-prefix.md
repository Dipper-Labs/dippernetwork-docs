---
order: 5
---

# Bech32 前缀

Bech32是由Pieter Wuille和Greg Maxwel提出的新比特币地址格式。除了比特币之外,bech32可以编码任何短二进制数据。在DipperNetwork里，私钥和地址可能指的是一些在网络中不同的角色，例如普通账户和验证人账户等。DipperNetwork设计使用Bech32地址格式来提供对数据鲁棒的完整性检查。用户可读部分(human readable part) 可帮助用户有效理解地址和阅读错误信息。Bech32更多细节见 [bip-0173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)。

## 用户可读部分表

| HRP | Definition                              |
| --- | :-------------------------------------- |
| dip | DipperNetwork Account Address                 |
| dippub | DipperNetwork Account Public Key              |
| dipvaloper | DipperNetwork Validator's Operator Address    |
| dipvaloperpub | DipperNetwork Validator's Operator Public Key |
| dipvalcons | Tendermint Consensus Address            |
| dipvalconspub | Tendermint Consensus Public Key         |

## 编码

不是所有DipperNetwork的用户地址都会以bech32的格式暴露出来。许多地址仍然是hex编码或者base64编码。 在bech32编码之前，首先要使用amino对其他地址私钥二进制表示进行编码。

## 账户密钥示例

一旦创建一个新的账户，你将会看到以下信息:

```bash
NAME:    TYPE:           ADDRESS:                                PUBKEY:
test1    local    dip1fcjdh96hnnc79fzwytv02svkkqqk8gfxmsuv4u    dippub1addwnpepqfpfvrme4tvzkfwc8msjp50aqnk5kjuh68e9kv3l4z7gtn6m4lp3vcn39kh
```

这意味着你创建了一个新账户地址 `dip1fcjdh96hnnc79fzwytv02svkkqqk8gfxmsuv4u`， 它的用户可读部分是 `dip`。他的公钥被编码成  `dippub1addwnpepqfpfvrme4tvzkfwc8msjp50aqnk5kjuh68e9kv3l4z7gtn6m4lp3vcn39kh`， 它的用户可读部分是 `dippub`。

## 验证人密钥示例

在执行 `dipd init`命令时回自动产生一个Tendermint的共识密钥给该节点。你可以通过以下命令查询：

```bash
dipd tendermint show-validator --home=<dipd-home>
```

示例输出:

```bash
dipvalconspub1zcjduepq7f94a99ar0vp3zy8dkyrs88yk2jxkw9cfzqzt8ktws60m7yjv6fsgw4mtd
```
