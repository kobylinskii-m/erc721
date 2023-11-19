/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface CollectionFactoryInterface extends utils.Interface {
  functions: {
    "createCollection(string,string)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "createCollection"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createCollection",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createCollection",
    data: BytesLike
  ): Result;

  events: {
    "CollectionCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CollectionCreated"): EventFragment;
}

export interface CollectionCreatedEventObject {
  owner: string;
  collection: string;
}
export type CollectionCreatedEvent = TypedEvent<
  [string, string],
  CollectionCreatedEventObject
>;

export type CollectionCreatedEventFilter =
  TypedEventFilter<CollectionCreatedEvent>;

export interface CollectionFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CollectionFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createCollection(
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createCollection(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createCollection(
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "CollectionCreated(address,address)"(
      owner?: null,
      collection?: string | null
    ): CollectionCreatedEventFilter;
    CollectionCreated(
      owner?: null,
      collection?: string | null
    ): CollectionCreatedEventFilter;
  };

  estimateGas: {
    createCollection(
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createCollection(
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
