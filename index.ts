import mergeDeepRight from "@unction/mergedeepright";
import objectFrom from "@unction/objectfrom";
import {KeyedEnumerableType} from "./types";
import {MapperFunctionType} from "./types";
import {KeyChainType} from "./types";

export default function computedProp<A, B, C> (mapper: MapperFunctionType<A, B>) {
  return function computedPropComputer (keychain: KeyChainType<C>) {
    return function computedPropComputerKeyChain (enumerable: KeyedEnumerableType<A, C | B>): KeyedEnumerableType<A, C | B> {
      return mergeDeepRight(enumerable)(objectFrom(keychain)(mapper(enumerable)));
    };
  };
}
