/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523415620000145762000014600080fd5b6200001e620001fc565b6200002a8183620001de565b50506040516118aa620003c682396118aa81f35b6000620000556200004f8462000152565b62000133565b905082815260208101848484011115620000725762000072600080fd5b6200007f848285620002fa565b509392505050565b600082601f8301126200009d576200009d600080fd5b8151620000af8482602086016200003e565b949350505050565b60008060408385031215620000cf57620000cf600080fd5b82516001600160401b03811115620000ea57620000ea600080fd5b620000f88582860162000087565b602085015190935090506001600160401b038111156200011b576200011b600080fd5b620001298582860162000087565b9150509250929050565b60006200013f60405190565b90506200014d82826200035e565b919050565b60006001600160401b038211156200016e576200016e620003a3565b601f19601f83011660200192915050565b601f821115620001bf576000818152602090206020601f85010481016020851015620001a85750805b620001bc6020601f860104830182620001c4565b50505b505050565b81811015620001da5760008155600101620001c4565b5050565b620001eb816000620003b9565b50620001f9816001620003b9565b50565b60008062001c70803803620002118162000133565b818382396200022382820182620000b7565b945094505050509091565b81516001600160401b038111156200024a576200024a620003a3565b6200025682546200032d565b620002638282856200017f565b506020601f8211600181146200029b5760008315620002825750848201515b600019600885021c1981166002850217855550620001bc565b600084815260208120601f198516915b82811015620002cd5787850151825560209485019460019092019101620002ab565b5084821015620002eb5783870151600019601f87166008021c191681555b50505050600202600101905550565b60005b8381101562000317578181015183820152602001620002fd565b8381111562000327576000848401525b50505050565b6002810460018216806200034257607f821691505b602082108114156200035857620003586200038d565b50919050565b601f19601f83011681016001600160401b0381118282101715620003865762000386620003a3565b6040525050565b634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b620001da82826200022e56fe6080604052600436106102fa5760003560e01c806301ffc9a781146100a7576306fdde0381146100e65763081812fc81146101155763095ea7b3811461014c576323b872dd8114610178576342842e0e81146101a857636352211e81146101cc576370a0823181146101ee576395d89b4181146102255763a22cb46581146102465763b88d4fde81146102695763c87b56dd811461029b5763e985e9c581146102c8576102f7565b34156100b5576100b5600080fd5b6100c036600461055b565b6100c98161133b565b90506100d460405190565b6100de8282610a2f565b915080820381f35b34156100f4576100f4600080fd5b6100ff3660046103b1565b61010761129c565b6040515b6100de8282610a3d565b341561012357610123600080fd5b61012e36600461059d565b61013781611232565b905061014260405190565b6100de82826109dd565b341561015a5761015a600080fd5b610165366004610528565b61016f8183611188565b50506040515b80005b341561018657610186600080fd5b610191366004610426565b61019c818385611539565b50505061017560405190565b34156101b6576101b6600080fd5b6101c1366004610426565b61019c8183856112f7565b34156101da576101da600080fd5b6101e536600461059d565b610137816112a9565b34156101fc576101fc600080fd5b6102073660046103c8565b610210816111ed565b905061021b60405190565b6100de8282610b39565b341561023357610233600080fd5b61023e3660046103b1565b61010761138e565b341561025457610254600080fd5b61025f3660046104f5565b61016f818361132a565b341561027757610277600080fd5b610282366004610476565b61028e81838587611307565b5050505061017560405190565b34156102a9576102a9600080fd5b6102b436600461059d565b6102bd816114b6565b905061010b60405190565b34156102d6576102d6600080fd5b6102e13660046103e9565b6102eb818361125e565b9150506100d460405190565b50505b610302600080fd5b611865565b600061031a61031584610bb3565b610b79565b90508281526020810184848401111561033557610335600080fd5b610340848285610cc1565b509392505050565b80356103538161182b565b92915050565b80356103538161183f565b803561035381611847565b805161035381611847565b600082601f83011261038e5761038e600080fd5b813561039e848260208601610307565b949350505050565b803561035381611857565b600081830312156103c4576103c4600080fd5b5050565b6000602082840312156103dd576103dd600080fd5b600061039e8484610348565b600080604083850312156103ff576103ff600080fd5b600061040b8585610348565b925050602061041c85828601610348565b9150509250929050565b60008060006060848603121561043e5761043e600080fd5b600061044a8686610348565b935050602061045b86828701610348565b925050604061046c868287016103a6565b9150509250925092565b6000806000806080858703121561048f5761048f600080fd5b600061049b8787610348565b94505060206104ac87828801610348565b93505060406104bd878288016103a6565b925050606085013567ffffffffffffffff8111156104dd576104dd600080fd5b6104e98782880161037a565b91505092959194509250565b6000806040838503121561050b5761050b600080fd5b60006105178585610348565b925050602061041c85828601610359565b6000806040838503121561053e5761053e600080fd5b600061054a8585610348565b925050602061041c858286016103a6565b60006020828403121561057057610570600080fd5b600061039e8484610364565b60006020828403121561059157610591600080fd5b600061039e848461036f565b6000602082840312156105b2576105b2600080fd5b600061039e84846103a6565b60006105ca838361063c565b9392505050565b6105da81610c21565b82525050565b8015156105da565b60006105f2825190565b808452602084019350610609818560208601610cf4565b601f01601f19169290920192915050565b6000610624825190565b610632818560208601610cf4565b9290920192915050565b6000815461064981610d24565b808552602085019450600182168015610669576001811461067b576106a9565b60ff19831686526020860193506106a9565b60008581526020902060005b838110156106a357815488820152600190910190602001610687565b87019450505b50505092915050565b60328152602081017f4552433732313a207472616e7366657220746f206e6f6e20455243373231526581527131b2b4bb32b91034b6b83632b6b2b73a32b960711b602082015290505b60400190565b60258152602081017f4552433732313a207472616e736665722066726f6d20696e636f72726563742081526437bbb732b960d91b602082015290506106fb565b60248152602081017f4552433732313a207472616e7366657220746f20746865207a65726f206164648152637265737360e01b602082015290506106fb565b602c8152602081017f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657881526b34b9ba32b73a103a37b5b2b760a11b602082015290506106fb565b60388152602081017f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7781527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015290506106fb565b602a8152602081017f4552433732313a2062616c616e636520717565727920666f7220746865207a65815269726f206164647265737360b01b602082015290506106fb565b60298152602081017f4552433732313a206f776e657220717565727920666f72206e6f6e657869737481526832b73a103a37b5b2b760b91b602082015290506106fb565b602c8152602081017f4552433732313a20617070726f76656420717565727920666f72206e6f6e657881526b34b9ba32b73a103a37b5b2b760a11b602082015290506106fb565b602f8152602081017f4552433732314d657461646174613a2055524920717565727920666f72206e6f81526e3732bc34b9ba32b73a103a37b5b2b760891b602082015290506106fb565b60218152602081017f4552433732313a20617070726f76616c20746f2063757272656e74206f776e658152603960f91b602082015290506106fb565b60318152602081017f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f8152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b602082015290506106fb565b806105da565b6109d1818361061a565b90506105ca818461061a565b6020810161035382846105d1565b608081016109f982846105d1565b610a0660208301856105d1565b610a1360408301866109c1565b8181036060830152610a2581876105e8565b9695505050505050565b6020810161035382846105e0565b602080825281016105ca81846105e8565b60208082528101610353816106b2565b6020808252810161035381610701565b6020808252810161035381610741565b6020808252810161035381601981527f4552433732313a20617070726f766520746f2063616c6c657200000000000000602082015260400190565b6020808252810161035381610780565b60208082528101610353816107c7565b602080825281016103538161081f565b6020808252810161035381610864565b60208082528101610353816108a8565b60208082528101610353816108ef565b6020808252810161035381610939565b6020808252810161035381610975565b6020810161035382846109c1565b6000610b5282610b95565b905080610b5e83610bb3565b602083019150601f1901610b72818361185d565b5050919050565b6000610b8460405190565b9050610b908282610d74565b919050565b6000610ba082610bb3565b610ba981610b79565b9283525090919050565b600067ffffffffffffffff821115610bcd57610bcd611629565b601f19601f83011660200192915050565b60008219821115610bf157610bf16115d1565b500190565b600082610c0557610c056115e7565b500490565b600082821015610c1c57610c1c6115d1565b500390565b60006001600160a01b038216610353565b600061035382610c98565b600061035382610c52565b6000811515610353565b600061035382610c21565b600081610353565b6000610c6f610ccd565b905090565b6000610c6f610ce8565b600060ff8216610353565b600061035360ff831660f81b90565b6000610ca360405190565b9050610caf81836105be565b610cbb82820383610d74565b50919050565b82818337506000910152565b6000610cd96001610b95565b600360fc1b6020820152905090565b6000610c6f6000610b95565b60005b83811015610d0f578181015183820152602001610cf7565b83811115610d1e576000848401525b50505050565b600281046001821680610d3857607f821691505b60208210811415610cbb57610cbb6115fd565b60003d8015610d6b57610d5d3d610b95565b91503d6000602084013e5090565b60605b91505090565b601f19601f830116810181811067ffffffffffffffff82111715610d9a57610d9a611629565b6040525050565b6004610dad8382611594565b9050610db982826117e8565b50610dc3826112a9565b7f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925610ded60405190565b8085858585600085a4505050505050565b6060610c6f610c74565b6000610e1383611283565b808015610f0757610e2385610c3d565b610e2c81610c3d565b905063150b7a0233823b610e4257610e42600080fd5b604051610e4f8360e01b90565b8152610e618b8b8a85600486016109eb565b9250602081828503836000885af19350600092508315610e9457610e853d82610d74565b610e913d82018261057c565b92505b505081158015610ee8576001610ea8610d4b565b80516000610eb581610c5d565b9091149050808015610ee0576040515b62461bcd60e51b8152610eda60048201610a4e565b81810382fd5b825183602001fd5b506001600160e01b031916630a85bd0160e11b14935061039e92505050565b506001915061039e9050565b60006002610f218382611594565b9050610f2c8161163f565b90506000610f3981610c52565b9050610f4481610c21565b610f4d83610c21565b1415949350505050565b6000610f6283610f13565b610f6b816116cd565b50610f75836112a9565b610f7e81610c21565b610f8784610c21565b148081610f9b57610f98858461125e565b90505b80925080610fc757610fac86611232565b9150610fb785610c21565b610fc083610c21565b1491508192505b5090949350505050565b610fdc83838361107f565b610fe884848484610e08565b610ff181611666565b5050505050565b61100182610c21565b61100a82610c21565b1415611015816116b0565b5060056110228282611576565b905061102e8382611576565b905061103a8482611803565b507f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3161106560405190565b61106f8582610a2f565b84848484840385a3505050505050565b611088836112a9565b61109182610c21565b61109a82610c21565b1490506110a681611676565b5060006110b281610c52565b90506110bd81610c21565b6110c684610c21565b14156110d181611693565b506110dc8482610da1565b5060016110e881610c5d565b905060036110f68382611576565b6110ff81611657565b6111098482610c0a565b90506111158183611817565b50506111218482611576565b905061112c81611657565b6111368382610bde565b9250506111438282611817565b505060026111518482611594565b905061115d83826117e8565b507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef610ded60405190565b611191826112a9565b61119a81610c21565b6111a383610c21565b14156111ae8161177b565b50336111b982610c21565b6111c282610c21565b1480816111d6576111d3838561125e565b90505b6111df816116ea565b505050506103c48282610da1565b6000806111f981610c52565b905061120481610c21565b61120d84610c21565b1415905061121a81611707565b5060036112278382611576565b90506105ca81611657565b600061123d82610f13565b61124681611741565b5060046112538382611594565b90506105ca8161163f565b6000600561126c8382611576565b90506112788482611576565b905061039e8161164b565b6000813b600061129281610c5d565b8211949350505050565b60606000610d6e81610c32565b600060026112b78382611594565b90506112c28161163f565b905060006112cf81610c52565b90506112da81610c21565b6112e383610c21565b141590506112f081611724565b5092915050565b6112ff610c74565b610d1e818585855b336113128482610f57565b905061131d81611798565b50610d1e84848484610fd1565b33611336838383610ff8565b505050565b60006001600160e01b031982166380ac58cd60e01b14808061136d57506001600160e01b03198316635b5e139f60e01b145b809150806112f0576301ffc9a760e01b6001600160e01b031985161461039e565b60606001610d6e81610c32565b606060006113a881610c5d565b831480156113b85761039e610c65565b508260005b6113c683610c5d565b821415806113d45750611400565b506113de8161155b565b9050600a6113eb81610c5d565b90506113f78184610bf6565b92506113bd9050565b61140981610b47565b91505b61141583610c5d565b8514158061142357506114af565b50600161142f81610c5d565b905061143b8183610c0a565b90508091506030600a61145661145082610c5d565b896115bd565b6114688161146385610c5d565b610bde565b92505061147482610c7e565b915061147f82610c89565b915081861a61148e848761159d565b5361149881610c5d565b925050506114a68187610bf6565b955061140c9050565b508061039e565b60606114c182610f13565b6114ca8161175e565b506114d3610dfe565b805160006114e081610c5d565b90911190506000818015611525576114f78661139b565b604051602081016115098388836109c7565b9081038252915061151c81830382610d74565b92506115309050565b61152d610c74565b91505b50949350505050565b336115448482610f57565b905061154f81611798565b5061133683838361107f565b600060001982141561156f5761156f6115d1565b5060010190565b61157f82610c3d565b60005280602052505060006040600020905090565b61157f82610c5d565b60006115a7825190565b83106115b5576115b5611613565b500160200190565b6000826115cc576115cc6115e7565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60006103538254610c21565b60006103538254610c7e565b60006103538254600081610353565b8061167357604051610ec5565b50565b806116735760405162461bcd60e51b8152610eda60048201610a5e565b806116735760405162461bcd60e51b8152610eda60048201610a6e565b806116735760405162461bcd60e51b8152610eda60048201610a7e565b806116735760405162461bcd60e51b8152610eda60048201610ab9565b806116735760405162461bcd60e51b8152610eda60048201610ac9565b806116735760405162461bcd60e51b8152610eda60048201610ad9565b806116735760405162461bcd60e51b8152610eda60048201610ae9565b806116735760405162461bcd60e51b8152610eda60048201610af9565b806116735760405162461bcd60e51b8152610eda60048201610b09565b806116735760405162461bcd60e51b8152610eda60048201610b19565b806116735760405162461bcd60e51b8152610eda60048201610b29565b600060ff835b81169019929092169190911792915050565b60006001600160a01b03836117bb565b6000600019836117bb565b6117f182610c3d565b6117fc8183546117cd565b8255505050565b61180c82610c48565b6117fc8183546117b5565b61182082610c5d565b6117fc8183546117dd565b61183481610c21565b811461167357600080fd5b801515611834565b6001600160e01b03198116611834565b80611834565b813682375050565bfea364697066735822122014c29b065310468cbf722f1883959b6fe2ce2e5c1676c0d8321fd8aba79763566c6578706572696d656e74616cf564736f6c63430008070041";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}