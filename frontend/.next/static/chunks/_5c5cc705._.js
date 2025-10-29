(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/abi/GraffitiChainABI.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraffitiChainABI",
    ()=>GraffitiChainABI
]);
const GraffitiChainABI = {
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ERC721IncorrectOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721InsufficientApproval",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approver",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidOperator",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidSender",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721NonexistentToken",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "author",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "encrypted",
                    "type": "bool"
                }
            ],
            "name": "CommentAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "author",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "GraffitiMinted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "enum GraffitiChain.ReactionKind",
                    "name": "kind",
                    "type": "uint8"
                }
            ],
            "name": "Reacted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Tipped",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "encrypted",
                    "type": "bool"
                }
            ],
            "name": "addComment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllGraffiti",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "uris",
                    "type": "string[]"
                },
                {
                    "internalType": "address[]",
                    "name": "authors",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "owners",
                    "type": "address[]"
                },
                {
                    "internalType": "euint32[]",
                    "name": "likes",
                    "type": "bytes32[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getComment",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getCommentsCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getEncryptedLikes",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getEncryptedReactions",
            "outputs": [
                {
                    "internalType": "euint32[4]",
                    "name": "out",
                    "type": "bytes32[4]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "graffitiInfo",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "externalEuint32",
                    "name": "encryptedOne",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "inputProof",
                    "type": "bytes"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "likeGraffiti",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "mintGraffitiNFT",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "protocolId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "externalEuint32",
                    "name": "encryptedOne",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "inputProof",
                    "type": "bytes"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "kind",
                    "type": "uint8"
                }
            ],
            "name": "react",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tip",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/abi/GraffitiChainAddresses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraffitiChainAddresses",
    ()=>GraffitiChainAddresses
]);
const GraffitiChainAddresses = {
    "31337": {
        "address": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
        "chainId": 31337,
        "chainName": "hardhat"
    },
    "11155111": {
        "address": "0xfB1f7988aCc21cDCf83d72F91741223dBA0F6245",
        "chainId": 11155111,
        "chainName": "sepolia"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/fhevm/internal/fhevm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFhevmInstance",
    ()=>createFhevmInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
;
function isRelayerLoaded() {
    return "object" !== "undefined" && typeof window.relayerSDK !== "undefined";
}
async function loadRelayerSDK() {
    if (isRelayerLoaded()) return;
    await new Promise((resolve, reject)=>{
        const script = document.createElement("script");
        script.src = "https://cdn.zama.ai/relayer-sdk-js/0.2.0/relayer-sdk-js.umd.cjs";
        script.type = "text/javascript";
        script.async = true;
        script.onload = ()=>resolve();
        script.onerror = ()=>reject(new Error("Failed to load relayer sdk"));
        document.head.appendChild(script);
    });
}
async function ensureInitialized() {
    if (!isRelayerLoaded()) throw new Error("relayer sdk not loaded");
    if (window.relayerSDK.__initialized__) return;
    const ok = await window.relayerSDK.initSDK();
    if (!ok) throw new Error("initSDK failed");
    window.relayerSDK.__initialized__ = true;
}
async function getChainId(providerOrUrl) {
    if (typeof providerOrUrl === "string") {
        const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](providerOrUrl);
        return Number((await p.getNetwork()).chainId);
    }
    const hex = await providerOrUrl.request({
        method: "eth_chainId"
    });
    return Number.parseInt(hex, 16);
}
async function getWeb3ClientVersion(rpcUrl) {
    try {
        const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
        const v = await p.send("web3_clientVersion", []);
        return typeof v === "string" ? v : undefined;
    } catch (e) {
        return undefined;
    }
}
async function getFhevmRelayerMetadata(rpcUrl) {
    try {
        const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
        const res = await p.send("fhevm_relayer_metadata", []);
        if (res && typeof res === "object" && typeof res.ACLAddress === "string" && typeof res.InputVerifierAddress === "string" && typeof res.KMSVerifierAddress === "string") {
            return res;
        }
        return undefined;
    } catch (e) {
        return undefined;
    }
}
async function createFhevmInstance(params) {
    const chainId = await getChainId(params.provider);
    const isLocal = chainId === 31337;
    if (isLocal) {
        const url = typeof params.provider === "string" ? params.provider : "http://localhost:8545";
        const version = await getWeb3ClientVersion(url);
        if (version && version.toLowerCase().includes("hardhat")) {
            const metadata = await getFhevmRelayerMetadata(url);
            const { MockFhevmInstance } = await __turbopack_context__.A("[project]/node_modules/@fhevm/mock-utils/_esm/index.js [app-client] (ecmascript, async loader)");
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](url);
            var _ref;
            // Fallback to known dev addresses if metadata is not available
            const ACL = (_ref = metadata === null || metadata === void 0 ? void 0 : metadata.ACLAddress) !== null && _ref !== void 0 ? _ref : "0x50157CFfD6bBFA2DECe204a89ec419c23ef5755d";
            var _ref1;
            const INPUTV = (_ref1 = metadata === null || metadata === void 0 ? void 0 : metadata.InputVerifierAddress) !== null && _ref1 !== void 0 ? _ref1 : "0x901F8942346f7AB3a01F6D7613119Bca447Bb030";
            var _ref2;
            const KMS = (_ref2 = metadata === null || metadata === void 0 ? void 0 : metadata.KMSVerifierAddress) !== null && _ref2 !== void 0 ? _ref2 : "0x1364cBBf2cDF5032C47d8226a6f6FBD2AFCDacAC";
            return await MockFhevmInstance.create(provider, provider, {
                chainId: 31337,
                gatewayChainId: 55815,
                aclContractAddress: ACL,
                inputVerifierContractAddress: INPUTV,
                kmsContractAddress: KMS,
                verifyingContractAddressDecryption: "0x5ffdaAB0373E62E2ea2944776209aEf29E631A64",
                verifyingContractAddressInputVerification: "0x812b06e1CDCE800494b79fFE4f925A504a9A9810"
            });
        }
    }
    await loadRelayerSDK();
    await ensureInitialized();
    const relayer = window.relayerSDK;
    const config = {
        ...relayer.SepoliaConfig,
        network: params.provider
    };
    const instance = await relayer.createInstance(config);
    return instance;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Navbar(param) {
    let { address, onConnect, fhevmStatus, chainId } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const getStatusClass = ()=>{
        if (fhevmStatus === "ready") return "status-ready";
        if (fhevmStatus === "loading") return "status-loading";
        if (fhevmStatus === "error") return "status-error";
        return "";
    };
    const getChainName = ()=>{
        if (chainId === 11155111) return "Sepolia";
        if (chainId === 31337) return "Localhost";
        return chainId ? "Chain ".concat(chainId) : "Unknown";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            borderBottom: "2px solid rgba(131, 56, 236, 0.3)",
            backdropFilter: "blur(10px)",
            background: "rgba(22, 33, 62, 0.7)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "32px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: "1.5rem",
                            background: "linear-gradient(90deg, #ff006e, #8338ec)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        },
                        children: "🎨 GRAFFITI CHAIN"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/"),
                                style: {
                                    background: pathname === "/" ? "rgba(6, 255, 165, 0.2)" : "transparent",
                                    border: pathname === "/" ? "2px solid #06ffa5" : "2px solid rgba(255, 255, 255, 0.2)",
                                    color: pathname === "/" ? "#06ffa5" : "#e0e0e0"
                                },
                                children: "🏠 Wall"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/create"),
                                style: {
                                    background: pathname === "/create" ? "rgba(255, 0, 110, 0.2)" : "transparent",
                                    border: pathname === "/create" ? "2px solid #ff006e" : "2px solid rgba(255, 255, 255, 0.2)",
                                    color: pathname === "/create" ? "#ff006e" : "#e0e0e0"
                                },
                                children: "✏️ Create"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "20px"
                },
                children: [
                    chainId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "8px 16px",
                            background: "rgba(58, 134, 255, 0.2)",
                            border: "1px solid #3a86ff",
                            borderRadius: "20px",
                            color: "#3a86ff",
                            fontSize: "0.85rem",
                            fontWeight: "bold"
                        },
                        children: getChainName()
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "status-badge ".concat(getStatusClass()),
                        children: [
                            "FHEVM: ",
                            fhevmStatus.toUpperCase()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    address ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "10px 20px",
                            background: "rgba(6, 255, 165, 0.1)",
                            border: "2px solid #06ffa5",
                            borderRadius: "8px",
                            color: "#06ffa5",
                            fontFamily: "monospace"
                        },
                        children: [
                            address.slice(0, 6),
                            "...",
                            address.slice(-4)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onConnect,
                        children: "Connect Wallet"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Navbar, "gA9e4WsoP6a20xDgQgrFkfMP8lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$GraffitiChainABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abi/GraffitiChainABI.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$GraffitiChainAddresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abi/GraffitiChainAddresses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fhevm/internal/fhevm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
var ReactionKind = /*#__PURE__*/ function(ReactionKind) {
    ReactionKind[ReactionKind["Heart"] = 0] = "Heart";
    ReactionKind[ReactionKind["Fire"] = 1] = "Fire";
    ReactionKind[ReactionKind["Thumbs"] = 2] = "Thumbs";
    ReactionKind[ReactionKind["Party"] = 3] = "Party";
    return ReactionKind;
}(ReactionKind || {});
function Home() {
    var _reactionsMap_selectedGraffiti_tokenId, _reactionsMap_selectedGraffiti_tokenId1, _reactionsMap_selectedGraffiti_tokenId2, _reactionsMap_selectedGraffiti_tokenId3;
    _s();
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [signer, setSigner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chainId, setChainId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [instance, setInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fhevmStatus, setFhevmStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [graffitis, setGraffitis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedGraffiti, setSelectedGraffiti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [decryptedLikes, setDecryptedLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [reactionsMap, setReactionsMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tipValue, setTipValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0.001");
    const [commentInput, setCommentInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            setProvider(p);
            p.getNetwork().then({
                "Home.useEffect": (n)=>setChainId(Number(n.chainId))
            }["Home.useEffect"]);
            const autoConnect = {
                "Home.useEffect.autoConnect": async ()=>{
                    var _eth_on, _eth_on1;
                    const eth = window.ethereum;
                    if (!eth) return;
                    const last = localStorage.getItem("gc:lastChainId");
                    if (last === "31337") {
                        try {
                            await eth.request({
                                method: "wallet_switchEthereumChain",
                                params: [
                                    {
                                        chainId: "0x7A69"
                                    }
                                ]
                            });
                        } catch (e) {}
                    }
                    try {
                        const accs = await eth.request({
                            method: "eth_accounts"
                        });
                        if (accs && accs.length > 0) {
                            setFhevmStatus("loading");
                            const _provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(eth);
                            setProvider(_provider);
                            const s = await _provider.getSigner();
                            setSigner(s);
                            setAddress(await s.getAddress());
                            const inst = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFhevmInstance"])({
                                provider: eth
                            });
                            setInstance(inst);
                            const net = await _provider.getNetwork();
                            setChainId(Number(net.chainId));
                            setFhevmStatus("ready");
                        }
                    } catch (e) {}
                    (_eth_on = eth.on) === null || _eth_on === void 0 ? void 0 : _eth_on.call(eth, "accountsChanged", {
                        "Home.useEffect.autoConnect": async (accs)=>{
                            if (accs && accs.length > 0) {
                                const _provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(eth);
                                setProvider(_provider);
                                const s = await _provider.getSigner();
                                setSigner(s);
                                setAddress(await s.getAddress());
                            } else {
                                setSigner(null);
                                setAddress("");
                            }
                        }
                    }["Home.useEffect.autoConnect"]);
                    (_eth_on1 = eth.on) === null || _eth_on1 === void 0 ? void 0 : _eth_on1.call(eth, "chainChanged", {
                        "Home.useEffect.autoConnect": async ()=>{
                            const _provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(eth);
                            setProvider(_provider);
                            const net = await _provider.getNetwork();
                            setChainId(Number(net.chainId));
                            try {
                                const inst = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFhevmInstance"])({
                                    provider: eth
                                });
                                setInstance(inst);
                                setFhevmStatus("ready");
                            } catch (e) {
                                setFhevmStatus("error");
                            }
                        }
                    }["Home.useEffect.autoConnect"]);
                }
            }["Home.useEffect.autoConnect"];
            autoConnect();
        }
    }["Home.useEffect"], []);
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[target]": ()=>{
            if (!chainId) return undefined;
            return __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$GraffitiChainAddresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraffitiChainAddresses"][String(chainId)];
        }
    }["Home.useMemo[target]"], [
        chainId
    ]);
    const isDeployed = !!(target === null || target === void 0 ? void 0 : target.address) && target.address !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress;
    const connect = async ()=>{
        if (!provider) return;
        setFhevmStatus("loading");
        try {
            const currentChainHex = await window.ethereum.request({
                method: "eth_chainId"
            });
            const currentChain = parseInt(currentChainHex, 16);
            if (currentChain !== 31337) {
                try {
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [
                            {
                                chainId: "0x7A69"
                            }
                        ]
                    });
                } catch (switchError) {
                    if ((switchError === null || switchError === void 0 ? void 0 : switchError.code) === 4902) {
                        await window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainId: "0x7A69",
                                    chainName: "Localhost 8545",
                                    nativeCurrency: {
                                        name: "ETH",
                                        symbol: "ETH",
                                        decimals: 18
                                    },
                                    rpcUrls: [
                                        "http://127.0.0.1:8545"
                                    ]
                                }
                            ]
                        });
                        await window.ethereum.request({
                            method: "wallet_switchEthereumChain",
                            params: [
                                {
                                    chainId: "0x7A69"
                                }
                            ]
                        });
                    }
                }
            }
            localStorage.setItem("gc:lastChainId", "31337");
        } catch (e) {}
        await provider.send("eth_requestAccounts", []);
        const s = await provider.getSigner();
        setSigner(s);
        setAddress(await s.getAddress());
        try {
            const inst = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFhevmInstance"])({
                provider: window.ethereum
            });
            setInstance(inst);
            setFhevmStatus("ready");
            const n = await provider.getNetwork();
            setChainId(Number(n.chainId));
        } catch (e) {
            console.error(e);
            setFhevmStatus("error");
        }
    };
    const loadGraffitis = async ()=>{
        if (!provider || !(target === null || target === void 0 ? void 0 : target.address) || !isDeployed) return;
        setLoading(true);
        try {
            const code = await provider.send("eth_getCode", [
                target.address,
                "latest"
            ]);
            if (!code || code === "0x") {
                setGraffitis([]);
                return;
            }
            const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(target.address, __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$GraffitiChainABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraffitiChainABI"].abi, provider);
            const total = await c.totalSupply();
            const items = [];
            for(let i = 1; i <= Number(total); i++){
                try {
                    const [uri, owner, author] = await c.graffitiInfo(i);
                    const likesHandle = await c.getEncryptedLikes(i);
                    items.push({
                        tokenId: i,
                        uri,
                        author,
                        owner,
                        likesHandle
                    });
                } catch (e) {
                    console.error("Failed to load token ".concat(i), e);
                }
            }
            setGraffitis(items);
        } catch (e) {
            console.error(e);
        } finally{
            setLoading(false);
        }
    };
    const likeGraffiti = async (tokenId)=>{
        if (!signer || !(target === null || target === void 0 ? void 0 : target.address) || !instance) return;
        const net = await signer.provider.getNetwork();
        const currentChainId = Number(net.chainId);
        var _target_chainId;
        if (currentChainId !== ((_target_chainId = target.chainId) !== null && _target_chainId !== void 0 ? _target_chainId : currentChainId)) return;
        const code = await signer.provider.send("eth_getCode", [
            target.address,
            "latest"
        ]);
        if (!code || code === "0x") return;
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(target.address, __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$GraffitiChainABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraffitiChainABI"].abi, signer);
        const input = instance.createEncryptedInput(target.address, await signer.getAddress());
        input.add32(1);
        const enc = await input.encrypt();
        const tx = await c.likeGraffiti(enc.handles[0], enc.inputProof, tokenId);
        await tx.wait();
        loadGraffitis();
    };
    const react = async (tokenId, kind)=>{
        if (!signer || !(target === null || target === void 0 ? void 0 : target.address) || !instance) return;
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(target.address, __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$GraffitiChainABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraffitiChainABI"].abi, signer);
        const input = instance.createEncryptedInput(target.address, await signer.getAddress());
        input.add32(1);
        const enc = await input.encrypt();
        const tx = await c.react(enc.handles[0], enc.inputProof, tokenId, kind);
        await tx.wait();
    };
    const decryptReactions = async (tokenId)=>{
        if (!instance || !(target === null || target === void 0 ? void 0 : target.address) || !provider) return;
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(target.address, __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$GraffitiChainABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraffitiChainABI"].abi, provider);
        const arr = await c.getEncryptedReactions(tokenId);
        if (typeof instance.userDecrypt === "function" && signer) {
            const userAddress = await signer.getAddress();
            const { publicKey, privateKey } = instance.generateKeypair ? instance.generateKeypair() : {
                publicKey: undefined,
                privateKey: undefined
            };
            const startTimestamp = Math.floor(Date.now() / 1000);
            const durationDays = 365;
            const eip712 = instance.createEIP712(publicKey, [
                target.address
            ], startTimestamp, durationDays);
            const signature = await signer.signTypedData(eip712.domain, {
                UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification
            }, eip712.message);
            const inputs = arr.map((h)=>({
                    handle: h,
                    contractAddress: target.address
                }));
            const res = await instance.userDecrypt(inputs, privateKey, publicKey, signature, [
                target.address
            ], userAddress, startTimestamp, durationDays);
            const vals = arr.map((h)=>Number(res[h]));
            setReactionsMap((prev)=>({
                    ...prev,
                    [tokenId]: {
                        heart: vals[0],
                        fire: vals[1],
                        thumbs: vals[2],
                        party: vals[3]
                    }
                }));
        }
    };
    const addComment = async (tokenId, text)=>{
        if (!signer || !(target === null || target === void 0 ? void 0 : target.address)) return;
        // 简化：先把明文注入到 data: URL 模式，正式版会走 Pinata 上传
        const dataUri = "data:text/plain;base64,".concat(btoa(unescape(encodeURIComponent(text))));
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(target.address, __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$GraffitiChainABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraffitiChainABI"].abi, signer);
        const tx = await c.addComment(tokenId, dataUri, false);
        await tx.wait();
        await loadComments(tokenId);
        setCommentInput("");
    };
    const loadComments = async (tokenId)=>{
        if (!provider || !(target === null || target === void 0 ? void 0 : target.address)) return;
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(target.address, __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$GraffitiChainABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraffitiChainABI"].abi, provider);
        const count = await c.getCommentsCount(tokenId);
        const arr = [];
        for(let i = 0; i < Number(count); i++){
            const [author, uri, encrypted, ts] = await c.getComment(tokenId, i);
            arr.push({
                author,
                uri,
                encrypted,
                ts: Number(ts)
            });
        }
        setComments((prev)=>({
                ...prev,
                [tokenId]: arr
            }));
    };
    const tip = async (tokenId)=>{
        if (!signer || !(target === null || target === void 0 ? void 0 : target.address)) return;
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(target.address, __TURBOPACK__imported__module__$5b$project$5d2f$abi$2f$GraffitiChainABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraffitiChainABI"].abi, signer);
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther(tipValue || "0.001");
        const tx = await c.tip(tokenId, {
            value
        });
        await tx.wait();
    };
    const decryptLikes = async (tokenId, handle)=>{
        if (!instance || !(target === null || target === void 0 ? void 0 : target.address)) return;
        try {
            if (typeof instance.userDecrypt === "function" && signer) {
                const userAddress = await signer.getAddress();
                const { publicKey, privateKey } = instance.generateKeypair ? instance.generateKeypair() : {
                    publicKey: undefined,
                    privateKey: undefined
                };
                const startTimestamp = Math.floor(Date.now() / 1000);
                const durationDays = 365;
                const eip712 = instance.createEIP712(publicKey, [
                    target.address
                ], startTimestamp, durationDays);
                const signature = await signer.signTypedData(eip712.domain, {
                    UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification
                }, eip712.message);
                const res = await instance.userDecrypt([
                    {
                        handle,
                        contractAddress: target.address
                    }
                ], privateKey, publicKey, signature, [
                    target.address
                ], userAddress, startTimestamp, durationDays);
                const clear = res[handle];
                setDecryptedLikes((prev)=>({
                        ...prev,
                        [tokenId]: Number(clear)
                    }));
                return;
            }
            if (typeof instance.decryptPublic === "function") {
                const clear = await instance.decryptPublic(target.address, handle);
                setDecryptedLikes((prev)=>({
                        ...prev,
                        [tokenId]: Number(clear)
                    }));
                return;
            }
        } catch (e) {
            console.error("Decrypt failed", e);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (provider && isDeployed) {
                loadGraffitis();
            }
        }
    }["Home.useEffect"], [
        provider,
        isDeployed
    ]);
    var _reactionsMap_selectedGraffiti_tokenId_heart, _reactionsMap_selectedGraffiti_tokenId_fire, _reactionsMap_selectedGraffiti_tokenId_thumbs, _reactionsMap_selectedGraffiti_tokenId_party, _comments_selectedGraffiti_tokenId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                address: address,
                onConnect: connect,
                fhevmStatus: fhevmStatus,
                chainId: chainId
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    padding: "40px",
                    minHeight: "calc(100vh - 80px)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1400px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: "32px",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        marginBottom: "16px"
                                    },
                                    children: "🧱 GRAFFITI WALL"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#8338ec",
                                        fontSize: "1.1rem"
                                    },
                                    children: "Explore on-chain digital art with encrypted reactions powered by FHEVM"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center",
                                padding: "60px",
                                color: "#ffb300",
                                fontSize: "1.2rem"
                            },
                            children: "⏳ Loading graffitis from chain..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this),
                        !loading && !isDeployed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card",
                            style: {
                                textAlign: "center",
                                padding: "60px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        marginBottom: "12px"
                                    },
                                    children: "Contract not deployed on this network"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#999",
                                        marginBottom: "24px"
                                    },
                                    children: [
                                        "Please switch your wallet to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "neon-text",
                                            children: "Sepolia"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 95
                                        }, this),
                                        " or click Connect to switch to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "neon-text",
                                            children: "Localhost 31337"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 168
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this),
                        !loading && isDeployed && graffitis.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card",
                            style: {
                                textAlign: "center",
                                padding: "60px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "4rem",
                                        marginBottom: "20px"
                                    },
                                    children: "🎨"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        marginBottom: "16px"
                                    },
                                    children: "No graffitis yet!"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#999",
                                        marginBottom: "24px"
                                    },
                                    children: "Be the first to create some digital art on-chain"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.location.href = "/create",
                                    children: "✏️ Create First Graffiti"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "graffiti-grid",
                            children: graffitis.map((g)=>{
                                var _reactionsMap_g_tokenId, _reactionsMap_g_tokenId1, _reactionsMap_g_tokenId2, _reactionsMap_g_tokenId3;
                                var _reactionsMap_g_tokenId_heart, _reactionsMap_g_tokenId_fire, _reactionsMap_g_tokenId_thumbs, _reactionsMap_g_tokenId_party;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "graffiti-card",
                                    onClick: ()=>{
                                        setSelectedGraffiti(g);
                                        loadComments(g.tokenId);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "100%",
                                                height: "220px",
                                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "4rem",
                                                borderBottom: "2px solid rgba(58, 134, 255, 0.3)"
                                            },
                                            children: "🎨"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "graffiti-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        marginBottom: "8px",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: [
                                                        "Graffiti #",
                                                        g.tokenId
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.85rem",
                                                        color: "#999",
                                                        marginBottom: "12px"
                                                    },
                                                    children: [
                                                        "by ",
                                                        g.author.slice(0, 6),
                                                        "...",
                                                        g.author.slice(-4)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: "8px",
                                                        alignItems: "center",
                                                        flexWrap: "wrap"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "like-btn",
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                react(g.tokenId, 0);
                                                            },
                                                            children: "❤️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "like-btn",
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                react(g.tokenId, 1);
                                                            },
                                                            children: "🔥"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "like-btn",
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                react(g.tokenId, 2);
                                                            },
                                                            children: "👍"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "like-btn",
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                react(g.tokenId, 3);
                                                            },
                                                            children: "🎉"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            style: {
                                                                fontSize: "0.85rem",
                                                                padding: "6px 12px"
                                                            },
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                decryptReactions(g.tokenId);
                                                            },
                                                            children: "🔓 Reactions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: "0.85rem",
                                                                color: "#ccc"
                                                            },
                                                            children: [
                                                                (_reactionsMap_g_tokenId_heart = (_reactionsMap_g_tokenId = reactionsMap[g.tokenId]) === null || _reactionsMap_g_tokenId === void 0 ? void 0 : _reactionsMap_g_tokenId.heart) !== null && _reactionsMap_g_tokenId_heart !== void 0 ? _reactionsMap_g_tokenId_heart : "?",
                                                                " ❤️ · ",
                                                                (_reactionsMap_g_tokenId_fire = (_reactionsMap_g_tokenId1 = reactionsMap[g.tokenId]) === null || _reactionsMap_g_tokenId1 === void 0 ? void 0 : _reactionsMap_g_tokenId1.fire) !== null && _reactionsMap_g_tokenId_fire !== void 0 ? _reactionsMap_g_tokenId_fire : "?",
                                                                " 🔥 · ",
                                                                (_reactionsMap_g_tokenId_thumbs = (_reactionsMap_g_tokenId2 = reactionsMap[g.tokenId]) === null || _reactionsMap_g_tokenId2 === void 0 ? void 0 : _reactionsMap_g_tokenId2.thumbs) !== null && _reactionsMap_g_tokenId_thumbs !== void 0 ? _reactionsMap_g_tokenId_thumbs : "?",
                                                                " 👍 · ",
                                                                (_reactionsMap_g_tokenId_party = (_reactionsMap_g_tokenId3 = reactionsMap[g.tokenId]) === null || _reactionsMap_g_tokenId3 === void 0 ? void 0 : _reactionsMap_g_tokenId3.party) !== null && _reactionsMap_g_tokenId_party !== void 0 ? _reactionsMap_g_tokenId_party : "?",
                                                                " 🎉"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, g.tokenId, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            selectedGraffiti && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: ()=>setSelectedGraffiti(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    onClick: (e)=>e.stopPropagation(),
                    style: {
                        maxWidth: "900px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: "20px",
                                color: "#06ffa5"
                            },
                            children: [
                                "Graffiti #",
                                selectedGraffiti.tokenId
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "100%",
                                height: "320px",
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                borderRadius: "12px",
                                marginBottom: "24px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "6rem"
                            },
                            children: "🎨"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "20px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                marginBottom: "12px"
                                            },
                                            children: "Reactions"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "8px",
                                                flexWrap: "wrap",
                                                marginBottom: "12px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "like-btn",
                                                    onClick: ()=>react(selectedGraffiti.tokenId, 0),
                                                    children: "❤️"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "like-btn",
                                                    onClick: ()=>react(selectedGraffiti.tokenId, 1),
                                                    children: "🔥"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "like-btn",
                                                    onClick: ()=>react(selectedGraffiti.tokenId, 2),
                                                    children: "👍"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "like-btn",
                                                    onClick: ()=>react(selectedGraffiti.tokenId, 3),
                                                    children: "🎉"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>decryptReactions(selectedGraffiti.tokenId),
                                                    children: "🔓 Decrypt"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#ccc"
                                            },
                                            children: [
                                                (_reactionsMap_selectedGraffiti_tokenId_heart = (_reactionsMap_selectedGraffiti_tokenId = reactionsMap[selectedGraffiti.tokenId]) === null || _reactionsMap_selectedGraffiti_tokenId === void 0 ? void 0 : _reactionsMap_selectedGraffiti_tokenId.heart) !== null && _reactionsMap_selectedGraffiti_tokenId_heart !== void 0 ? _reactionsMap_selectedGraffiti_tokenId_heart : "?",
                                                " ❤️ · ",
                                                (_reactionsMap_selectedGraffiti_tokenId_fire = (_reactionsMap_selectedGraffiti_tokenId1 = reactionsMap[selectedGraffiti.tokenId]) === null || _reactionsMap_selectedGraffiti_tokenId1 === void 0 ? void 0 : _reactionsMap_selectedGraffiti_tokenId1.fire) !== null && _reactionsMap_selectedGraffiti_tokenId_fire !== void 0 ? _reactionsMap_selectedGraffiti_tokenId_fire : "?",
                                                " 🔥 · ",
                                                (_reactionsMap_selectedGraffiti_tokenId_thumbs = (_reactionsMap_selectedGraffiti_tokenId2 = reactionsMap[selectedGraffiti.tokenId]) === null || _reactionsMap_selectedGraffiti_tokenId2 === void 0 ? void 0 : _reactionsMap_selectedGraffiti_tokenId2.thumbs) !== null && _reactionsMap_selectedGraffiti_tokenId_thumbs !== void 0 ? _reactionsMap_selectedGraffiti_tokenId_thumbs : "?",
                                                " 👍 · ",
                                                (_reactionsMap_selectedGraffiti_tokenId_party = (_reactionsMap_selectedGraffiti_tokenId3 = reactionsMap[selectedGraffiti.tokenId]) === null || _reactionsMap_selectedGraffiti_tokenId3 === void 0 ? void 0 : _reactionsMap_selectedGraffiti_tokenId3.party) !== null && _reactionsMap_selectedGraffiti_tokenId_party !== void 0 ? _reactionsMap_selectedGraffiti_tokenId_party : "?",
                                                " 🎉"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                marginBottom: "12px"
                                            },
                                            children: "Tip the artist"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: tipValue,
                                                    onChange: (e)=>setTipValue(e.target.value),
                                                    placeholder: "0.001"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>tip(selectedGraffiti.tokenId),
                                                    children: "💸 Tip"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "#999",
                                                marginTop: "8px"
                                            },
                                            children: "Amount in ETH"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    style: {
                                        gridColumn: "1 / span 2"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                marginBottom: "12px"
                                            },
                                            children: "Comments"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "8px",
                                                marginBottom: "12px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: commentInput,
                                                    onChange: (e)=>setCommentInput(e.target.value),
                                                    placeholder: "Write a comment..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>addComment(selectedGraffiti.tokenId, commentInput),
                                                    disabled: !commentInput.trim(),
                                                    children: "Send"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "grid",
                                                gap: "8px"
                                            },
                                            children: ((_comments_selectedGraffiti_tokenId = comments[selectedGraffiti.tokenId]) !== null && _comments_selectedGraffiti_tokenId !== void 0 ? _comments_selectedGraffiti_tokenId : []).map((c, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "card",
                                                    style: {
                                                        padding: "12px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: "0.85rem",
                                                                color: "#999",
                                                                marginBottom: "6px"
                                                            },
                                                            children: [
                                                                c.author.slice(0, 6),
                                                                "...",
                                                                c.author.slice(-4),
                                                                " · ",
                                                                new Date(c.ts * 1000).toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                wordBreak: "break-all"
                                                            },
                                                            children: c.uri.startsWith("data:") ? decodeURIComponent(escape(atob(c.uri.split(",")[1]))) : c.uri
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 23
                                                        }, this),
                                                        c.encrypted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: "#ffb300",
                                                                fontSize: "0.85rem"
                                                            },
                                                            children: "Encrypted off-chain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "16px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedGraffiti(null),
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 364,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 363,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 320,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "sXy/BKUQ4z6oK7B40NbTf3Y+GK4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5c5cc705._.js.map