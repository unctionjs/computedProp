import mergeDeepRight from "@unction/mergedeepright";
import objectFrom from "@unction/objectfrom";

export default function computedProp (computer) {
  return function computedPropComputer (keychain) {
    const receiver = objectFrom(keychain);


    return function computedPropComputerKeyChain (functor) {
      return mergeDeepRight(functor)(receiver(computer(functor)));
    };
  };
}
