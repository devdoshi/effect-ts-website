import { Effect, Schedule } from "effect"
import * as Delay from "./Delay"

const schedule = Schedule.recurs(2).pipe(
  Schedule.tapOutput((n) => Effect.sync(() => console.log(`repeating ${n}`)))
)

Effect.runPromise(Effect.repeat(Delay.log, schedule))
/*
delay: 2
repeating 0
delay: 8
repeating 1
delay: 5
repeating 2
 */
