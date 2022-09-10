import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AcceptPauser,
  PairCreated,
  SetPauser
} from "../generated/Factory/Factory"

export function createAcceptPauserEvent(pauser: Address): AcceptPauser {
  let acceptPauserEvent = changetype<AcceptPauser>(newMockEvent())

  acceptPauserEvent.parameters = new Array()

  acceptPauserEvent.parameters.push(
    new ethereum.EventParam("pauser", ethereum.Value.fromAddress(pauser))
  )

  return acceptPauserEvent
}

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  stable: boolean,
  pair: Address,
  param4: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("stable", ethereum.Value.fromBoolean(stable))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("param4", ethereum.Value.fromUnsignedBigInt(param4))
  )

  return pairCreatedEvent
}

export function createSetPauserEvent(pendingPauser: Address): SetPauser {
  let setPauserEvent = changetype<SetPauser>(newMockEvent())

  setPauserEvent.parameters = new Array()

  setPauserEvent.parameters.push(
    new ethereum.EventParam(
      "pendingPauser",
      ethereum.Value.fromAddress(pendingPauser)
    )
  )

  return setPauserEvent
}
