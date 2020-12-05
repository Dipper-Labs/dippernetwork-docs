# 特殊权益用户

## 简介

DipperNetwork引入了由基金会控制且具有一定特殊权益的系统用户：profiler

* Profiler的权益
    1. 通过治理提交软件升级/停止提议。
    2. 使用`profiling`模式发起服务调用，`profiling`模式会免除服务费。

* Genesis Profiler的权益（在创世的genesis.json中定义）
    1. 只有Genesis Profiler可以 添加/删除 普通Profiler账户

## 使用场景

1. 添加profiler

    添加profiler （仅限Genesis Profiler）

    ```bash
    dipd add-genesis-guardian --address=<profiler-address> --description=<profiler-description> --chain-id=dipperhub --from=<key-name> --fees=0.3iris
    ```

2. 查询profiler和trustee列表

    查询profiler列表

    ```bash
    dipcli q guardian profilers
    ```

3. Profiler提交软件升级/停止提议

    详细参考[upgrade](upgrade.md)
