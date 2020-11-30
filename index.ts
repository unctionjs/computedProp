import mergeDeepRight from "@unction/mergedeepright";
import objectFrom from "@unction/objectfrom";

import {MapperFunctionType} from "./types";
import {KeyChainType} from "./types";

export default function computedProp<A, B, C> (mapper: MapperFunctionType<A, B>) {
  return function computedPropComputer (keychain: KeyChainType<C>) {
    return function computedPropComputerKeyChain (enumerable: Array<A> | Set<A> | RecordType<C | B, A> | string): Array<A> | Set<A> | RecordType<C | B, A> | string {
      return mergeDeepRight(enumerable)(objectFrom(keychain)(mapper(enumerable)));
    };
  };
}
