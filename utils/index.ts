import { Snowflake } from '@theinternetfolks/snowflake'

export function nextSnowflakeId(): string {
  return Snowflake.generate()
}
