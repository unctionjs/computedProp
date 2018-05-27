import mergeDeepRight from "@unction/mergedeepright";
import recordfrom from "@unction/recordfrom";
export default function computedProp(computer) {
  return function computedPropComputer(keychain) {
    const receiver = recordfrom(keychain);
    return function computedPropComputerKeyChain(functor) {
      return mergeDeepRight(functor)(receiver(computer(functor)));
    };
  };
}
