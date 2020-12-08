# 惩罚

Slashing 模块可以解禁被监禁的验证人

## 可用命令

| 名称                                                | 描述                         |
| --------------------------------------------------- | ---------------------------- |
| [unjail](#dipcli-tx-slashing-unjail)                  | 解禁被监禁的验证人           |
| [params](#dipcli-query-slashing-params)               | 查询当前`Slashing`的参数信息 |
| [signing-info](#dipcli-query-slashing-signing-info)   | 查询验证人的签名信息         |

## dipcli tx slashing unjail

解禁被监禁的验证人。

```bash
dipcli tx slashing unjail [flags]
```

## dipcli query slashing params

查询当前`Slashing`的参数信息。

```bash
dipcli query slashing params [flags]
```

## dipcli query slashing signing-info

查询验证人的签名信息。

```bash
dipcli query slashing signing-info [validator-conspub] [flags]
```
