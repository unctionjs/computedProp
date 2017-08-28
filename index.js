import mergeDeepRight from "@unction/mergedeepright"
import recordfrom from "@unction/recordfrom"

export default function computedProp (computer: IterableType => mixed): Function {
  return function computedPropComputer (keychain: KeyChainType): Function {
    const receiver = recordfrom(keychain)

    return function computedPropComputerKeyChain (iterable: IterableType): IterableType {
      return mergeDeepRight(iterable)(receiver(computer(iterable)))
    }
  }
}
