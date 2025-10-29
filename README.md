# GraffitiChain (Action Workspace)

## 目录
- 合约项目: `action/fhevm-hardhat-template`
- 前端项目: `action/frontend`

## 一、准备
- Node.js >= 20
- 钱包: MetaMask
- 测试网 ETH: Sepolia

## 二、部署到 Sepolia
1. 安装依赖
```
cd action/fhevm-hardhat-template
npm i
```
2. 设置变量
```
npx hardhat vars set MNEMONIC "<your mnemonic>"
npx hardhat vars set INFURA_API_KEY "<your infura key>"
# 可选：用于验证
npx hardhat vars set ETHERSCAN_API_KEY "<your etherscan key>"
```
3. 编译与部署
```
npx hardhat compile
npx hardhat deploy --network sepolia
```
4. 生成 ABI/地址到前端
```
cd ../frontend
npm i
npm run genabi
```
5. 启动前端
```
npm run dev
```
6. 前端操作
- 连接钱包 (Sepolia)
- Mint Demo
- Like #1
- Refresh Likes #1 查看明文 likes（公开解密）

## 三、本地开发（Mock）
1. 启动 Hardhat 本地节点（可选部署）
```
cd action/fhevm-hardhat-template
npx hardhat node
# 另一个终端
npx hardhat deploy --network localhost
```
2. 前端（自动使用 MockFhevmInstance）
```
cd action/frontend
npm i
npm run dev:mock
```

## 说明
- 前端在 31337 时自动使用 `@fhevm/mock-utils`，在测试网自动使用 `@zama-fhe/relayer-sdk`。
- 点赞采用 FHE 加密累加，支持公开解密接口 `getLikesClear` 以便展示。

