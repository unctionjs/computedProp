import mergeDeepRight from "@unction/mergedeepright"
import recordfrom from "@unction/recordfrom"

export default function computedProp (computer: FunctorType => mixed): Function {
  return function computedPropComputer (keychain: KeyChainType): Function {
    const receiver = recordfrom(keychain)

    return function computedPropComputerKeyChain (functor: FunctorType): FunctorType {
      return mergeDeepRight(functor)(receiver(computer(functor)))
    }
  }
}
